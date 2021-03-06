module.exports = function (context, poz) {
	return {
		prompts() {
			return {
				name: {
					message: "What's your name?",
					validate: v => v ? true : 'name cannot be empty'
				},
				lang: {
					message: 'Which language do you usually write?',
					type: 'list',
					choices: ['js', 'go', 'py'],
					default: 'js'
				}
			}
		},

		get outDir() {
			return context.name
		},

		get rename() {
			return {
				'{lang}': context.lang
			}
		},

		onExit() {
			console.log('[OK]')
		}
	}
}