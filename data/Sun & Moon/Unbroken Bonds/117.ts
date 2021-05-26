import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Greninja",
		fr: "Amphinobi",
	},
	illustrator: "Yusuke Ohmura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		658,
	],
	hp: 130,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Frogadier",
		fr: "Croâporal",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bring Down",
				fr: "Réduire à Rien",
			},
			effect: {
				en: "The Pokémon that has the least HP remaining, except for this Pokémon, is Knocked Out. (If multiple Pokémon are tied, choose one.)",
				fr: "Le Pokémon qui a le moins de PV restants, à l’exception de ce Pokémon, est mis K.O. (Si plusieurs Pokémon sont à égalité, choisissez-en un.)",
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Mist Slash",
				fr: "Tranche-Brume",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on your opponent's Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],




}

export default card
