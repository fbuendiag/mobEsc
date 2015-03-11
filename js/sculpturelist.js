var serviceURL = "http://trweb-pfc.disca.upv.es/webs_proyectos/fbuendia/escultoric/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getsculptures.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li><a href="sculpturedetails.html?id=' + employee.id + '">' +
					'<img src="pics/' + employee.id + '.jpg"/>' +
					'<h4>' + employee.name + ' ' + employee.address + '</h4>' + '</a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}