//background.js

console.log("background.js init");




//接收前台的消息
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {

        let log1 = sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension"
        console.log(log1);
        console.log('request:', request);

        //TODO 请求服务器
        //TODO 
        sendResponse(onward_rt);//返回给前台
        return true;//必须
    }
)


var onward_rt=[{'title': 'Onward 2020 720p WEBRip 800MB x264', 'resolvetion': '720p', 'file_size': '797 MB', 'maget': 'magnet:?xt=urn:btih:0A1AB964451495EABC0A8C5CE14438CC1E5446E4&dn=%5Bzooqle.com%5D%20Onward%202020%20720p%20WEBRip%20800MB%20x264&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 days', 'progress': '72', 'progress_value': ['4 K', '2 K']}, {'title': 'Onward (2020) [WEBRip] [1080p] [YTS.LT]', 'resolvetion': '1080p', 'file_size': '1.9 GB', 'maget': 'magnet:?xt=urn:btih:9185A249FA36F5743C8315FBAB1B596AF691A3DB&dn=%5Bzooqle.com%5D%20Onward%20%282020%29%20%5BWEBRip%5D%20%5B1080p%5D%20%5BYTS.LT%5D&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': 'yesterday', 'progress': '72', 'progress_value': ['3 K', '2 K']}, {'title': 'Onward 2020 1080p WEB-DL DD 5.1 H264', 'resolvetion': '1080p', 'file_size': '3.5 GB', 'maget': 'magnet:?xt=urn:btih:668380FDB9A281E18818136D37B9E7C245B02065&dn=%5Bzooqle.com%5D%20Onward%202020%201080p%20WEB-DL%20DD%205.1%20H264&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 days', 'progress': '36', 'progress_value': ['1 K', '566']}, {'title': 'Onward 2020 720p WEB-DL XviD AC3', 'resolvetion': '720p', 'file_size': '3.1 GB', 'maget': 'magnet:?xt=urn:btih:4546EC871C0BAB634F27F42F462B09B6EF999750&dn=%5Bzooqle.com%5D%20Onward%202020%20720p%20WEB-DL%20XviD%20AC3&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 days', 'progress': '30', 'progress_value': ['1 K', '944']}, {'title': 'Onward (2020) [WEBRip] [720p] [YTS.LT]', 'resolvetion': '720p', 'file_size': '939 MB', 'maget': 'magnet:?xt=urn:btih:B566A47FEA33A850AAC3E96B4F2ACB20A046E0BD&dn=%5Bzooqle.com%5D%20Onward%20%282020%29%20%5BWEBRip%5D%20%5B720p%5D%20%5BYTS.LT%5D&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': 'yesterday', 'progress': '27', 'progress_value': ['792', '853']}, {'title': 'Onward 2020 WEB-DL x264', 'resolvetion': 'Std', 'file_size': '996 MB', 'maget': 'magnet:?xt=urn:btih:30CA3B01C2D41CE9171C97CDDAA7AD145B6A1E60&dn=%5Bzooqle.com%5D%20Onward%202020%20WEB-DL%20x264&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 days', 'progress': '27', 'progress_value': ['357', '179']}, {'title': 'Onward 2020 HDRip XviD AC3', 'resolvetion': 'Std', 'file_size': '1.4 GB', 'maget': 'magnet:?xt=urn:btih:79D811F8CB5D620F92239E31CB4A628CBA4898F4&dn=%5Bzooqle.com%5D%20Onward%202020%20HDRip%20XviD%20AC3&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 days', 'progress': '27', 'progress_value': ['355', '423']}, {'title': 'Onward 2020 1080p WEB-DL H264 AC3', 'resolvetion': '1080p', 'file_size': '3.5 GB', 'maget': 'magnet:?xt=urn:btih:046F8CAFCE44E8CD427267EA7FE8DED7D4439A71&dn=%5Bzooqle.com%5D%20Onward%202020%201080p%20WEB-DL%20H264%20AC3&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 days', 'progress': '27', 'progress_value': ['303', '297']}, {'title': 'Onward 2020 2160p HDR WEB-DL DD 5.1 HEVC', 'resolvetion': 'Ultra', 'file_size': '18.0 GB', 'maget': 'magnet:?xt=urn:btih:73DF6A470A408EEA4CC4038680B822BDA5FE67D1&dn=%5Bzooqle.com%5D%20Onward%202020%202160p%20HDR%20WEB-DL%20DD%205.1%20HEVC&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': 'yesterday', 'progress': '27', 'progress_value': ['194', '276']}, {'title': 'Onward 2020 1080p WEBRip x264-RARBG', 'resolvetion': '1080p', 'file_size': '2.0 GB', 'maget': 'magnet:?xt=urn:btih:7F377F30AD3929B84BA35CDD4F150B1432F2A44E&dn=%5Bzooqle.com%5D%20Onward%202020%201080p%20WEBRip%20x264-RARBG&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 days', 'progress': '27', 'progress_value': ['189', '338']}, {'title': 'Onward (2020) HDCAM NO-ADS (720p x264 AAC 2 0 DaViD)', 'resolvetion': 'Low', 'file_size': '730 MB', 'maget': 'magnet:?xt=urn:btih:D11FE644812BB9C24D1B6CFC11EA200CB4AF5968&dn=%5Bzooqle.com%5D%20Onward%20%282020%29%20HDCAM%20NO-ADS%20%28720p%20x264%20AAC%202%200%20DaViD%29&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 weeks', 'progress': '27', 'progress_value': ['142', '99']}, {'title': 'Onward 2020 1080p WEB-DL H264 AC3', 'resolvetion': '1080p', 'file_size': '3.5 GB', 'maget': 'magnet:?xt=urn:btih:3D25B37E55E0515584371B5DB6C57FE685260C16&dn=%5Bzooqle.com%5D%20Onward%202020%201080p%20WEB-DL%20H264%20AC3&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 days', 'progress': '27', 'progress_value': ['129', '100']}, {'title': 'Onward 2020 NEW 720p HD-TS', 'resolvetion': 'Med', 'file_size': '2.1 GB', 'maget': 'magnet:?xt=urn:btih:2C9B873B7DC3CC160FF7D3323784B96083967BD1&dn=%5Bzooqle.com%5D%20Onward%202020%20NEW%20720p%20HD-TS&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 weeks', 'progress': '27', 'progress_value': ['128', '101']}, {'title': 'Onward 2020 1080p WEBRip 1400MB DD 5.1 x264', 'resolvetion': '1080p', 'file_size': '1.4 GB', 'maget': 'magnet:?xt=urn:btih:6CB7F854AF864332850D20B44E8C9E6F95515512&dn=%5Bzooqle.com%5D%20Onward%202020%201080p%20WEBRip%201400MB%20DD%205.1%20x264&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 days', 'progress': '27', 'progress_value': ['85', '315']}, {'title': 'Onward 2020 WEB-DL XviD MP3', 'resolvetion': 'Std', 'file_size': '1.4 GB', 'maget': 'magnet:?xt=urn:btih:C062A73E6315D02523C6ACECF13DB0158785714F&dn=%5Bzooqle.com%5D%20Onward%202020%20WEB-DL%20XviD%20MP3&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 days', 'progress': '27', 'progress_value': ['84', '106']}, {'title': 'Onward 2020 HDTS 850MB c1nem4 x264', 'resolvetion': 'Med', 'file_size': '846 MB', 'maget': 'magnet:?xt=urn:btih:D18848415D3838644149A5239622A2C24699AE0F&dn=%5Bzooqle.com%5D%20Onward%202020%20HDTS%20850MB%20c1nem4%20x264&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 weeks', 'progress': '27', 'progress_value': ['61', '36']}, {'title': 'Onward 2020 720p WEB-DL H264 AAC 850MB ESub', 'resolvetion': '720p', 'file_size': '830 MB', 'maget': 'magnet:?xt=urn:btih:A892E6B7CD99810D4768C480CB233766F4ADE6CD&dn=%5Bzooqle.com%5D%20Onward%202020%20720p%20WEB-DL%20H264%20AAC%20850MB%20ESub&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 days', 'progress': '27', 'progress_value': ['52', '71']}, {'title': 'Onward 2020 WEB-DL XviD AC3', 'resolvetion': 'Std', 'file_size': '1.6 GB', 'maget': 'magnet:?xt=urn:btih:F5B941AD22611456C0F09806E60DAA04ADD49576&dn=%5Bzooqle.com%5D%20Onward%202020%20WEB-DL%20XviD%20AC3&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 days', 'progress': '27', 'progress_value': ['45', '55']}, {'title': 'Onward (2020) English HDCAM 720p x264 - AAC 850MB[MB]', 'resolvetion': 'Low', 'file_size': '876 MB', 'maget': 'magnet:?xt=urn:btih:89B1FAFEE093828427D485712CA53B355642B387&dn=%5Bzooqle.com%5D%20Onward%20%282020%29%20English%20HDCAM%20720p%20x264%20-%20AAC%20850MB%5BMB%5D&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 weeks', 'progress': '27', 'progress_value': ['42', '41']}, {'title': 'Onward 2020 720p WEB-DL H264 AC3', 'resolvetion': '720p', 'file_size': '3.2 GB', 'maget': 'magnet:?xt=urn:btih:FFAB87CCCCF0676718177E016441E98C84B5A50C&dn=%5Bzooqle.com%5D%20Onward%202020%20720p%20WEB-DL%20H264%20AC3&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 days', 'progress': '27', 'progress_value': ['38', '71']}, {'title': 'Onward (2020) English V2 720p HDCAM x264 AC3 2.0 700MB BongRockers', 'resolvetion': 'Low', 'file_size': '758 MB', 'maget': 'magnet:?xt=urn:btih:D2EC244044B46CD27326F415379FE8DB45DE5593&dn=%5Bzooqle.com%5D%20Onward%20%282020%29%20English%20V2%20720p%20HDCAM%20x264%20AC3%202.0%20700MB%20BongRockers&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 weeks', 'progress': '27', 'progress_value': ['27', '47']}, {'title': 'Onward 2020 [1080p x265 10bit FS96 Joy]', 'resolvetion': '1080p', 'file_size': '1.9 GB', 'maget': 'magnet:?xt=urn:btih:F219299BA0978DCC5665840DBA1D09CE716BDF34&dn=%5Bzooqle.com%5D%20Onward%202020%20%5B1080p%20x265%2010bit%20FS96%20Joy%5D&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 hours', 'progress': '27', 'progress_value': ['25', '43']}, {'title': 'Onward 2020 NEW 720p HD-TS', 'resolvetion': 'Med', 'file_size': '2.1 GB', 'maget': 'magnet:?xt=urn:btih:FB5D330A134190EF7B98F4F48BB2AEA6179160B7&dn=%5Bzooqle.com%5D%20Onward%202020%20NEW%20720p%20HD-TS&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 weeks', 'progress': '27', 'progress_value': ['23', '45']}, {'title': 'Onward 2020 HDRip XviD', 'resolvetion': 'Std', 'file_size': '1.2 GB', 'maget': 'magnet:?xt=urn:btih:990DF15ACB4476FD5486E74340A6AAF2A7E3EC9A&dn=%5Bzooqle.com%5D%20Onward%202020%20HDRip%20XviD&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': 'yesterday', 'progress': '27', 'progress_value': ['19', '70']}, {'title': 'Onward 2020 720p WEB-DL x265', 'resolvetion': '720p', 'file_size': '431 MB', 'maget': 'magnet:?xt=urn:btih:2A8918B59BBA212FD852C49C653724150F58D8D2&dn=%5Bzooqle.com%5D%20Onward%202020%20720p%20WEB-DL%20x265&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': 'yesterday', 'progress': '27', 'progress_value': ['14', '56']}, {'title': 'Onward 2020 1080p WEBRip x265-RARBG', 'resolvetion': '1080p', 'file_size': '1.6 GB', 'maget': 'magnet:?xt=urn:btih:B35DB2657CBEDAD336697A62FCB31C031DB08B46&dn=%5Bzooqle.com%5D%20Onward%202020%201080p%20WEBRip%20x265-RARBG&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '13 hours', 'progress': '27', 'progress_value': ['14', '66']}, {'title': 'Onward 2020 720p HDCAM-AdsFreeSorry', 'resolvetion': 'Low', 'file_size': '2.2 GB', 'maget': 'magnet:?xt=urn:btih:1A380338B4BE0F8BC07D135E3E2AB897E4819B9B&dn=%5Bzooqle.com%5D%20Onward%202020%20720p%20HDCAM-AdsFreeSorry&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '2 weeks', 'progress': '27', 'progress_value': ['11', '36']}, {'title': 'Onward 2020 720p HDCAM HINDI SUB X264-1XBET', 'resolvetion': 'Low', 'file_size': '767 MB', 'maget': 'magnet:?xt=urn:btih:16EBB3FEFBF3B7BCE448B681D3B86D3B03373A1E&dn=%5Bzooqle.com%5D%20Onward%202020%20720p%20HDCAM%20HINDI%20SUB%20X264-1XBET&tr=http://tracker1.itzmx.com:8080/announce&tr=http://bt1.archive.org:6969/announce&tr=http://bt2.archive.org:6969/announce&tr=http://open.acgtracker.com:1096/announce&tr=http://tracker.etree.org:6969/announce', 'publish_time': '1 week', 'progress': '27', 'progress_value': ['10', '51']}]