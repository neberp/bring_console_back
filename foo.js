const iframe = createElement("iframe");

iframe.id = "console-proxy";
iframe.style.display = "none";
document.body.insertAdjacentElement("beforeend", iframe);

const proxyIframe = document.querySelector("#console-proxy");

window.console = proxyIframe.contentWindow;