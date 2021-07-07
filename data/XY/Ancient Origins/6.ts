import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Ariados",
		fr: "Migalos",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		168,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Spinarak",
		fr: "Mimigal",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Poisonous Nest",
				fr: "Nid Empoisonné",
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this Ability. Both Active Pokémon (except for Grass Pokémon) are now Poisoned.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez utiliser ce talent. Les deux Pokémon Actifs (à part les Pokémon Grass) sont maintenant Empoisonnés.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Impound",
				fr: "Confiscation",
			},
			effect: {
				en: "The Defending Pokémon can’t retreat during your opponent’s next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
