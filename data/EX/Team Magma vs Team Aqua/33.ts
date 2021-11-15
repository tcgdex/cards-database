import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Claydol",
		fr: "Kaorine de Team Magma"
	},
	illustrator: "Zu-Ka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		344,
	],
	hp: 80,
	types: [
		"Fighting",
	],

	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Clay Curse",
				fr: "Fléau d'argile"
			},
			effect: {
				en: "Put 2 damage counters on your opponent's Pokémon in any way you like.",
				fr: "Placez 2 marqueurs de dégât sur les Pokémon de votre adversaire de la façon que vous voulez."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Clay Pulse",
				fr: "Coup d'argile"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chaque Pokémon de Banc de votre adversaire qui possède des marqueurs de dégât. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
