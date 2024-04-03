// Array of Thai entrepreneurs with their skills
let entrepreneurs = [
    { id: 1, name: 'สุรชัย ใจดี', role: 'ผู้ประกอบการบริษัท "เจริญโปรแกรมมิ่ง"', skills: ['JavaScript', 'Python', 'Node.js'] },
    { id: 2, name: 'รักษ์พงษ์ แสนเพียร', role: 'ผู้ประกอบการบริษัท "เติบโตและนวัตกรรม"', skills: ['HTML', 'CSS', 'React'] },
    { id: 3, name: 'สมหวัง ร่วมใจ', role: 'ผู้ประกอบการบริษัท "ประชาธุรกิจและความสุข"', skills: ['Java', 'Spring', 'Hibernate'] },
    { id: 4, name: 'วีระ ปรีชา', role: 'ผู้ประกอบการบริษัท "สมอาชีพไร้ขีดจำกัด"', skills: ['PHP', 'MySQL', 'Laravel'] },
    { id: 5, name: 'ประกิต สุขใจ', role: 'ผู้ประกอบการบริษัท "สร้างนวัตกรรมที่ยั่งยืน"', skills: ['C#', '.NET', 'ASP.NET'] },
    { id: 6, name: 'สมใจ รักชาติ', role: 'ผู้ประกอบการบริษัท "ความสามารถที่เราพัฒนาขึ้น"', skills: ['Ruby', 'Rails', 'SQL'] },
    { id: 7, name: 'ชัชวาล หวานใจ', role: 'ผู้ประกอบการบริษัท "การพัฒนาเทคโนโลยีที่ทันสมัย"', skills: ['Angular', 'TypeScript', 'MongoDB'] },
    { id: 8, name: 'รัชชา จงใจ', role: 'ผู้ประกอบการบริษัท "นวัตกรรมและความสำเร็จ"', skills: ['Swift', 'iOS', 'Objective-C'] },
    { id: 9, name: 'สิทธิภา พร้อมใจ', role: 'ผู้ประกอบการบริษัท "สร้างเศรษฐกิจใหม่"', skills: ['Scala', 'Play Framework', 'Akka'] },
    { id: 10, name: 'ปิยะพงษ์ สวัสดิ์ใจ', role: 'ผู้ประกอบการบริษัท "นวัตกรรมและการเรียนรู้"', skills: ['Vue.js', 'Firebase', 'Flutter'] }
];

// Array of Thai interns with their skills
let interns = [
    { id: 1, role: 'นักศึกษาฝึกงาน', name: 'กาญจนา รักเรียน', skills: ['JavaScript', 'HTML', 'CSS'] },
    { id: 2, role: 'นักศึกษาฝึกงาน', name: 'ณัฐภูมิ สุขสบาย', skills: ['Python', 'React', 'Node.js'] },
    { id: 3, role: 'นักศึกษาฝึกงาน', name: 'อรทัย สุขใจ', skills: ['Java', 'Spring', 'Hibernate'] },
    { id: 4, role: 'นักศึกษาฝึกงาน', name: 'จิราพร พร้อมใจ', skills: ['PHP', 'MySQL', 'Laravel'] },
    { id: 5, role: 'นักศึกษาฝึกงาน', name: 'สุวิทย์ สุขใจ', skills: ['C#', '.NET', 'ASP.NET'] },
    { id: 6, role: 'นักศึกษาฝึกงาน', name: 'ธนาภรณ์ หวานใจ', skills: ['Ruby', 'Rails', 'SQL'] },
    { id: 7, role: 'นักศึกษาฝึกงาน', name: 'วิภาวรรณ รักเรียน', skills: ['Angular', 'TypeScript', 'MongoDB'] },
    { id: 8, role: 'นักศึกษาฝึกงาน', name: 'สมพร พลายใจ', skills: ['Swift', 'iOS', 'Objective-C'] },
    { id: 9, role: 'นักศึกษาฝึกงาน', name: 'ณิชา สวัสดิ์ใจ', skills: ['Scala', 'Play Framework', 'Akka'] },
    { id: 10, role: 'นักศึกษาฝึกงาน', name: 'นราภรณ์ พร้อมใจ', skills: ['Vue.js', 'Firebase', 'Flutter'] }
];

// Function to display entrepreneurs
function displayEntrepreneurs(filteredEntrepreneurs) {
    let entrepreneursHTML = '';
    const entrepreneursToDisplay = filteredEntrepreneurs || entrepreneurs;
    entrepreneursToDisplay.forEach(entrepreneur => {
        entrepreneursHTML += `
            <div class="card">
                <h3>${entrepreneur.name}</h3>
                <p><strong></strong> ${entrepreneur.role}</p>
                <p><strong>Skills ที่ต้องการ :</strong> ${entrepreneur.skills.join(', ')}</p>
                <button onclick="deletePerson('entrepreneurs', ${entrepreneur.id})">Delete</button>
            </div>
        `;
    });
    document.getElementById('entrepreneurs').innerHTML = entrepreneursHTML;
}

