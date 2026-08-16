import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Manectric",
		fr: "Elecsprint",
		de: "Voltenso"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [310],

	hp: 70,

	types: [
		"Lightning"
	],

	evolveFrom: {
		en: "Electrike",
		fr: "Dynavolt",
		de: "Frizelbliz"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Attract Current",
				fr: "Courant électrique",
				de: "Stromanziehung"
			},
			effect: {
				en: "Search your deck for a Lightning Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte Énergie  et attachez-la à un de vos Pokémon. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach einer {L}-Energiekarte und lege sie an 1 deiner Pokémon an. Mische dein Deck danach."
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Jolt",
				fr: "Secousse tonnerre",
				de: "Erschütternder Donner"
			},
			effect: {
				en: "Flip a coin. If tails, Manectric does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Elecsprint s'inflige 10 dégâts.",
				de: "Wirf eine Münze. Bei „Zahl“ fügt sich Voltenso selbst 10 Schadenspunkte zu."
			},
			damage: 50,

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
			type: "Metal",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275657,
				tcgplayer: 87153
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275657,
				tcgplayer: 87153
			}
		},
	],

}

export default card
