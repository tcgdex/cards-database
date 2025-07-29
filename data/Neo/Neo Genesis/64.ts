import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Mantine",
		fr: "Demanta",
		de: "Mantax"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		226,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Undulate",
				fr: "Annulation",
				de: "Undulate"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Mantine.",
				fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, prévenez tous les effets d'attaques, y compris les dégâts, infligés à Demanta.",
				de: "Flip a coin. If heads, during your opponent's next turn, prevent all effects of attacks, including damage, done to Mantine."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		fr: "Nageant librement en pleine mer, il peut s'envoler hors de l'eau et par-dessus les vagues s'il prend suffisamment de vitesse."
	},

	thirdParty: {
		cardmarket: 274464
	}
}

export default card
