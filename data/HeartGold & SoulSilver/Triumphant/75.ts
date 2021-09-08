import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Shuppet",
		fr: "Polichombr",
	},
	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		353,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Disable",
				fr: "Entrave",
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 of the Defending Pokémon’s attacks. That Pokémon can’t use that attack during your opponent’s next turn.",
				fr: "Lancez une pièce. Si c’est face, choisissez l’une des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Haunt",
				fr: "Hanter",
			},
			effect: {
				en: "Put 1 damage counter on the Defending Pokémon.",
				fr: "Placez un marqueur de dégât sur le Pokémon Défenseur.",
			},

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
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
