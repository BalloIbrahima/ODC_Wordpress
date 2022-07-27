<?php return
	array(
		'sidebar_post'      =>
			array(
				'sidebar' =>
					array(
						'selective_selector' => '[data-colibri-id="28-s1"]',
						'id'                 => '1',
						'nodeId'             => '28-s1',
						'partialId'          => '28',
						'styleRef'           => '160',
					),
			),
		'header_front_page' =>
			array(
				'icon_list'    =>
					array(
						'selective_selector' => '[data-colibri-id="7-h20"]',
						'id'                 => '20',
						'nodeId'             => '7-h20',
						'partialId'          => '7',
						'styleRef'           => '21',
					),
				'social_icons' =>
					array(
						'selective_selector' => '[data-colibri-id="7-h22"]',
						'id'                 => '22',
						'nodeId'             => '7-h22',
						'partialId'          => '7',
						'styleRef'           => '23',
					),
				'top_bar'      =>
					array(
						'selective_selector' => '[data-colibri-id="7-h17"]',
						'id'                 => '17',
						'nodeId'             => '7-h17',
						'partialId'          => '7',
						'styleRef'           => '18',
					),
				'navigation'   =>
					array(
						'props'              =>
							array(
								'showTopBar' => true,
								'sticky'     => true,
								'overlap'    => true,
								'width'      => 'boxed',
								'layoutType' => 'logo-spacing-menu',
							),
						'selective_selector' => '[data-colibri-id="7-h2"]',
						'id'                 => '2',
						'nodeId'             => '7-h2',
						'partialId'          => '7',
						'styleRef'           => '2',
						'style'              =>
							array(
								'ancestor'   =>
									array(
										'sticky' =>
											array(
												'background' =>
													array(
														'color' => '#ffffff',
													),
											),
									),
								'background' =>
									array(
										'color' => '${theme.colors.4}',
									),
								'padding'    =>
									array(
										'top' =>
											array(
												'value' => '0',
											),
									),
							),
					),
				'logo'         =>
					array(
						'selective_selector' => '[data-colibri-id="7-h5"]',
						'id'                 => '5',
						'nodeId'             => '7-h5',
						'partialId'          => '7',
						'styleRef'           => '5',
						'props'              =>
							array(
								'layoutType' => 'logo-spacing-menu',
							),
					),
				'header-menu'  =>
					array(
						'selective_selector' => '[data-colibri-id="7-h8"]',
						'id'                 => '8',
						'nodeId'             => '7-h8',
						'partialId'          => '7',
						'styleRef'           => '9',
						'props'              =>
							array(
								'sticky'              => true,
								'hoverEffect'         =>
									array(
										'type'        => 'bordered-active-item bordered-active-item--bottom',
										'group'       =>
											array(
												'border' =>
													array(
														'transition' => 'effect-borders-grow grow-from-center',
													),
											),
										'activeGroup' => 'border',
										'enabled'     => true,
									),
								'showOffscreenMenuOn' => 'has-offcanvas-tablet',
							),
					),
				'title'        =>
					array(
						'selective_selector' => '[data-colibri-id="7-h26"]',
						'id'                 => '26',
						'nodeId'             => '7-h26',
						'partialId'          => '7',
						'styleRef'           => '27',
						'style'              =>
							array(
								'textAlign' => 'center',
							),
					),
				'subtitle'     =>
					array(
						'selective_selector' => '[data-colibri-id="7-h27"]',
						'id'                 => '27',
						'nodeId'             => '7-h27',
						'partialId'          => '7',
						'styleRef'           => '28',
					),
				'button-0'     =>
					array(
						'id'        => '29',
						'nodeId'    => '7-h29',
						'partialId' => '7',
						'styleRef'  => '30',
					),
				'button-1'     =>
					array(
						'id'        => '30',
						'nodeId'    => '7-h30',
						'partialId' => '7',
						'styleRef'  => '31',
					),
				'button_group' =>
					array(
						'selective_selector' => '[data-colibri-id="7-h28"]',
						'id'                 => '28',
						'nodeId'             => '7-h28',
						'partialId'          => '7',
						'styleRef'           => '29',
					),
				'hero'         =>
					array(
						'image'              =>
							array(
								'selective_selector' => '[data-colibri-id="7-h32"]',
								'id'                 => '32',
								'nodeId'             => '7-h32',
								'partialId'          => '7',
								'styleRef'           => '843',
								'style'              =>
									array(
										'descendants' =>
											array(
												'image'      =>
													array(
														'boxShadow' =>
															array(
																'enabled' => false,
																'layers'  =>
																	array(
																		0 =>
																			array(
																				'x'      => '2',
																				'y'      => '2',
																				'spread' => '10',
																				'blur'   => '2',
																				'color'  => '#333',
																			),
																	),
															),
													),
												'frameImage' =>
													array(
														'backgroundColor' => 'rgba(0, 0, 0, 0.5)',
														'width'           => 100,
														'height'          => 100,
														'thickness'       => 10,
														'border'          =>
															array(
																'top'    =>
																	array(
																		'width' =>
																			array(
																				'path'  => 'value',
																				'value' => '10',
																			),
																		'color' => 'rgba(0, 0, 0, 0.5)',
																		'style' => 'solid',
																	),
																'bottom' =>
																	array(
																		'width' =>
																			array(
																				'path'  => 'value',
																				'value' => '10',
																			),
																		'color' => 'rgba(0, 0, 0, 0.5)',
																		'style' => 'solid',
																	),
																'left'   =>
																	array(
																		'width' =>
																			array(
																				'path'  => 'value',
																				'value' => '10',
																			),
																		'color' => 'rgba(0, 0, 0, 0.5)',
																		'style' => 'solid',
																	),
																'right'  =>
																	array(
																		'width' =>
																			array(
																				'path'  => 'value',
																				'value' => '10',
																			),
																		'color' => 'rgba(0, 0, 0, 0.5)',
																		'style' => 'solid',
																	),
															),
														'transform'       =>
															array(
																'translate' =>
																	array(
																		'x'       =>
																			array(
																				'path' => 'value',
																			),
																		'x_value' => '4',
																		'y'       =>
																			array(
																				'path' => 'value',
																			),
																		'y_value' => '6',
																	),
															),
													),
											),
									),
								'props'              =>
									array(
										'frame'              =>
											array(
												'type' => 'border',
											),
										'enabledFrameOption' => false,
										'showFrameOverImage' => false,
										'showFrameShadow'    => false,
									),
							),
						'row'                =>
							array(
								'id'        => '24',
								'nodeId'    => '7-h24',
								'partialId' => '7',
								'styleRef'  => '25',
							),
						'column-1'           =>
							array(
								'id'        => '25',
								'nodeId'    => '7-h25',
								'partialId' => '7',
								'styleRef'  => '26',
							),
						'column-2'           =>
							array(
								'id'        => '31',
								'nodeId'    => '7-h31',
								'partialId' => '7',
								'styleRef'  => '842',
							),
						'selective_selector' => '[data-colibri-id="7-h23"]',
						'id'                 => '23',
						'nodeId'             => '7-h23',
						'partialId'          => '7',
						'styleRef'           => '24',
						'style'              =>
							array(
								'background'      =>
									array(
										'type'      => 'image',
										'color'     => 'rgb(243, 243, 243)',
										'overlay'   =>
											array(
												'shape'    =>
													array(
														'value'  => '',
														'isTile' => false,
													),
												'light'    => false,
												'color'    =>
													array(
														'value'   => '${theme.colors.5}',
														'opacity' => 80,
													),
												'enabled'  => true,
												'type'     => 'gradient',
												'gradient' =>
													array(
														'name'  => 'october_silence',
														'angle' => 0,
														'steps' =>
															array(
																0 =>
																	array(
																		'position' => '0',
																		'color'    => '#b721ff',
																	),
																1 =>
																	array(
																		'position' => '100',
																		'color'    => '#21d4fd',
																	),
															),
													),
											),
										'image'     =>
											array(
												0 =>
													array(
														'source'      =>
															array(
																'url'      => 'african-asian-blonde-brainstorm-business-businessman-1629588-pxhere.com-5.jpg',
																'gradient' =>
																	array(
																		'name'  => 'october_silence',
																		'angle' => 0,
																		'steps' =>
																			array(
																				0 =>
																					array(
																						'position' => '0',
																						'color'    => '#b721ff',
																					),
																				1 =>
																					array(
																						'position' => '100',
																						'color'    => '#21d4fd',
																					),
																			),
																	),
															),
														'attachment'  => 'fixed',
														'position'    =>
															array(
																'x' => 62.3355092736504,
																'y' => 81.75054252350935,
															),
														'repeat'      => 'no-repeat',
														'size'        => 'cover',
														'useParallax' => false,
													),
											),
										'slideshow' =>
											array(
												'duration' =>
													array(
														'value' => 1500,
													),
												'speed'    =>
													array(
														'value' => 1500,
													),
											),
										'video'     =>
											array(
												'videoType'   => 'external',
												'externalUrl' => 'https://www.youtube.com/watch?v=coYirc_qoSA',
												'internalUrl' => false,
												'poster'      =>
													array(
														'url' => 'https://static.colibriwp.com/assets/sources/colibri-demo-video-cover.jpg',
													),
											),
									),
								'padding'         =>
									array(
										'top'    =>
											array(
												'value' => '210',
												'unit'  => 'px',
											),
										'bottom' =>
											array(
												'value' => '250',
												'unit'  => 'px',
											),
									),
								'separatorBottom' =>
									array(
										'enabled'  => false,
										'type'     => 'waves',
										'color'    => '#FFF',
										'height'   =>
											array(
												'value' => 100,
												'unit'  => 'px',
											),
										'negative' => false,
									),
							),
						'props'              =>
							array(
								'layoutType'  => 'textWithMediaOnRight',
								'heroSection' =>
									array(
										'layout' => 'textOnly',
									),
							),
						'hero_column_width'  => '50',
					),
			),
		'header_post'       =>
			array(
				'icon_list'    =>
					array(
						'selective_selector' => '[data-colibri-id="10-h46"]',
						'id'                 => '46',
						'nodeId'             => '10-h46',
						'partialId'          => '10',
						'styleRef'           => '21',
					),
				'social_icons' =>
					array(
						'selective_selector' => '[data-colibri-id="10-h48"]',
						'id'                 => '48',
						'nodeId'             => '10-h48',
						'partialId'          => '10',
						'styleRef'           => '23',
					),
				'top_bar'      =>
					array(
						'selective_selector' => '[data-colibri-id="10-h43"]',
						'id'                 => '43',
						'nodeId'             => '10-h43',
						'partialId'          => '10',
						'styleRef'           => '18',
					),
				'navigation'   =>
					array(
						'props'              =>
							array(
								'showTopBar' => true,
								'sticky'     => true,
								'overlap'    => true,
								'width'      => 'boxed',
								'layoutType' => 'logo-spacing-menu',
							),
						'selective_selector' => '[data-colibri-id="10-h28"]',
						'id'                 => '28',
						'nodeId'             => '10-h28',
						'partialId'          => '10',
						'styleRef'           => '2',
						'style'              =>
							array(
								'ancestor'   =>
									array(
										'sticky' =>
											array(
												'background' =>
													array(
														'color' => '#ffffff',
													),
											),
									),
								'background' =>
									array(
										'color' => '${theme.colors.4}',
									),
								'padding'    =>
									array(
										'top' =>
											array(
												'value' => '0',
											),
									),
							),
					),
				'logo'         =>
					array(
						'selective_selector' => '[data-colibri-id="10-h31"]',
						'id'                 => '31',
						'nodeId'             => '10-h31',
						'partialId'          => '10',
						'styleRef'           => '5',
						'props'              =>
							array(
								'layoutType' => 'logo-spacing-menu',
							),
					),
				'header-menu'  =>
					array(
						'selective_selector' => '[data-colibri-id="10-h34"]',
						'id'                 => '34',
						'nodeId'             => '10-h34',
						'partialId'          => '10',
						'styleRef'           => '9',
						'props'              =>
							array(
								'sticky'              => true,
								'hoverEffect'         =>
									array(
										'type'        => 'bordered-active-item bordered-active-item--bottom',
										'group'       =>
											array(
												'border' =>
													array(
														'transition' => 'effect-borders-grow grow-from-center',
													),
											),
										'activeGroup' => 'border',
										'enabled'     => true,
									),
								'showOffscreenMenuOn' => 'has-offcanvas-tablet',
							),
					),
				'title'        =>
					array(
						'selective_selector' => '[data-colibri-id="10-h26"]',
					),
				'hero'         =>
					array(
						'row'                =>
							array(
								'id'        => '24',
								'nodeId'    => '10-h24',
								'partialId' => '10',
								'styleRef'  => '58',
							),
						'column-1'           =>
							array(
								'id'        => '25',
								'nodeId'    => '10-h25',
								'partialId' => '10',
								'styleRef'  => '59',
							),
						'selective_selector' => '[data-colibri-id="10-h23"]',
						'id'                 => '23',
						'nodeId'             => '10-h23',
						'partialId'          => '10',
						'styleRef'           => '57',
						'style'              =>
							array(
								'background'      =>
									array(
										'type'      => 'image',
										'color'     => 'rgb(243, 243, 243)',
										'overlay'   =>
											array(
												'shape'    =>
													array(
														'value'  => '',
														'isTile' => false,
													),
												'light'    => false,
												'color'    =>
													array(
														'value'   => '#000000',
														'opacity' => 80,
													),
												'enabled'  => true,
												'type'     => 'gradient',
												'gradient' =>
													array(
														'name'  => 'october_silence',
														'angle' => 0,
														'steps' =>
															array(
																0 =>
																	array(
																		'position' => '0',
																		'color'    => '#b721ff',
																	),
																1 =>
																	array(
																		'position' => '100',
																		'color'    => '#21d4fd',
																	),
															),
													),
											),
										'image'     =>
											array(
												0 =>
													array(
														'source'      =>
															array(
																'url'      => 'african-asian-blonde-brainstorm-business-businessman-1629588-pxhere.com-5.jpg',
																'gradient' =>
																	array(
																		'name'  => 'october_silence',
																		'angle' => 0,
																		'steps' =>
																			array(
																				0 =>
																					array(
																						'position' => '0',
																						'color'    => '#b721ff',
																					),
																				1 =>
																					array(
																						'position' => '100',
																						'color'    => '#21d4fd',
																					),
																			),
																	),
															),
														'attachment'  => 'scroll',
														'position'    =>
															array(
																'x' => 100,
																'y' => 30.337941628264208,
															),
														'repeat'      => 'no-repeat',
														'size'        => 'cover',
														'useParallax' => false,
													),
											),
										'slideshow' =>
											array(
												'duration' =>
													array(
														'value' => 1500,
													),
												'speed'    =>
													array(
														'value' => 1500,
													),
											),
										'video'     =>
											array(
												'videoType'   => 'external',
												'externalUrl' => 'https://www.youtube.com/watch?v=coYirc_qoSA',
												'internalUrl' => false,
												'poster'      =>
													array(
														'url' => 'https://static.colibriwp.com/assets/sources/colibri-demo-video-cover.jpg',
													),
											),
									),
								'padding'         =>
									array(
										'top'    =>
											array(
												'value' => '100',
												'unit'  => 'px',
											),
										'bottom' =>
											array(
												'value' => '100',
												'unit'  => 'px',
											),
									),
								'separatorBottom' =>
									array(
										'type'     => 'mountains',
										'color'    => '#FFF',
										'height'   =>
											array(
												'value' => 100,
											),
										'enabled'  => false,
										'negative' => false,
									),
							),
						'props'              =>
							array(
								'layoutType'  => 'textWithMediaOnRight',
								'heroSection' =>
									array(
										'layout' => 'textWithMediaOnRight',
									),
							),
						'hero_column_width'  => '50',
						'image'              =>
							array(
								'style' =>
									array(
										'descendants' =>
											array(
												'image'      =>
													array(
														'boxShadow' =>
															array(
																'enabled' => false,
																'layers'  =>
																	array(
																		0 =>
																			array(
																				'x'      => '2',
																				'y'      => '2',
																				'spread' => '10',
																				'blur'   => '2',
																				'color'  => '#333',
																			),
																	),
															),
													),
												'frameImage' =>
													array(
														'backgroundColor' => 'rgba(0, 0, 0, 0.5)',
														'width'           => 100,
														'height'          => 100,
														'thickness'       => 10,
														'border'          =>
															array(
																'top'    =>
																	array(
																		'width' =>
																			array(
																				'path'  => 'value',
																				'value' => '10',
																			),
																		'color' => 'rgba(0, 0, 0, 0.5)',
																		'style' => 'solid',
																	),
																'bottom' =>
																	array(
																		'width' =>
																			array(
																				'path'  => 'value',
																				'value' => '10',
																			),
																		'color' => 'rgba(0, 0, 0, 0.5)',
																		'style' => 'solid',
																	),
																'left'   =>
																	array(
																		'width' =>
																			array(
																				'path'  => 'value',
																				'value' => '10',
																			),
																		'color' => 'rgba(0, 0, 0, 0.5)',
																		'style' => 'solid',
																	),
																'right'  =>
																	array(
																		'width' =>
																			array(
																				'path'  => 'value',
																				'value' => '10',
																			),
																		'color' => 'rgba(0, 0, 0, 0.5)',
																		'style' => 'solid',
																	),
															),
														'transform'       =>
															array(
																'translate' =>
																	array(
																		'x'       =>
																			array(
																				'path' => 'value',
																			),
																		'x_value' => '4',
																		'y'       =>
																			array(
																				'path' => 'value',
																			),
																		'y_value' => '6',
																	),
															),
													),
											),
									),
								'props' =>
									array(
										'frame'              =>
											array(
												'type' => 'border',
											),
										'enabledFrameOption' => false,
										'showFrameOverImage' => false,
										'showFrameShadow'    => false,
									),
							),
					),
			),
		'footer_post'       =>
			array(
				'footer' =>
					array(
						'selective_selector' => '[data-colibri-id="13-f1"]',
						'id'                 => '1',
						'nodeId'             => '13-f1',
						'partialId'          => '13',
						'styleRef'           => '61',
						'props'              =>
							array(
								'useFooterParallax' => true,
							),
					),
			),
		'main_404'          =>
			array(
				'blog_posts_row' =>
					array(
						'id'        => '2',
						'nodeId'    => '22-m2',
						'partialId' => '22',
						'styleRef'  => '132',
					),
				404              =>
					array(
						'selective_selector' => '[data-colibri-id="22-m2"]',
						'id'                 => '2',
						'nodeId'             => '22-m2',
						'partialId'          => '22',
						'styleRef'           => '132',
					),
			),
		'main_post'         =>
			array(
				'blog_posts_row' =>
					array(
						'id'        => '3',
						'nodeId'    => '16-m3',
						'partialId' => '16',
						'styleRef'  => '72',
					),
				'post_thumbnail' =>
					array(
						'id'        => '5',
						'nodeId'    => '16-m5',
						'partialId' => '16',
						'styleRef'  => '74',
					),
				'post_meta'      =>
					array(
						'id'        => '9',
						'nodeId'    => '16-m9',
						'partialId' => '16',
						'styleRef'  => '115',
					),
				'post'           =>
					array(
						'selective_selector' => '[data-colibri-id="16-m2"]',
						'id'                 => '2',
						'nodeId'             => '16-m2',
						'partialId'          => '16',
						'styleRef'           => '67',
					),
			),
		'main_archive'      =>
			array(
				'blog_posts_row' =>
					array(
						'id'        => '3',
						'nodeId'    => '19-m3',
						'partialId' => '19',
						'styleRef'  => '109',
					),
				'post_thumbnail' =>
					array(
						'id'        => '7',
						'nodeId'    => '19-m7',
						'partialId' => '19',
						'styleRef'  => '111',
					),
				'post_meta'      =>
					array(
						'id'        => '12',
						'nodeId'    => '19-m12',
						'partialId' => '19',
						'styleRef'  => '115',
					),
				'archive'        =>
					array(
						'selective_selector' => '[data-colibri-id=""]',
						'id'                 => '1',
						'nodeId'             => '19-m1',
						'partialId'          => '19',
						'styleRef'           => '103',
					),
			),
		'main_search'       =>
			array(
				'blog_posts_row' =>
					array(
						'id'        => '2',
						'nodeId'    => '25-m2',
						'partialId' => '25',
						'styleRef'  => '139',
					),
				'post_thumbnail' =>
					array(
						'id'        => '6',
						'nodeId'    => '25-m6',
						'partialId' => '25',
						'styleRef'  => '809',
					),
				'post_meta'      =>
					array(
						'id'        => '11',
						'nodeId'    => '25-m11',
						'partialId' => '25',
						'styleRef'  => '115',
					),
				'search'         =>
					array(
						'selective_selector' => '[data-colibri-id=""]',
						'id'                 => '1',
						'nodeId'             => '25-m1',
						'partialId'          => '25',
						'styleRef'           => '138',
					),
			),
		'templates'         =>
			array(
				'blog'        =>
					array(
						'row'     =>
							array(
								'layout'         =>
									array(
										'horizontalGap' => 2,
										'verticalGap'   => 2,
									),
								'layout-classes' =>
									array(
										'unset'       => true,
										'outer_class' =>
											array(
												0 => 'gutters-row-lg-2',
											),
										'inner_class' =>
											array(
												0 => 'gutters-col-lg-2',
											),
									),
							),
						'section' =>
							array(
								'sidebars' =>
									array(
										'right' => true,
									),
							),
					),
				'woocommerce' =>
					array(
						'section' =>
							array(
								'sidebars' =>
									array(
										'left' => true,
									),
							),
					),
			),
	);
