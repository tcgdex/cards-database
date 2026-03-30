import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Yveltal-ex",
	},
	set: Set,
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				fr: "Destructeur d'Âmes",
			},
			effect: {
				fr: "Mettez K.O. chacun des Pokémon de votre adversaire auxquels il reste 50 PV ou moins.",
			},
		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				fr: "Frappe Ténébreuse",
			},
			damage: "210",
			effect: {
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Frappe Ténébreuse.",
			},
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "5ban Graphics",

	thirdParty: {
		cardmarket: 877522
	}
}

export default card
