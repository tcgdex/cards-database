import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Gengar GL",
		fr: "Ectoplasma  Niv. 65",
	},
	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		94,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Confuse Ray",
				fr: "Onde folie",
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Attack and Hide",
				fr: "Attaquer et se cacher",
			},
			effect: {
				en: "Put 3 damage counters on 1 of your opponent's Pokémon. You may shuffle Gengar and all cards attached to it back into your deck.",
				fr: "Placez 3 marqueurs de dégât sur 1 des Pokémon de votre adversaire. Vous pouvez mélanger Ectoplasma  ainsi que toutes les cartes qui lui sont attachées avec votre deck.",
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
