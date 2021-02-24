import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Glaceon",
		fr: "Givrali",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		471,
	],
	hp: 100,
	types: [
		"Water",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Chilly Breath",
				fr: "Haleine glacée",
			},
			effect: {
				en: "As long as Glaceon is your Active Pokémon, your opponent's Pokémon can't use any Poké-Powers.",
				fr: "Tant que Givrali est votre Pokémon Actif, les Pokémon de votre adversaire ne peuvent pas utiliser de Poké-Powers.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Avalanche",
				fr: "Avalanche",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "+30"
		},
	],

	retreat: 1,



}

export default card
