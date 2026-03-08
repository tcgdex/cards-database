import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Slowking",
		fr: "Roigada",
		de: "Laschoking"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		199,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Item Search",
				fr: "Recherche",
				de: "Item Search"
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Pokémon Tool card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Slowking is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir dans votre deck une carte Outil Pokémon. Montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Roigada est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), you may search your deck for a Pokémon Tool card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Slowking is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Aftermath",
				fr: "Séquelles",
				de: "Afermath"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Pokémon Tool card in your discard pile. You can't add more than 60 damage in this way.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque carte Outil Pokémon dans votre pile de défausse. Vous ne pouvez pas ajouter plus de 60 dégâts de cette façon.",
				de: "Does 20 damage plus 10 more damage for each Pokémon Tool card in your discard pile.You can't add more than 60 damage in this way."
			},
			damage: "20+",

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
		cardmarket: 276660,
		tcgplayer: 89314
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
