import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Palkia G",
		fr: "Palkia G",
		de: "Palkia G"
	},

	illustrator: "Yusuke Ishikawa",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [484],

	hp: 100,

	types: [
		"Water"
	],

	stage: "Basic",
	suffix: "SP",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Splashing Turn",
				fr: "Tour éclaboussant",
				de: "Platschende Drehung"
			},
			effect: {
				en: "You may switch Palkia G with 1 of your Benched Pokémon.",
				fr: "Vous pouvez échanger Palkia  avec 1 de vos Pokémon de Banc.",
				de: "Du kannst Palkia G gegen 1 Pokémon auf deiner Bank austauschen."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pearl Breath",
				fr: "Haleine de perle",
				de: "Perlhauch"
			},
			effect: {
				en: "Does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 87917,
				cardmarket: 278433
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278433,
				tcgplayer: 87917
			}
		}
	],

}

export default card
