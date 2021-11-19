import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Murkrow",
		fr: "Cornèbre"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		198,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Insomnia",
				fr: "Insomnie"
			},
			effect: {
				en: "Murkrow can’t be Asleep.",
				fr: "Cornèbre ne peut pas être Endormi."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Feint Attack",
				fr: "Feinte"
			},
			effect: {
				en: "Choose 1 of your opponent’s Pokémon. This attack does 20 damage to that Pokémon. This attack’s damage isn’t affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				fr: "Choisissez un des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	retreat: 1
}

export default card
