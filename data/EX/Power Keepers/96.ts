import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Salamence ex",
		fr: "Drattak ex"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		373,
	],
	hp: 160,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Shelgon",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Volcanic Flame",
				fr: "Flamme volcanique"
			},
			effect: {
				en: "Discard the top 5 cards from your deck.",
				fr: "Défaussez les 5 cartes du dessus de votre deck."
			},
			damage: 150,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Wave",
				fr: "Hydro-vague"
			},
			effect: {
				en: "Discard all Water Energy attached to Salamence ex. This attack does 30 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez toutes les Énergies  attachées à Drattak ex. Cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fire",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
