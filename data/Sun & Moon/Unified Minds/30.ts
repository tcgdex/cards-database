import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
	},
	illustrator: "kirisAki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		609,
	],
	hp: 140,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Spirit Burner",
				fr: "Brûleur d’Esprit",
			},
			effect: {
				en: "Discard the top 5 cards of your deck. This attack does 60 more damage for each Pokémon you discarded in this way. Then, put any number of Fire Pokémon you discarded in this way onto your Bench.",
				fr: "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 60 dégâts supplémentaires pour chaque Pokémon défaussé de cette façon. Ensuite, placez autant de Pokémon Fire défaussés de cette façon que vous le voulez sur votre Banc.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
