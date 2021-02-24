import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Ludicolo",
		fr: "Ludicolo",
	},
	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		272,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Lombre",
		fr: "Lombre",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Rain Dish",
				fr: "Cuvette",
			},
			effect: {
				en: "At any time between turns, heal 20 damage from this Pokémon.",
				fr: "N'importe quand entre chaque tour, soignez 20 dégâts à ce Pokémon.",
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
				en: "Groovy Dance",
				fr: "Danse Enivrée",
			},
			effect: {
				en: "You may discard an Energy attached to this Pokémon. If you do, the Defending Pokémon is now Confused.",
				fr: "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
