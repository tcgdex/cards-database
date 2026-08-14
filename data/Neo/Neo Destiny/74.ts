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
				de: "Riesenwelle"
			},
			effect: {
				en: "Mantine can't attack during your next turn.",
				fr: "Demanta ne peut pas attaquer pendant votre prochain tour.",
				de: "Mantax kann während deines nächsten Zuges nicht angreifen."
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
	retreat: 2,


	description: {
		en: "This Pokémon is perfectly adapted to its ocean home. It can gather up enough speed to burst above the water like a whale.",
		fr: "Ce Pokémon est parfaitement adapté au milieu océanique. Il peut accumuler suffisamment de vitesse pour bondir hors de l'eau comme une baleine.",
		de: "Dieses Pokémon hat sich perfekt an seine Meeresheimat angepasst. Es kann genug Kraft sammeln, um wie ein Wal aus dem Wasser zu springen."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274726,
				tcgplayer: 87180
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274726,
				tcgplayer: 87180
			}
		}
	]
}

export default card
