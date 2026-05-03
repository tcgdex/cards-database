import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Corsola",
		fr: "Corayon",
		de: "Corasonn"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		222,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cry for Help",
				fr: "Appel au secours",
				de: "Cry for Help"
			},
			effect: {
				en: "Search your deck for a Water or Fighting Pokémon (excluding Pokémon-ex), show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck un Pokémon  ou  (Pokémon-ex exclus), montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
				de: "Search your deck for a  or  Pokémon (excluding Pokémon-ex), show it to your opponent, any put it into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Double Attack",
				fr: "Double attaque",
				de: "Double Attack"
			},
			effect: {
				en: "Choose 2 of your opponent's Benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 2 des Pokémon de Banc de votre adversaire. Cette attaque inflige 10 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Choose 2 of your opponent's Benched Pokémon. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276683,
		tcgplayer: 84440
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["akira-miyazaki"]
		}
	]
}

export default card
