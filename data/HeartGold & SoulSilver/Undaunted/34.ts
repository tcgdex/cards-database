import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Raticate",
		fr: "Rattatac",
	},
	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		20,
	],
	hp: 80,
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
				en: "Razor-Sharp Incisors",
				fr: "Incisives aiguisées",
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on the Defending Pokémon.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur le Pokémon Défenseur.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Gnaw Up",
				fr: "Rongetout",
			},
			effect: {
				en: "Discard a Special Energy card attached to the Defending Pokémon.",
				fr: "Défaussez une carte Énergie spéciale attachée au Pokémon Défenseur.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
