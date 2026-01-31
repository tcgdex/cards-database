import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Pidgeot",
		fr: "Roucarnage",
		de: "Tauboss"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		18,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Pidgeotto",
		fr: "Roucoups"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Quick Search",
				fr: "Recherche rapide",
				de: "Quick Search"
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose any 1 card from your deck and put it into your hand. Shuffle your deck afterward. You can't use more than 1 Quick Search Poké-Power each turn. This power can't be used if Pidgeot is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir 1 carte de votre deck et la placer dans votre main. Ensuite, mélangez votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Recherche rapide par tour. Ce pouvoir ne peut pas être utilisé si Roucarnage est affecté par un État Spécial.",
				de: "Once during your next turn (befor your attack), you may choose any 1 card from your deck and put it into your hand. Shuffle your deck afterward. You can't use more than 1 Qick Search Poke-Power each turn. This power can't be used if Pidgeot is affected by a Special Condition."
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
				en: "Clutch",
				fr: "Serre",
				de: "Clutch"
			},
			effect: {
				en: "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite avant la fin du prochain tour de votre adversaire.",
				de: "The Defending Pokémon can't retreat until the end of your opponent's next turn."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 0,

	thirdParty: {
		cardmarket: 276186,
		tcgplayer: 88031
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			foil: "energy"
		},
		{
			type: "holo",
			stamp: ["takashi-yoneda"]
		},
		{
			type: "holo",
			stamp: ["jeremy-maron"]
		},
		{
			type: "holo",
			stamp: ["hiroki-yano"]
		},
		{
			type: "holo",
			stamp: ["jimmy-ballard"]
		}
	]
}

export default card
