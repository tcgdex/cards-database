import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Honchkrow",
		fr: "Corboss",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		430,
	],
	hp: 90,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Murkrow",
		fr: "Cornebre",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Shadow Bind",
				fr: "Étreinte d'ombre",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vengeance",
				fr: "Vengeance",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each Darkness Pokémon in your discard pile.",
				fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chacun des Pokémon Darkness de votre pile de défausse.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
