import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Musharna",
		fr: "Mushana",
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		518,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Munna",
		fr: "Munna",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Dream of Memories",
				fr: "Retour en Arrière",
			},
			effect: {
				en: "Shuffle 3 cards from your discard pile into your deck.",
				fr: "Mélangez 3 cartes de votre pile de défausse avec votre deck.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Dream Dance",
				fr: "Danse-Rêve",
			},
			effect: {
				en: "Both Active Pokémon are now Asleep.",
				fr: "Les deux Pokémon Actifs sont maintenant Endormis.",
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

	retreat: 2,



}

export default card
