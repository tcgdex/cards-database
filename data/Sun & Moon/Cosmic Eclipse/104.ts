import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Blacephalon",
		fr: "Pierroteknik",
	},
	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		806,
	],
	hp: 110,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Fireworks Bomb",
				fr: "Bombe Artifice",
			},
			effect: {
				en: "Put 4 damage counters on your opponent's Pokémon in any way you like. If your opponent has exactly 3 Prize cards remaining, put 12 damage counters on them instead.",
				fr: "Placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez. S’il reste exactement 3 cartes Récompense à votre adversaire, placez 12 marqueurs de dégâts à la place.",
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
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
