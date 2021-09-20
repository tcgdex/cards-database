import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Espeon",
		fr: "Mentali",
	},

	illustrator: "Hideaki Hakozaki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		196,
	],

	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Evolution Memories",
				fr: "Souvenirs d’Évolution",
			},
			effect: {
				en: "Espeon can use the attacks of all Pokémon you have in play that evolve from Eevee as its own. (You still need the necessary Energy to use each attack.)",
				fr: "Mentali peut réutiliser les attaques de tous les Pokémon que vous avez joués et qui sont une évolution d’Evoli. (Vous devrez néanmoins avoir les Énergies nécessaires pour utiliser chaque attaque.)",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Solar Ray",
				fr: "Rayonnement solaire",
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon.",
				fr: "Retirez 1 marqueur de dégât à chacun de vos Pokémon.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,
	suffix: "Prime"
}

export default card
