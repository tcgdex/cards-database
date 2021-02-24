import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Mismagius",
		fr: "Magirêve",
	},
	illustrator: "Mikiko Takeda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		429,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Misdreavus",
		fr: "Feuforêve",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Avenge",
				fr: "Venger",
			},
			effect: {
				en: "Count the number of your Pokémon that have any damage counters on them. Put that many damage counters on the Defending Pokémon.",
				fr: "Comptabilisez le nombre de vos Pokémon possédant des marqueurs de dégât. Placez autant de marqueurs de dégât sur le Pokémon Défenseur.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psywave",
				fr: "Vague psy",
			},
			effect: {
				en: "Does 30 damage plus 20 more damage for each Energy attached to the Defending Pokémon.",
				fr: "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
