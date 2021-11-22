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
		"Fighting",
	],
	evolveFrom: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				en: "Ω Barrier",
				fr: "Barrière Ω",
			},
			effect: {
				en: "Whenever your opponent plays a Trainer card (excluding Pokémon Tools and Stadium cards), prevent all effects of that card done to this Pokémon.",
				fr: "Chaque fois que votre adversaire joue une carte Dresseur (excepté les Outils Pokémon et les cartes Stade), évitez tous les effets de la carte Dresseur sur ce Pokémon.",
			},
		},
		{
			type: "Ability",
			name: {
				en: "Rock Wall",
			},
			effect: {
				en: "Any damage done to your Pokémon by an opponent's attack is reduced by 10 (after applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
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
