import React from 'react';
import { Field, Control, Button, Nav, NavItem, NavLeft, NavCenter, NavRight } from 'reactbulma'

export const NavBar = () => {
	return(
				<Nav>
					<Nav.Left>
						<Field grouped>
						<Nav.Item href='#/home'>
							<Control>
								<Button>Home</Button>
							</Control>
						</Nav.Item>
						<Nav.Item href='#/my-profile'>
							<Control>
								<Button>My Profile</Button>
							</Control>
						</Nav.Item>
						<Nav.Item href='#/settings'>
							<Control>
								<Button>Settings</Button>
							</Control>
						</Nav.Item>
						<Nav.Item href='#/logout'>
							<Control>
								<Button>Logout</Button>
							</Control>
						</Nav.Item>
						</Field>
					</Nav.Left>
				</Nav>
		);
}