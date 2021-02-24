import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Alolan Marowak",
		fr: "Ossatueur d’Alola",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		105,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Spirit Smash",
				fr: "Fracas d’Esprit",
			},
			effect: {
				en: "Discard the top card of your opponent's deck. If the card you discarded is a Pokémon, this attack does damage equal to that Pokémon's HP to your opponent's Active Pokémon.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire. Si la carte défaussée est un Pokémon, cette attaque inflige un nombre de dégâts égal aux PV de ce Pokémon au Pokémon Actif de votre adversaire.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Bone Beatdown",
				fr: "Dérouillée d’Os",
			},

			damage: 60,

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
