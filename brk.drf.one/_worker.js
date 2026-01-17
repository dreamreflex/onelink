const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>drf.one - 404 Not Found</title>
    <style>
        :root {
            --bg-color: #ffffff;
            --text-color: #333333;
            --secondary-text: #666666;
            --border-color: #e0e0e0;
            --accent-color: #007bff;
            --error-color: #dc3545;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            line-height: 1.6;
            align-items: center;
            justify-content: center;
        }

        .container {
            max-width: 600px;
            padding: 2rem;
            text-align: center;
        }

        h1 {
            font-size: 6rem;
            font-weight: 200;
            margin: 0;
            color: var(--secondary-text);
            line-height: 1;
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 500;
            margin: 1rem 0;
        }

        p {
            color: var(--secondary-text);
            font-size: 1rem;
            margin-bottom: 2rem;
        }

        .btn {
            display: inline-block;
            padding: 0.8rem 1.5rem;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            color: var(--text-color);
            text-decoration: none;
            transition: all 0.2s;
            font-size: 0.95rem;
        }

        .btn:hover {
            border-color: var(--accent-color);
            color: var(--accent-color);
            background-color: rgba(0, 123, 255, 0.05);
        }

        .info-section {
            display: flex;
            flex-wrap: wrap;
            margin-top: 2rem;
            text-align: left;
            border-top: 1px solid var(--border-color);
            padding-top: 2rem;
        }

        .info-col {
            flex: 1;
            min-width: 250px;
            padding: 0 1rem;
            box-sizing: border-box;
        }
        
        .info-col h3 {
            font-size: 1.1rem;
            font-weight: 500;
            margin-bottom: 1rem;
            color: var(--text-color);
        }

        .info-col p {
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }

        .info-col ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .info-col li {
            margin-bottom: 0.5rem;
        }

        .info-col a {
            color: var(--secondary-text);
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.2s;
        }

        .info-col a:hover {
            color: var(--accent-color);
            text-decoration: underline;
        }

        footer {
            margin-top: 3rem;
            color: var(--secondary-text);
            font-size: 0.85rem;
            border-top: 1px solid var(--border-color);
            padding-top: 2rem;
            width: 100%;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>404</h1>
        <h2>链接失效或不存在</h2>
        <p>您访问的短链接可能已被删除、重置，或者您输入了错误的地址。</p>
        
        <a href="https://dreamreflex.com" class="btn">前往云梦镜像</a>

        <div class="info-section">
            <!-- 第一部分：我能做什么 -->
            <div class="info-col">
                <h3>我能做什么？</h3>
                <p>如果您确认输入的链接无误，但仍然看到此页面，这可能是因为：</p>
                <ul>
                    <li>• 链接已过期或被原作者删除</li>
                    <li>• 服务正在进行维护</li>
                </ul>
                <p>如有疑问，您可以<a href="mailto:support@dreamreflex.com">联系客服支持</a>进行查询。</p>
            </div>

            <!-- 第二部分：了解更多 -->
            <div class="info-col">
                <h3>了解更多</h3>
                <ul>
                    <li><a href="https://dreamreflex.tech" target="_blank">DreamReflex 官网 &rarr;</a></li>
                    <li><a href="https://status.dreamreflex.com" target="_blank">服务状态监控 &rarr;</a></li>
                    <li><a href="https://www.drf.one" target="_blank">访问短链根目录 &rarr;</a></li>
                    <li><a href="mailto:contact@dreamreflex.com" target="_blank">报告滥用链接 &rarr;</a></li>
                    <li><a href="https://github.com/phil616/s12e-onelink" target="_blank">查看短链服务仓库 &rarr;</a></li>
                </ul>
                <p style="margin-top: 1rem; font-size: 0.85rem;">探索更多关于 drf.one 的功能与服务。</p>
            </div>
        </div>

        <footer>
            &copy; 2026 DreamReflex Tech. <br> 短链服务
        </footer>
    </div>

</body>
</html>`;

export default {
  async fetch(request, env) {
    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    });
  },
};
