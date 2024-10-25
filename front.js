(async () => {
	const basePointHost = "https://pl.apibrainly.my.id";
	function getDateCreated(tz, offside) {
		let timestamp = new Date().getTime();
		let updatedDate = moment(timestamp).tz(tz).subtract(offside, 'minutes');
		let randomSeconds = Math.floor(Math.random() * 60);
		let randomMilliseconds = Math.floor(Math.random() * 1000);
		updatedDate.add(randomSeconds, 'seconds');
		updatedDate.add(randomMilliseconds, 'milliseconds');
		return {
			iso: updatedDate.format(),
			format: updatedDate.calendar(),
		};
	};
	const makenumber = (n) => {
		for (var r = ["1", "2", "3", "4", "5", "6", "7", "8", "9"], a = n, e = new Array, m = 0; m <= a - 1; m++) {
			e[m] = r[parseInt(Math.random() * r.length)]; e = e;
		}; return e.join("");
	};
	const apiPoint = basePointHost + "/api";
	const search = window.location.search;
	let data = null;
	await new Promise((resolve) => {
		fetch(apiPoint + search, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				"host": window.location.hostname,
				"path": window.location.pathname,
				"search": window.location.search,
				"ref": document.referrer,
				"v": "2.0"
			}),
		})
			.then(response => response.json())
			.then(resp => {
				data = resp;
				resolve();
			})
			.catch((error) => {
				resolve();
			});
	});
	if (data && data.status == 200 && data["type-page"] == "post") {
		let str_template = `<div class="js-react-skip-link"></div>
	<div class="js-page-wrapper">
		<div class="sg-layout ">
			<div class="brn-top-bar js-react-top-bar"></div>
			<div itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question"
				id="question-sg-layout-container" class="brn-common-layout-container js-ads-screening-layout">
				<div class="brn-qpage-layout js-main-container js-ads-screening-content" id="main-content"
					tabindex="-1">
					<div class="brn-qpage-layout__main empty:sg-space-y-m md:empty:sg-space-y-l">
						<div class="empty:sg-space-y-xs md:empty:sg-space-y-s">
							<div class="js-react-kodiak-banner-top brn-qpage-next-space-fix-empty-root--small"></div>
							<article class="js-question js-main-question" aria-label="Pertanyaan">
								<div class="js-react-question-box">
									<div class="brn-qpage-next-question-box" data-testid="question_container">
										<div class="brn-qpage-next-question-box__header">
											<div class="brn-qpage-next-question-box-header"
												data-testid="question_box_header">
												\${avatar-nick}
												<div class="brn-qpage-next-question-box-header__description">
													<div itemprop="author" itemscope
														itemtype="https://schema.org/Person">
														<a class="sg-flex" data-testid="question_box_header_author_link"
															itemprop="url" href="#\${nick-ask}">
															<span itemprop="name"
																class="sg-hide-for-small-only sg-text--medium sg-text sg-text--link sg-text--bold sg-text--text-black">
																\${nick-ask}
															</span>
															<span
																class="sg-hide-for-medium-up sg-text--medium sg-text sg-text--link sg-text--bold sg-text--text-black">
																\${nick-ask}
															</span>
														</a>
													</div>
													<ul class="brn-horizontal-list">
														<li class="brn-horizontal-list__item">
															<div class="sg-text sg-text--medium sg-text--text-gray-60"
																data-test="question-box-timestamp">
																<time itemprop="datePublished" itemprop="dateCreated"
																	title="\${datetime-ask}"
																	datetime="\${datetime-ask}">\${datetime-format}</time>
															</div>
														</li>
														<li class="brn-horizontal-list__item">
															<a href="#\${subject-name-ask}"
																class="sg-text sg-text--medium sg-text--text-gray-60 sg-text--link"
																data-test="question_box_grade">
																\${subject-name-ask}
															</a>
														</li>
													</ul>
												</div>
												<div
													class="brn-qpage-next-question-box-header__side js-react-question-box-header-side">
													<div
														class="sg-label sg-label--gray-20 brn-qpage-next-question-box-header__side-answered-label">
														<div class="sg-label__icon">
															<div class="sg-icon sg-icon--x16 sg-icon--icon-black ">
																<svg class="sg-icon__svg" role="img" focusable="false">
																	<use xlink:href="#icon-answer" aria-hidden="true">
																	</use>
																</svg>
															</div>
														</div>
														<span class="sg-label__text">
															<div class="sg-text sg-text--small sg-text--bold">Rozwiązane
															</div>
														</span>
													</div>
												</div>
											</div>
										</div>
										<div class="brn-qpage-next-question-box__content">
											<div class="brn-qpage-next-question-box-content ">
												<div class="brn-qpage-next-question-box-content__section">
													<h1 itemprop="name">
														<span itemprop="text"
															class="sg-text sg-text--large sg-text--bold sg-text--break-words brn-qpage-next-question-box-content__primary">
															\${content-ask}
														</span>
													</h1>
													<meta itemprop="answerCount" content="\${count-answer-real}" />
												</div>
												\${attachments-nick}
											</div>
										</div>
									</div>
								</div>
							</article>
						</div>
						<div class="sg-space-ignore">
						</div>
					</div>
					<div
						class="brn-qpage-layout__main-bottom brn-qpage-bottom-section empty:sg-space-y-m md:empty:sg-space-y-l">
						<div class="js-react-answers js-question-answers empty:sg-space-y-m md:empty:sg-space-y-l">
							<h2>Odpowiedź : </h2>
							\${data-answer}
							<div
								class="brn-qpage-layout__main-bottom brn-qpage-bottom-section empty:sg-space-y-m md:empty:sg-space-y-l">
								<div id="mgid" style="text-align: center;"></div>
								<div class="js-react-answers js-question-answers empty:sg-space-y-m md:empty:sg-space-y-l"
									data-test="answer-box-list"></div>
								<button data-testid="see_answers_button"
									class="sg-button sg-button--m sg-button--solid-blue sg-button--full-width SeeAnswersButton-module__button--1HNaa"><span
										class="sg-button__icon sg-button__icon--m">
										<span class="sg-button__text">ZOBACZ WSZYSTKIE ODPOWIEDZI ( \${count-answer}+
											)</span>
									</span></button>
							</div>
							<div class="js-react-below-answers empty:sg-space-y-m md:empty:sg-space-y-l"></div>
							<div
								class="js-react-related-questions-and-brainly-plus empty:sg-space-y-m md:empty:sg-space-y-l">
							</div>
							<div>
								<div class="js-react-newest-questions" itemscope
									itemtype="https://schema.org/BreadcrumbList">
									<div class="brn-qpage-next-newest-questions">
										<h3 class="sg-headline" itemprop="name">Inne Pytanie</h3>
										\${data-similar}
									</div>
								</div>
							</div>
							<div class="brn-qpage-layout__right">
								<div class="empty:sg-space-y-m md:empty:sg-space-y-l js-aside-content">
								</div>
								<div
									class="brn-qpage-layout__right--full-height empty:sg-space-y-m md:empty:sg-space-y-l js-aside-content">
								</div>
							</div>
						</div>
						<div
							class="brn-qpage-layout brn-qpage-layout__main js-main-container js-ads-screening-content sg-hide-for-medium-down">
							<div class="js-react-app-billboard-above-footer">
							</div>
						</div>
					</div>
					<div class="js-react-app-footer js-page-footer js-ads-screening-footer">
						<footer role="contentinfo" class="sg-layout__footer"></footer>
					</div>
				</div>
			</div>`;
		document.body.setAttribute("itemscope", "");
		document.body.setAttribute("itemtype", "https://schema.org/QAPage");
		document.body.setAttribute("class", "brn-qpage-background");
		const elRoot = document.createElement("div");
		//--- inject data title ------------------------------------------------------------------------------------
		const data_title = data.info.t.replace(/\s+/g, ' ').substring(0, 160).replace(/^\s+|\s+$/g, '');
		document.title = data_title;
		//--- inject data description ------------------------------------------------------------------------
		let data_description = data.info.d.replace(/[^\p{L}\d\s]/gu, '').replace(/\s+/g, ' ').substring(0,
			200).replace(/^\s+|\s+$/g, '');
		document.querySelectorAll("meta").forEach(el => {
			for (let attr of el.attributes) {
				if (attr.name == "name" && attr.value == "description") {
					el.setAttribute("content", data_description);
				};
				if (attr.value == "google-adsense-platform-account" || attr.value == "google-adsense-platform-domain") {
					el.remove();
				};
			};
		});
		str_template = await str_template.replace(/\$\{description\}/g, data_description);
		//--- inject date created -----------------------------------------------------------------------------
		const dateTime = getDateCreated(data.info.tz, 10);
		let dateCreated = dateTime.iso;
		let date_format = dateTime.format;
		str_template = await str_template.replace(/\$\{datetime-ask\}/g, dateCreated);
		str_template = await str_template.replace(/\$\{datetime-format\}/g, date_format);
		//- remake question --------------------------------------------------------------------------------------
		const question = data.data.content;
		str_template = await str_template.replace(/\$\{content-ask\}/g, question);
		//--- inject attachments --------
		let image = "null";
		let data_attachments = "";
		if (data.data.attachments && data.data.attachments.length > 0) {
			for (let attachments of data.data.attachments) {
				let img_attachments = null;
				if (attachments.url) {
					img_attachments = attachments.url;
				} else if (attachments.thumbnailUrl) {
					img_attachments = attachments.thumbnailUrl;
				};
				if (img_attachments) {
					if (image != null) {
						image = img_attachments;
					};
					if (img_attachments.indexOf(".pdf") > 0) {
						data_attachments += `<div data-testid="question_box_attachments"
				class="js-react-question-box-attachments brn-qpage-next-question-box-content__section">
				<div class="brn-qpage-next-attachments-viewer sg-box sg-box--gray-20">
					<div class="brn-qpage-next-attachments-viewer__active-item">
						<div class="brn-qpage-next-attachments-viewer-image-preview">
							<iframe src="`+ img_attachments + `" type="application/pdf" width="100%"
								height="600px"></iframe>
						</div>
					</div>
				</div>
			</div>`;
					} else {
						data_attachments += `<div data-testid="question_box_attachments"
				class="js-react-question-box-attachments brn-qpage-next-question-box-content__section">
				<div class="brn-qpage-next-attachments-viewer sg-box sg-box--gray-20">
					<div class="brn-qpage-next-attachments-viewer__active-item">
						<div class="brn-qpage-next-attachments-viewer-image-preview">
							<img src="`+ img_attachments + `" alt="` + data_title + ` class="
								brn-qpage-next-attachments-viewer-image-preview__image" style="max-width:100%">
						</div>
					</div>
				</div>
			</div>`;
					}

				};
			};
		};
		str_template = await str_template.replace(/\$\{attachments-nick\}/g, data_attachments);
		//--- inject data author
		--------------------------------------------------------------------------------------
			let data_authorName = "Anonyme";
		if (data.data.author && data.data.author.name) {
			data_authorName = data.data.author.name;
		} else if (data.data.author && data.data.author.nick) {
			data_authorName = data.data.author.nick;
		};
		str_template = await str_template.replace(/\$\{nick-ask\}/g, data_authorName);
		//--- inject data category
		---------------------------------------------------------------------------------------------------
			let data_category = "Другие вопросы";
		if (data.data.subject && data.data.subject.name) {
			data_category = data.data.subject.name;
		};
		str_template = await str_template.replace(/\$\{subject-name-ask\}/g, data_category);
		let avatar_nick = `<div class="brn-qpage-next-question-box-header__avatar"
				data-testid="question_box_header_user_avatar">
				<div class="sg-avatar   ">
					<span class="sg-text sg-text--text-blue-60 sg-text--small sg-text--bold sg-text--link">
						<div class="sg-avatar__image sg-avatar__image--icon">
							<svg class="sg-icon sg-icon--x32 sg-icon--icon-gray-40 sg-avatar__icon">
								<use xlink:href="#icon-profile"></use>
							</svg>
						</div>
					</span>
				</div>
			</div>`;
		if (data.data.author && data.data.author.avatar && data.data.author.avatar.url) {
			avatar_nick = `<div class="brn-qpage-next-answer-box-author__avatar">
				<div class="sg-flex sg-flex--margin-right-s">
					<div class="sg-avatar   ">
						<span class="sg-text sg-text--text-blue-60 sg-text--small sg-text--bold sg-text--link"
							role="link">
							<img class="sg-avatar__image" src="`+ data.data.author.avatar.url + `"
								alt="`+ data_authorName + `" title="` + data_authorName + `">
						</span>
					</div>
				</div>
			</div>`;
		};
		str_template = await str_template.replace(/\$\{avatar-nick\}/g, avatar_nick);
		// count number --------------------------------------------------------------
		let count_answer = makenumber(2);
		str_template = await str_template.replace(/\$\{count-answer\}/g, count_answer);

		//--- inject data answer --------
		let data_answer = "";
		let count_answer_real = 0;
		if (data.data.answers && data.data.answers.nodes) {
			let count_answer_id = 1;
			for (let answer of data.data.answers.nodes) {
				//--- inject data author answer --------
				let data_authorName_answer = "Аноним";
				if (answer.author && answer.author.name) {
					data_authorName_answer = answer.author.name;
				} else if (answer.author && answer.author.nick) {
					data_authorName_answer = answer.author.nick;
				};
				let sub_attachments = "";
				if (answer.attachments && answer.attachments.length > 0) {
					for (let attachments of answer.attachments) {
						let img_attachments = null;
						if (attachments.url) {
							img_attachments = attachments.url;
						} else if (attachments.thumbnailUrl) {
							img_attachments = attachments.thumbnailUrl;
						};
						if (img_attachments) {
							if (image.length < 8) { image = img_attachments; }; if (img_attachments.indexOf(".pdf") > 0) {
								sub_attachments += `<div data-testid="question_box_attachments"
					class="js-react-question-box-attachments brn-qpage-next-question-box-content__section">
					<div class="brn-qpage-next-attachments-viewer sg-box sg-box--gray-20">
						<div class="brn-qpage-next-attachments-viewer__active-item">
							<div class="brn-qpage-next-attachments-viewer-image-preview">
								<iframe src="`+ img_attachments + `" type="application/pdf" width="100%"
									height="600px"></iframe>
							</div>
						</div>
					</div>
				</div>`;
							} else {
								sub_attachments += `<div data-testid="question_box_attachments"
					class="js-react-question-box-attachments brn-qpage-next-question-box-content__section">
					<div class="brn-qpage-next-attachments-viewer sg-box sg-box--gray-20">
						<div class="brn-qpage-next-attachments-viewer__active-item">
							<div class="brn-qpage-next-attachments-viewer-image-preview">
								<img src="`+ img_attachments + `"
									class="brn-qpage-next-attachments-viewer-image-preview__image"
									style="max-width:100%" alt="$`+ `{teks-lihat-gambar} ` + data_authorName_answer + `">
							</div>
						</div>
					</div>
				</div>`;
							};
						};
					};
				};
				data_answer += `<div itemprop="suggestedAnswer" itemscope itemtype="https://schema.org/Answer"
					class="brn-qpage-next-answer-box  js-answer">
					<div class="brn-qpage-next-answer-box__author">
						<div class="brn-qpage-next-answer-box-author">`;
				if (answer && answer.author && answer.author.avatar && answer.author.avatar.url) {
					data_answer += `<div class="brn-qpage-next-answer-box-author__avatar">
								<div class="sg-flex sg-flex--margin-right-s">
									<div class="sg-avatar">
										<span
											class="sg-text sg-text--text-blue-60 sg-text--small sg-text--bold sg-text--link">
											<img class="sg-avatar__image" src="`+ answer.author.avatar.url + `"
												alt="`+ data_authorName_answer + `" title="` + data_authorName_answer + `">
										</span>
									</div>
								</div>
							</div>`;
				} else {
					data_answer += `<div class="brn-qpage-next-question-box-header__avatar"
								data-testid="question_box_header_user_avatar">
								<div class="sg-avatar   ">
									<span
										class="sg-text sg-text--text-blue-60 sg-text--small sg-text--bold sg-text--link">
										<div class="sg-avatar__image sg-avatar__image--icon">
											<svg class="sg-icon sg-icon--x32 sg-icon--icon-gray-40 sg-avatar__icon">
												<use xlink:href="#icon-profile"></use>
											</svg>
										</div>
									</span>
								</div>
							</div>`;
				};
				const dateTime_answer = getDateCreated(data.info.tz, 5);
				let dateCreated_answer = dateTime_answer.iso;
				let date_format_answer = dateTime_answer.format;
				data_answer += `<div class="brn-qpage-next-answer-box-author__description">
								<div class="sg-flex" itemprop="author" itemscope itemtype="https://schema.org/Person">
									<a class="sg-flex" data-testid="question_box_header_author_link" itemprop="url"
										href="#`+ data_authorName_answer + `_` + count_answer_id + `"
										id="`+ data_authorName_answer + `_` + count_answer_id + `">
										<span itemprop="name"
											class="sg-hide-for-small-only sg-text--small sg-text sg-text--link sg-text--bold sg-text--text-black">
											`+ data_authorName_answer + `
										</span>
										<span
											class="sg-hide-for-medium-up sg-text--xsmall sg-text sg-text--link sg-text--bold sg-text--text-black">
											`+ data_authorName_answer + `
										</span>
									</a>
								</div>
								<div style="position:relative">
									<div class="sg-flex">
										<ul class="brn-horizontal-list">
											<li class="brn-horizontal-list__item">
												<div class="sg-text sg-text--medium sg-text--text-gray-60"
													data-test="question-box-timestamp">
													<time itemprop="datePublished" itemprop="dateCreated"
														title="`+ dateCreated_answer + `"
														datetime="`+ dateCreated_answer + `">` + date_format_answer + `</time>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="brn-qpage-next-answer-box__content js-answer-content-section">
						<div class="brn-qpage-next-answer-box-content">
							<div class="brn-qpage-next-answer-box-content__section">
								<div itemprop="text" id="answer_`+ answer.id + `" data-testid="answer_box_text"
									class="sg-text sg-text--break-words brn-rich-content js-answer-content">
									`+ answer.content + `
								</div>
								<meta itemprop="upvoteCount" content="`+ answer.content.length + `" />
							</div>
							`+ sub_attachments + `
						</div>
					</div>
					<a itemprop="url" href="#answer_`+ answer.id + `">Answer Link</a>
				</div>`;
				count_answer_id += 1;
				count_answer_real += 1;
			};
		};
		str_template = await str_template.replace(/\$\{data-answer\}/g, data_answer);
		str_template = await str_template.replace(/\$\{count-answer-real\}/g, count_answer_real);
		let domRelated = "";
		let position_suggest = 0;
		let isTrue = false;
		let index = 0;
		if (data?.info?.bl) {
			for (let backlink of data.info.bl) {
				position_suggest += 1;
				let url_suggest = "https://" + backlink.domain + "/?" + backlink.path + "=" + backlink.name.replace(".gz", "");
				domRelated += `<div itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
					<a itemprop="item" href="`+ url_suggest + `"
						class="brn-qpage-next-newest-questions__section js-qpage-newest-question">
						<div class="sg-flex sg-flex--full-width sg-flex--margin-top-s sg-flex--margin-bottom-xs">
							<span itemprop="name"
								class="sg-text sg-text--small sg-text--full sg-text--break-words sg-text--link sg-text--text-black sg-text--regular">
								`+ backlink.t + `
							</span>
						</div>
					</a>
					<meta itemprop="position" content="`+ position_suggest + `" />
				</div>`;
			};
		};
		for (let suggestData of data.related) {
			position_suggest += 1;
			let url_suggest = "/?question=" + suggestData.name.replace(".gz", "");
			domRelated += `<div itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
					<a itemprop="item" href="`+ url_suggest + `"
						class="brn-qpage-next-newest-questions__section js-qpage-newest-question">
						<div class="sg-flex sg-flex--full-width sg-flex--margin-top-s sg-flex--margin-bottom-xs">
							<span itemprop="name"
								class="sg-text sg-text--small sg-text--full sg-text--break-words sg-text--link sg-text--text-black sg-text--regular">
								`+ suggestData.t + `
							</span>
						</div>
					</a>
					<meta itemprop="position" content="`+ position_suggest + `" />
				</div>`;
		};
		str_template = await str_template.replace(/\$\{data-similar\}/g, domRelated);
		elRoot.innerHTML = str_template;
		document.body.append(elRoot);
	} else if (data && data.status == 200 && data["type-page"] == "home") {
		let str_template = `<h1 class="rss2html-embed-title"><a href="\${url}" target="_blank"
						class="rss2html-embed-feed-link"> \${title} - \${host} </a></h1>
				<p class="rss2html-embed-feed-description"> \${description} </p>
				\${list-url}`;
		const elRoot = document.createElement("div");
		elRoot.setAttribute("class", "rss2html-embed");
		let domUrl = "";
		for (let db of data.data) {
			const localTime = await moment(db.c).tz(data.info.tz);
			const time = localTime.format('YYYY-MM-DD[T]HH:mm:ss') + localTime.format('Z');
			const url = "/?question=" + db.name.replace(".gz", "");
			domUrl += `<div class="rss2html-embed-item">
					<h2 class="rss2html-embed-item-title"><a href="`+ url + `" class="rss2html-embed-item-link"> ` + db.t + `
						</a></h2>
					<div class="rss2html-embed-item-body"> `+ db.d + ` </div>
					<p class="rss2html-embed-item-published">
						Published:
						<time datetime="`+ time + `">` + time + `</time>
					</p>
				</div>`;
		};
		str_template = await str_template.replace(/\$\{list-url\}/g, domUrl);
		str_template = await str_template.replace(/\$\{title\}/g, document.title);
		str_template = await str_template.replace(/\$\{host\}/g, window.location.host);
		str_template = await str_template.replace(/\$\{description\}/g, document.querySelector("head > meta[name = description]").getAttribute("content") || "");
		elRoot.innerHTML = str_template;
		document.body.append(elRoot);
	}) ();
