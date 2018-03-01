/**
 * Created by Administrator on 2018/3/1.
 */
window.onload = function () {
    var sl = new Sel('content');
    sl.add('0', ['河南', '陕西', '湖北']);
    sl.add('0_0', ['洛阳', '三门峡', '郑州']);
    sl.add('0_0_0', ['涧西区', '西工区', '老城区']);
    sl.add('0_0_1', ['灵宝', '故县', '案底']);
    sl.add('0_0_2', ['巩义', '荣阳', '新密']);
    sl.add('0_1', ['西安', '渭南', '宝鸡']);
    sl.add('0_1_0', ['长安区', '碑林区', '雁塔区']);
    sl.add('0_1_1', ['临渭区', '韩城', '蒲城']);
    sl.add('0_1_2', ['金台区', '渭滨区', '陈仓区']);
    sl.add('0_2', ['武汉', '孝感', '宜昌']);
    sl.add('0_2_0', ['江岸区', '江汉区', '汉阳区']);
    sl.add('0_2_1', ['孝南区', '大悟县', '云梦县']);
    sl.add('0_2_2', ['远安县', '兴山县', '秭归县']);

    sl.init(3);
}
function Sel(id) {
    this.oParent = document.getElementById(id);
    this.data = {};
    this.aSel = document.getElementsByTagName('select');
}
Sel.prototype = {
    init: function (num) {
        var _this = this;
        for(var i=0; i<num; i++) {
            var oSel = document.createElement('select');
            oSel.index = i;
            var oPt = document.createElement('option');
            oPt.innerHTML = '默认';
            oSel.appendChild(oPt);
            this.oParent.appendChild(oSel);

            oSel.onchange = function () {
                _this.change(this.index);
            }
        }
        this.first();
    },
    add : function (key, value) {
        this.data[key] = value;
    },
    first: function () {
        var arr = this.data['0'];
        for(var i=0; i<arr.length; i++) {
            var oPt = document.createElement('option');
            oPt.innerHTML = arr[i];
            this.aSel[0].appendChild(oPt);
        }
    },
    change: function (iNow) {
        var str = '0';
        if(iNow < this.aSel.length-1) {
            for(var i=0; i<iNow+1; i++) {
                str += '_' + (this.aSel[i].selectedIndex-1);
            }
            if(this.data[str]) {
                var arr = this.data[str];
                this.aSel[iNow+1].length = 1;
                for(var i=0; i<arr.length; i++) {
                    var oPt = document.createElement('option');
                    oPt.innerHTML = arr[i];
                    this.aSel[iNow+1].appendChild(oPt);
                    this.aSel[iNow+1].options[1].selected = true;
                }
            } else {
                for(var i=iNow+1; i<this.aSel.length; i++) {
                    this.aSel[i].length = 1;
                }
            }

            iNow++;
            this.change(iNow);
        }

    }

}