import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Beldum δ",
		fr: "Terhal δ"
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
				fr: "Corps conducteur"
			},
			effect: {
				en: "You pay Colorless to retreat Beldum for each Beldum on your Bench.",
				fr: "Tant que Terhal est votre Pokémon Actif, vous payez un  de moins pour faire battre Terhal en retraite pour chaque Terhal se trouvant sur votre Banc."
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
				fr: "Bélier"
			},
			effect: {
				en: "Beldum does 10 damage to itself.",
				fr: "Terhal s'inflige 10 dégâts."
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




}

export default card
