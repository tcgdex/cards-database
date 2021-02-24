import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Lanturn",
		fr: "Lanturn",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		171,
	],
	hp: 110,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Salvage",
				fr: "Trouvaille",
			},
			effect: {
				en: "Shuffle 4 Item cards from your discard pile into your deck.",
				fr: "Mélangez 4 cartes Objet de votre pile de défausse avec votre deck.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Signal Beam",
				fr: "Rayon Signal",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
