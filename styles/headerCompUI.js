import React from 'react';
import { MenuLink } from "@/styles/element";
import {TopHeader} from '@/styles/style';
import Link from 'next/link'

const HeaderWrp = function () {
	return(
		<TopHeader>
			<nav>
				<ul className="clearfix">
					<li className="RHS">
						<MenuLink href="" className="lucretia_logo">
							<div className="td logo" >
								<img src="../static/images/hmiadmin/logo.svg"/>
							</div>
						</MenuLink>
					</li> 
				</ul>
			</nav>
		</TopHeader>
	)
}

export default HeaderWrp;