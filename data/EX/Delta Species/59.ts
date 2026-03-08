import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Beldum δ",
		fr: "Terhal δ",
		de: "Tanhel"
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
				en: "Conductive Body",
				fr: "Corps conducteur",
				de: "Conductive Body"
			},
			effect: {
				en: "You pay Colorless to retreat Beldum for each Beldum on your Bench.",
				fr: "Tant que Terhal est votre Pokémon Actif, vous payez un  de moins pour faire battre Terhal en retraite pour chaque Terhal se trouvant sur votre Banc.",
				de: "As long as Beldum is your Active Pokémon, you pay  less to retreat Beldum for each Beldum on your Bench."
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
				en: "Take Down",
				fr: "Bélier",
				de: "Take Down"
			},
			effect: {
				en: "Beldum does 10 damage to itself.",
				fr: "Terhal s'inflige 10 dégâts.",
				de: "Beldum does 10 damage to itself."
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

