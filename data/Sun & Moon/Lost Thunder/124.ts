import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Forretress",
		fr: "Foretress",
	},
	illustrator: "tetsuya koizumi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		205,
	],
	hp: 110,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Pineco",
		fr: "Pomdepik",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Thorny Eruption",
				fr: "Éruption Épineuse",
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage for each heads to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Lost Blast",
				fr: "Explosion Perdue",
			},
			effect: {
				en: "Put this Pokémon and all cards attached to it in the Lost Zone.",
				fr: "Placez ce Pokémon et toutes les cartes qui lui sont attachées dans la Zone Perdue.",
			},
			damage: 190,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
