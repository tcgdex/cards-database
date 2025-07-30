import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Mantine",
		fr: "Demanta",
		de: "Mantax"
	},

	illustrator: "Yukiko Baba",
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
				en: "Giant Wave",
				fr: "Vague géante",
				de: "Giant Wave"
			},
			effect: {
				en: "Mantine can't attack during your next turn.",
				fr: "Demanta ne peut pas attaquer pendant votre prochain tour.",
				de: "Mantine can't attack during your next turn."
			},
			damage: 40,

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
		fr: "Ce Pokémon est parfaitement adapté au milieu océanique. Il peut accumuler suffisamment de vitesse pour bondir hors de l'eau comme une baleine."
	},

	thirdParty: {
		cardmarket: 274726,
		tcgplayer: 87180
	}
}

export default card
