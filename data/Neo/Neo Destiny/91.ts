import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Vulpix",
		fr: "Goupix",
		de: "Vulpix"
	},

	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		37,
	],

	hp: 50,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Ember",
				fr: "Flammèche",
				de: "Glut"
			},
			effect: {
				en: "Discard 1 Energy card attached to this Pokémon in order to use this attack.",
				fr: "Défaussez-vous d'une carte Énergie {R} attachée à Goupix pour pouvoir utiliser cette attaque.",
				de: "Lege eine an Vulpix angelegte {R}-Energiekarte auf deinen Ablagestapel, um diesen Angriff zu verwenden."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "As it grows older, its white tail changes colors and splits into six different tails. Its body radiates a faint warmth.",
		fr: "Tandis qu'il vieillit, sa queue blanche change de couleur et se sépare en six. Il émane de son corps une faible chaleur.",
		de: "Wenn es älter wird, wechselt sein weißer Schwanz seine Farbe und teilt sich in sechs verschiedene Schwänze auf. Sein Körper strahlt eine leichte Wärme aus."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274743,
				tcgplayer: 90433
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274743,
				tcgplayer: 90433
			}
		}
	]
}

export default card
