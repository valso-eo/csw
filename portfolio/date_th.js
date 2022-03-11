var mydate=new Date()
var year=mydate.getYear() + 543
    if (year < 1000)
        year+=1900
        var day=mydate.getDay()
        var month=mydate.getMonth()
        var daym=mydate.getDate()
            if (daym<10)
                daym="0"+daym
        var montharray=new Array("มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","กรกฎาคม","มิถุนายน","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม")
        
        document.write("<div style='padding: 10px;border: 1px #ccc solid;width: fit-content;border-radius: 7px;background-color: #fff;'>วันนี้วันที่  "+daym+" "+montharray[month]+" พ.ศ. "+year+"</div>")