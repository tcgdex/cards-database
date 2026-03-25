import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Cynthia's Garchomp ex",
		fr: "Carchacrok-ex de Cynthia"
	},
	suffix: "EX",
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 330,
	types: ["Fighting"],
	evolveFrom: {
		en: "Cynthia's Gabite",
		fr: "Carmache de Cynthia",
		de: "Cynthias Knarksel",
		it: "Gabite di Camilla",
		es: "Gabite de Cintia",
		pt: "Gabite da Cíntia",
		'es-mx': "Gabite de Cynthia"
	},
	stage: "Stage2",
	illustrator: "PLANETA Igarashi",
	dexId: [445],
	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Corkscrew Dive",
				fr: "Plongée Tire-Bouchon",
			},
			effect: {
				en: "You may draw cards until you have 6 cards in your hand.",
				fr: "Vous pouvez piocher des cartes jusqu'à en avoir 6 dans votre main.",
			},
			damage: 100,
		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Draconic Buster",
				fr: "Buster Draconien",
			},
			effect: {
				en: "Discard all Energy from this Pokémon.",
				fr: "Défaussez toutes les Énergies de ce Pokémon.",
			},
			damage: 260,
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	regulationMark: "I",

	variants: [
		{
			type: "holo",
		}
	]
}

export default card
