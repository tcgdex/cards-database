import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Manectric",
		'fr-fr': "Élecsprint",
		'de-de': "Voltenso"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [310],

	hp: 90,

	types: [
		"Lightning"
	],

	evolveFrom: {
		'en-us': "Electrike",
		'fr-fr': "Dynavolt"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Electric Barrier",
				'fr-fr': "Barrière électrique",
				'de-de': "Electric Barrier"
			},
			effect: {
				'en-us': "Prevent all damage done to your Benched Pokémon (excluding any Manectric) by attacks.",
				'fr-fr': "Prévenez tous les dégâts infligés par des attaques à vos Pokémon de Banc (Elecsprint exclus).",
				'de-de': "Prevent all damage done to your Benched Pokémon (excluding any Manectric) by attacks."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Power Wave",
				'fr-fr': "Vague puissante",
				'de-de': "Power Wave"
			},
			effect: {
				'en-us': "This attack does 30 damage to each Pokémon that has any Poké-Powers (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à chaque Pokémon possédant des Poké-Powers (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "This attack does 30 damage to each Pokémon that has any Poké-Powers (both yours and your opponent's). (Don't aply Weakness and Resistance for Benched Pokémon.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Attract Current",
				'fr-fr': "Courant électrique",
				'de-de': "Attract Current"
			},
			effect: {
				'en-us': "Search your deck for a Lightning Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Énergie Lightning et attachez-la à 1 de vos Pokémon. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a  Energy card and attach it to your Pokémon. Shuffe your deck afterward."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	variants: [
		{
			type:"holo",
			thirdParty: {
				tcgplayer: 87162,
				cardmarket: 278432
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278432,
				tcgplayer: 87162
			}
		}
	],

	retreat: 0
}

export default card
