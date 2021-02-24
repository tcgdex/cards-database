import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Typhlosion",
		fr: "Typhlosion",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		157,
	],
	hp: 150,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Quilava",
		fr: "Feurisson",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Massive Eruption",
				fr: "Éruption Massive",
			},
			effect: {
				en: "Discard the top 5 cards of your deck. This attack does 80 damage times the number of Energy cards you discarded.",
				fr: "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 80 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
			},
			damage: 80,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare Destroy",
				fr: "Éclatodestruction",
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon. Then, discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon. Ensuite, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
