import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Beheeyem",
		fr: "Neitram",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		606,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Elgyem",
		fr: "Lewsor",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psypunch",
				fr: "Coup de Poing Psy",
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mysterious Noise",
				fr: "Bruit Mystérieux",
			},
			effect: {
				en: "Shuffle this Pokémon and all cards attached to it into your deck. Your opponent can't play any Item cards from their hand during their next turn.",
				fr: "Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck. Votre adversaire ne peut pas jouer de carte Objet de sa main pendant son prochain tour.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
