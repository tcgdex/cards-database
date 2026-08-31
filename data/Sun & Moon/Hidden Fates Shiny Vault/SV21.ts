import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Riolu",
		fr: "Riolu",
		de: "Riolu"
	},
	illustrator: "Misa Tsutsui",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		447,
	],
	hp: 70,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Detect",
				fr: "Détection",
				de: "Scanner"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				fr: "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Jab",
				fr: "Taquet",
				de: "Boxschlag"
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,




	description: {
		en: "It's tough enough to run right through the night, and it's also a hard worker, but it's still just a youngster.",
		de: "Dieses junge Pokémon ist bereits so robust und willensstark, dass es die ganze Nacht hindurch rennen kann."
	},
}

export default card
