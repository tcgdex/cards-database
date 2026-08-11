import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Mightyena",
		fr: "Grahyena de Team Magma",
		de: "Team Magmas Magnayen"
	},

	illustrator: "Shin-ichi Yoshikawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [262],

	hp: 80,

	types: [
		"Darkness"
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Call for Help",
				fr: "Appel à l'aide",
				de: "Hilferuf"
			},
			effect: {
				en: "Once during your turn (before your attack), if Team Magma's Mightyena is your Active Pokémon, you may search your deck for a Pokémon with Team Magma in its name, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Team Magma's Mightyena is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Grahyena de Team Magma est votre Pokémon Actif, vous pouvez chercher dans votre deck un Pokémon dont le nom comporte Team Magma. Montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Grahyena de Team Magma est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff), wenn Team Magmas Magnayen dein Aktives Pokémon ist, kannst du dein Deck nach einem Pokémon mit „Team Magma“ im Namen durchsuchen, es deinem Gegner zeigen und auf die Hand nehmen. Mische dein Deck danach. Diese Poké-Power kann nicht verwendet werden, falls Team Magmas Magnayen von einem Speziellen Zustand betroffen ist."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Lunge",
				fr: "Coup rapide",
				de: "Ausfall"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wirf 1 Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
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
			type: "Psychic",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275814,
				tcgplayer: 89836
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275814,
				tcgplayer: 89836
			}
		},
	],

}

export default card
