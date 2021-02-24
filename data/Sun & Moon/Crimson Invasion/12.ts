import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Alolan Marowak",
		fr: "Ossatueur d’Alola",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		105,
	],
	hp: 100,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Dance of Flames",
				fr: "Flammes Dansantes",
			},
			effect: {
				en: "For each Energy attached to your opponent's Pokémon, attach a Fire Energy card from your discard pile to your Pokémon in any way you like.",
				fr: "Pour chaque Énergie attachée au Pokémon de votre adversaire, attachez une carte Énergie Fire de votre pile de défausse à vos Pokémon de la manière que vous voulez.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Burning Bonemerang",
				fr: "Osmerang Enflammé",
			},
			effect: {
				en: "Flip 2 coins. This attack does 70 damage for each heads. If either of them is heads, your opponent's Active Pokémon is now Burned.",
				fr: "Lancez 2 pièces. Cette attaque inflige 70 dégâts multipliés par le nombre de côtés face. Si vous obtenez au moins un côté face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
