import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Alolan Sandslash",
		fr: "Sablaireau d’Alola",
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		28,
	],
	hp: 120,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Alolan Sandshrew",
		fr: "Sabelette d’Alola",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Curve Strike",
				fr: "Courbe-Frappe",
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn.",
				fr: "Lancez une pièce. Si c’est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reinforced Needle",
				fr: "Épine Renforcée",
			},
			effect: {
				en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 60 more damage.",
				fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 60,

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
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
