import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Chinchou",
		fr: "Loupio",
		de: "Lampi"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		170,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Float",
				fr: "Flotteur",
				de: "Herumwandern"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Chinchou.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Loupio.",
				de: "Wirf eine Münze. Verhindere bei 'Kopf' während des nächsten Zuges deines Gegners alle Effekte von Angriffen (einschließlich Schaden), die Lampi zugefügt werden."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule",
				de: "Kopfnuss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275143,
		tcgplayer: 84301
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
