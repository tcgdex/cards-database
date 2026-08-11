import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Beldum δ",
		'fr-fr': "Terhal δ",
		'de-de': "Tanhel"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		374,
	],

	hp: 50,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Conductive Body",
				'fr-fr': "Corps conducteur",
				'de-de': "Conductive Body"
			},
			effect: {
				'en-us': "You pay Colorless to retreat Beldum for each Beldum on your Bench.",
				'fr-fr': "Tant que Terhal est votre Pokémon Actif, vous payez un  de moins pour faire battre Terhal en retraite pour chaque Terhal se trouvant sur votre Banc.",
				'de-de': "As long as Beldum is your Active Pokémon, you pay  less to retreat Beldum for each Beldum on your Bench."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Take Down"
			},
			effect: {
				'en-us': "Beldum does 10 damage to itself.",
				'fr-fr': "Terhal s'inflige 10 dégâts.",
				'de-de': "Beldum does 10 damage to itself."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276822
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

