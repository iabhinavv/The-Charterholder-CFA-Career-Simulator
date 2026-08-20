import os, http.server, socketserver

os.chdir("/Users/abhinavverma/Downloads/Claude/CFA-Game")
Handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("127.0.0.1", 8123), Handler) as httpd:
    print("serving CFA-Game on http://127.0.0.1:8123")
    httpd.serve_forever()
