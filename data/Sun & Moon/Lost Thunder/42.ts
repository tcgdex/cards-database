import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Typhlosion",
		fr: "Typhlosion",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		157,
	],
	hp: 160,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Quilava",
		fr: "Feurisson",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Blazing Energy",
				fr: "Énergie Ardente",
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this Ability. All Energy attached to your Pokémon are Fire Energy instead of their usual type until the end of your turn. (This includes cards that come into play on this turn.)",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez utiliser ce talent. Jusqu’à la fin de votre tour, toutes les Énergies attachées à vos Pokémon sont des Énergies Fire au lieu de leur type habituel. (Cela comprend les cartes qui sont mises en jeu pendant ce tour.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				en: "Lost Flame",
				fr: "Flamme Perdue",
			},
			effect: {
				en: "Put 2 Energy attached to your opponent's Active Pokémon in the Lost Zone.",
				fr: "Placez 2 Énergies attachées au Pokémon Actif de votre adversaire dans la Zone Perdue.",
			},
			damage: 120,

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
