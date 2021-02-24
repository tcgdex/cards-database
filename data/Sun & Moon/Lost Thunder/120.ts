import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Noctali",
	},
	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		197,
	],
	hp: 110,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Retaliate",
				fr: "Vengeance",
			},
			effect: {
				en: "If any of your Pokémon were Knocked Out by damage from an opponent's attack during their last turn, this attack does 90 more damage.",
				fr: "Si l’un de vos Pokémon a été mis K.O. par les dégâts d’une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Cutter",
				fr: "Tranch’Obscur",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