// Function to display interns
function displayInterns(filteredInterns) {
    let internsHTML = '';
    const internsToDisplay = filteredInterns || interns;
    internsToDisplay.forEach(intern => {
        internsHTML += `
            <div class="card">
                <h3>${intern.name}</h3>
                <p><strong>Role:</strong> ${intern.role}</p>
                <p><strong>Skills:</strong> ${intern.skills.join(', ')}</p>
                <select id="companySelect_${intern.id}">
                    <option value="" disabled selected>Select a company...</option>
                    ${entrepreneurs.map(entrepreneur => `<option value="${entrepreneur.role}">${entrepreneur.role}</option>`).join('')}
                </select>
                
                <button onclick="assignInternToCompany(${intern.id})">Assign</button>
                <button onclick="deletePerson('interns', ${intern.id})">Delete</button>
            </div>
        `;
    });
    document.getElementById('interns').innerHTML = internsHTML;
}
// Function to assign intern to selected company
function assignInternToCompany(internId) {
    const selectedCompanyId = document.getElementById(`companySelect_${internId}`).selectedIndex;
    const selectedCompany = entrepreneurs[selectedCompanyId - 1];
    const selectedInternIndex = interns.findIndex(intern => intern.id === internId);
    const selectedIntern = interns[selectedInternIndex];
    
    if (selectedCompany && selectedIntern) {
        selectedIntern.company = selectedCompany.name;
        
        // Remove the assigned intern from the interns list
        interns.splice(selectedInternIndex, 1);
        
        // Display the updated lists
        displayInterns();
        displayEntrepreneurs();

        // Show a notification using SweetAlert2
        Swal.fire({
            icon: "success",
            title: "คุณได้เลือกให้",
            text: `${selectedIntern.name} ได้ทำการฝึกงานกับ ${selectedCompany.role}`,
          });
    }
}


// Function to delete a person
function deletePerson(type, id) {
    if (type === 'entrepreneurs') {
        // Find the person in entrepreneurs array
        const index = entrepreneurs.findIndex(entrepreneur => entrepreneur.id === id);
        if (index !== -1) {
            // Use SweetAlert2 for confirmation before deleting
            Swal.fire({
                icon: 'warning',
                title: 'ยืนยันที่จะลบรายการนี้?',
                showCancelButton: true,
                confirmButtonText: 'ยืนยัน',
                cancelButtonText: 'ลบ'
            }).then((result) => {
                if (result.isConfirmed) {
                    entrepreneurs.splice(index, 1); // Remove from entrepreneurs array
                    displayEntrepreneurs(); // Update display for entrepreneurs

                    // Show deleted notification
                    Swal.fire(
                        'ลบสำเร็จ',
                        'ได้ทำการลบเรียบร้อย',
                        'success'
                    );
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'ยกเลิก',
                        'ได้ทำการยกเลิกการลบ  :)',
                        'error'
                    );
                }
            });
        }
    } else if (type === 'interns') {
        // Find the person in interns array
        const index = interns.findIndex(intern => intern.id === id);
        if (index !== -1) {
            // Use SweetAlert2 for confirmation before deleting
            Swal.fire({
                icon: 'warning',
                title: 'ยืนยันที่จะลบรายการนี้?',

                showCancelButton: true,
                confirmButtonText: 'ยืนยัน',
                cancelButtonText: 'ยกเลิก'
            }).then((result) => {
                if (result.isConfirmed) {
                    interns.splice(index, 1); // Remove from interns array
                    displayInterns(); // Update display for interns

                    // Show deleted notification
                    Swal.fire(
                        'ลบสำเร็จ',
                        'ลบรายชื่อนี้สำเร็จ',
                        'success'
                    );
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'ยกเลิกแล้ว',
                        'ได้ทำการยกเลิกเรียบร้อย :)',
                        'error'
                    );
                }
            });
        }
    }
}
function search(type) {
    const searchValue = type === 'entrepreneurs' ? document.getElementById('searchInputEntrepreneurs').value.toLowerCase() : document.getElementById('searchInputInterns').value.toLowerCase();
    const filteredEntrepreneurs = entrepreneurs.filter(entrepreneur => entrepreneur.name.toLowerCase().includes(searchValue));
    const filteredInterns = interns.filter(intern => intern.name.toLowerCase().includes(searchValue));
    displayEntrepreneurs(filteredEntrepreneurs); // เรียกใช้ฟังก์ชันเพื่อแสดงผู้ประกอบการที่ถูกกรอง
    displayInterns(filteredInterns); // เรียกใช้ฟังก์ชันเพื่อแสดงนักศึกษาฝึกงานที่ถูกกรอง
}
// Call the display functions
displayEntrepreneurs();
displayInterns();
