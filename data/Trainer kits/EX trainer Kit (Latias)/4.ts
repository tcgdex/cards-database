import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [380],
	set: Set,

	name: {
		en: "Latias",
		fr: "Latias",
		de: "Latias"
	},

	illustrator: "Nakaoka",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",
	hp: 70,

	types: [
		"Colorless"
	],

	attacks: [{
		cost: [
			"Fire",
		],
		name: {
			en: "Dragon Dew",
			fr: "Goutte de dragon",
			de: "Drachentau"
		},
		effect: {
			en: "Remove 1 damage counter from 1 of your Pokémon.",
			fr: "Retirez 1 marqueur de dégât à 1 de vos Pokémon.",
			de: "Entferne 1 Schadensmarke von einem deiner Pokémon."
		},
		damage: 10
	}, {
		cost: [
			"Fire",
			"Fire",
			"Colorless"
		],
		name: {
			en: "Heat Blast",
			fr: "Explosion de chaleur",
			de: "Hitzestoß"
		},
		damage: 40
	}],

	weaknesses: [
		{
			type: "Psychic",
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275772,
				tcgplayer: 86650
			}
		},
	],

}

export default card
