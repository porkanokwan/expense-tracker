function ReportCard(props) {
    // เพราะ Card 3 อันมีสีและค่าไม่เหมือนกันจึงต้องใช้ props ช่วยส่งข้อมูลที่ต่างกันนั้นมา
    const { bg, title, value } = props;
    return(
        <div className="col-sm-4">
            {/* ${bg || 'info'} เป็นการกำหนดค่าเริ่มต้น */}
          <div className={`bg-${bg || 'info'} rounded-2 p-3`}>
            <p className="text-black-50">{title}</p>
            <h5 className="text-white">฿{value}</h5>
          </div>
        </div>        
    )
}

export default ReportCard;