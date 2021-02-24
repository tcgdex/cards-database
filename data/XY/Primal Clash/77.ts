import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Rhyperior",
		fr: "Rhinastoc",
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		464,
	],
	hp: 160,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Rock Wall",
				fr: "Barrière Ω",
			},
			effect: {
				en: "Any damage done to your Pokémon by an opponent's attack is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Chaque fois que votre adversaire joue une carte Dresseur (excepté les Outils Pokémon et les cartes Stade), évitez tous les effets de la carte Dresseur sur ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer Arm",
				fr: "Marto-Poing",
			},
			effect: {
				en: "Discard the top card of your opponent's deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
