import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Absol G",
		fr: "Absol ",
	},
	illustrator: "Yusuke Ishikawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		359,
	],
	hp: 70,
	types: [
		"Darkness",
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Feint Attack",
				fr: "Feinte",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 20 damage to that Pokémon. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on that Pokémon.",
				fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 20 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur ce Pokémon.",
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Doom News",
				fr: "Nouvelles sinistres",
			},
			effect: {
				en: "Return all Energy cards attached to Absol G to your hand. The Defending Pokémon is Knocked Out at the end of your opponent's next turn.",
				fr: "Reprenez dans votre main toutes les cartes attachées à Absol . Le Pokémon Défenseur est mis K.O. à la fin du prochain tour de votre adversaire.",
			},

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
