import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Galvantula",
		fr: "Mygavolt",
	},
	illustrator: "Yumi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		596,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Joltik",
		fr: "Statitik",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Live Wire",
				fr: "Fil Sous Tension",
			},
			effect: {
				en: "This attack does 50 damage to 1 of your opponent's Pokémon. Also apply Weakness and Resistance for Benched Pokémon.",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. Appliquez aussi la Faiblesse et la Résistance aux Pokémon de Banc.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
