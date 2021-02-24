import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Raticate",
		fr: "Rattatac",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		20,
	],
	hp: 60,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Rattata",
		fr: "Rattata",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Crunch",
				fr: "Mâchouille",
			},
			effect: {
				en: "Discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Shadowy Bite",
				fr: "Morsure d’Ombre",
			},
			effect: {
				en: "This attack does 60 damage times the number of Special Energy cards in your opponent's discard pile.",
				fr: "Cette attaque inflige 60 dégâts multipliés par le nombre de cartes Énergie spéciale dans la pile de défausse de votre adversaire.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
