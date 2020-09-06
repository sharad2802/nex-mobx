import React from "react";
import NextHead from "next/head";

export default class Head extends React.Component {
  render() {
    return (
      <NextHead>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>
        <title>{this.props.title || 'Sharad'}</title>
        <style dangerouslySetInnerHTML={{ __html: `*,body,html{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box}body,html{padding:0;margin:0;color:#000}body *,html *{margin:0;padding:0;border:none;list-style:none;text-decoration:none;font-style:normal}html{overflow-y:scroll;font:normal 1rem/1.5 Arial,sans-serif; scroll-behavior:smooth;}:hover,a,a.active,img{border:none}blockquote:after,blockquote:before,q:after,q:before{content:""}audio,canvas,video{display:inline-block}audio:not([controls]){display:none;height:0}a,article,aside,details,figcaption,figure,footer,header,hgroup,html[xmlns] .clearfix,img,nav,section{display:block}img{height:auto;width:100%;image-rendering:optimizeQuality}a,a.active{text-decoration:none}:hover{text-decoration:none}*html .clearfix{height:1%}.CL{clear:both}.LHS{float:left;}.RHS{float:right;}.clearfix:after{content:" ";display:block;clear:both;line-height:0;height:0}` }}/>
      </NextHead>
    )
  }
}

