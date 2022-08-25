const projectsList = [{
    title: "ChooseOne.me",
    url: "https://github.com/matiasguzlop/chooseone",
    company: "Personal open source project - Under development",
    body: 'Allows to create and share a "wish list" to share with friends, to receive useful presents for your next birthday. Also allow to publicly check presents on a friend list, wich allows to avoid duplicated gifts.',
    techs: "Built using MongoDB, Express, ReactJS and NodeJS.",
}, {
    title: "TrainerScheduler",
    // url: "https://github.com/matiasguzlop/trainerscheduler",
    company: "Personal project - Under development",
    body: " It is a tool for fitness trainers that helps them to organize their clients on a calendar scheduler, based on a month subscription with a specified amount of sessions every week.It allows to send automated reminders to the clients and generate reports at the end of the month.",
    techs: "Built using MongoDB, Express, ReactJS and NodeJS."
}, {
    title: "Firmware Updater",
    company: "Tecnología Integración y Desarrollo S.A.",
    body: "Tool for updating microcontrollers firmwares over the air (OTA) using HTTP protocol. It allows to manage different types of devices and to assign different firmware versions to them.",
    techs: "Built using MongoDB, Express, ReactJ and NodeJS."
},{
    title: "TEDI-T",
    company: "Startup - Testing prototype",
    body: "Tool for therapists that works with ESDM (an intervention model for toddlers with diagnosed autism). It allows to register observed skills in an evaluation session directly in the app, replacing the ESDM evaluation sheet in paper, making this process faster and simplier. Also generate radar charts with stored evaluation registers.",
    techs: "Built using JQuery, ChartJS and MySQL. Currently refactorizing to SERN stack."
},{
    title: "Line availability KPI",
    company: "Frigosorno S.A.",
    body: "Creation of a Key Process Indicator for a conveyor line that represents the line availability. We used an optical sensor to count time between piece to piece, send data to a server through an industrial controller, process and store it in a database.<br></br> Also includes an UI showing the real time line availability on a web client and historical registers as chart and downloadable XLSX files.",
    techs: "Backend scripts using NodeJS and MySQL, Modbus TCP protocol. Frontend attached to old UI with JQuery."
},{
    title: "Automatic Whatsapp tickets system",
    company: "Frigosorno S.A.",
    body: "Maintenance notification tickets system that could post automated messages on a whatsapp group. RPA system running whatsapp web on a Linux server.",
    techs: "Backend built on NodeJS with Puppeteer module driving a headless Chrome instance, MySQL for data storage and JQuery on frontend."
},{
    title: "Weights monitoring for grapes packing plant",
    company: "Provalle",
    body: "An MQTT broker that receives data from scales, store and show performance information in real time.",
    techs: "Used NodeJS, Mosquitto, MySQL and JQuery."
},{
    title: "SCADA system",
    company: "Frigosorno S.A.",
    body: "Industrial data acquisition system that shows real time key process indicators on graphical slides, on TV screens running Chrome. Also includes an historical registers section for visualize data as charts and downloadable XLSX files.",
    techs: "Used NodeJS, PHP, modbus TCP protocol, MySQL, JQuery and DyGraphs."   
}
];

export default projectsList;