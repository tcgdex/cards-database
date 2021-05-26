import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Seismitoad",
		fr: "Crapustule",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		537,
	],
	hp: 160,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Palpitoad",
		fr: "Batracné",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bulldoze",
				fr: "Piétisol",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a card, shuffle your deck, then put that card on top of it.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte dans votre deck, mélanger votre deck, puis placer cette carte sur le dessus.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tremulous Fist",
				fr: "Poing Trémulant",
			},
			effect: {
				en: "This attack does 30 more damage for each of your Benched Pokémon that has any damage counters on it.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun de vos Pokémon de Banc ayant au moins un marqueur de dégâts.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
