import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Dragapult",
		fr: "Lanssorien"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Drakloak",
		fr: "Dispareptil"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Infiltrator",
				fr: "Infiltration"
			},
			effect: {
				en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage.",
				fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c’est face, évitez ces dégâts."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Phantom Force",
				fr: "Hantise"
			},
			effect: {
				en: "Put 3 damage counters on your opponent’s Benched Pokémon in any way you like.",
				fr: "Placez 3 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	hp: 150,
	types: ["Psychic"],
	regulationMark: "D"
}

export default card
