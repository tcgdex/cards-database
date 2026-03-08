import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Blissey",
		fr: "Leuphorie",
		de: "Heiteira"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		242,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Chansey",
		fr: "Leveinard",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Nurse Call",
				fr: "Appel à l'infirmière",
				de: "Nurse Call"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a card from your hand. If you do, remove 2 damage counters from 1 of your Pokémon. You can't use more than 1 Nurse Call Poké-Power each turn. This power can't be used if Blissey is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Retirez alors à 1 de vos Pokémon 2 marqueurs de dégât. Vous ne pouvez pas utiliser plus d'1 Poké-Power Appel à l'infirmière par tour. Ce pouvoir ne peut pas être utilisé si Leuphorie est affecté par un État Spécial.",
				de: "Once during your turn (before your attack), you may discard a card from your hand. If you do, remove 2 damage counters from 1 of your Pokémon. You can't use more than 1 Nurse Call Poké-Power each turn. This power can't be used if Blissey is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Return",
				fr: "Retour",
				de: "Return"
			},
			effect: {
				en: "Draw cards until you have 6 cards in your hand.",
				fr: "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
				de: "Draw cards until you have 6 cards in your hand."
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				fr: "Damoclès",
				de: "Double-edge"
			},
			effect: {
				en: "Blissey does 60 damage to itself.",
				fr: "Leuphorie s'inflige 60 dégâts.",
				de: "Blissey does 60 damage to itself."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278443,
		tcgplayer: 83922
	},

	variants:[
		{
			type:"normal"
		},
		{
			type:"reverse"
		}
	]
}

export default card
