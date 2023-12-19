import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Ludicolo",
		fr: "Ludicolo",
		de: "Kappalores"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		272,
	],
	hp: 100,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Lombre",
		fr: "Lombre",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rain Dish",
				fr: "Cuvette",
				de: "Rain Dish"
			},
			effect: {
				en: "At any time between turns, remove 1 damage counter from Ludicolo.",
				fr: "N'importe quand entre deux tours, retirez à Ludicolo 1 marqueur de dégât.",
				de: "At any time between turns, remove 1 damage counter from Ludicolo."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Nature Power",
				fr: "Force-nature",
				de: "Nature Power"
			},
			effect: {
				en: "If you have a Stadium card in play, this attack does 60 damage plus 20 more damage. If your opponent has a Stadium card in play, the Defending Pokémon is now Confused.",
				fr: "Si vous avez une carte Stade en jeu, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires. Si votre adversaire possède une carte Stade en jeu, le Pokémon Défenseur est maintenant Confus.",
				de: "If you have a Stadium card in play, this attack does 60 damage plus 20 more damage. If your opponent has a Stadium card in play, the Defending Pokémon is now Confused."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],

	retreat: 2,



}

export default card
