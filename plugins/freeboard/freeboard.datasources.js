<!DOCTYPE html>
<html>
<head>
    <title>ESP32 Dashboard</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .data-container { margin: 20px; }
        .data-item { margin-bottom: 10px; }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/dweet.io/dist/dweet.io.min.js"></script>
</head>
<body>
    <div class="data-container">
        <div class="data-item"><strong>DO:</strong> <span id="do-value">--</span></div>
        <div class="data-item"><strong>pH:</strong> <span id="ph-value">--</span></div>
        <div class="data-item"><strong>Suhu:</strong> <span id="suhu-value">--</span></div>
    </div>

    <script>
        // Fungsi untuk memperbarui tampilan data
        function updateDisplay(data) {
            document.getElementById('do-value').textContent = data.DO || '--';
            document.getElementById('ph-value').textContent = data.pH || '--';
            document.getElementById('suhu-value').textContent = data.Suhu || '--';
        }

        // Setup listener untuk menerima data dari Dweet.io
        function setupDweetListener(thing_id) {
            dweetio.listen_for(thing_id, function (dweet) {
                var content = dweet.content;
                console.log("Received dweet:", content); // Log response dari Dweet.io
                updateDisplay(content);
            });
        }

        // Ganti 'SAS_1' dengan Thing ID kamu
        setupDweetListener('SAS_1');
    </script>
</body>
</html>
