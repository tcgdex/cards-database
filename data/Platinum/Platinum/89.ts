import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Ralts",
		fr: "Tarsal",
		de: "Trasla"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		280,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Future Sight",
				fr: "Prescience",
				de: "Future Sight"
			},
			effect: {
				en: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order.",
				fr: "Regardez les 5 cartes du dessus du deck de chaque joueur et replacez-les au dessus du deck de chaque joueur dans n'importe quel ordre.",
				de: "Look at the top 5 cards of either player's deck and put them back on top of that player's deck in any order."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hypnoblast",
				fr: "Hypnoblast",
				de: "Hypnoblast"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Asleep."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278510
	}
}

export default card
