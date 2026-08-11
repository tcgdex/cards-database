import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Blissey",
		'fr-fr': "Leuphorie",
		'de-de': "Heiteira"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [242],

	hp: 120,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Nurse Call",
				'fr-fr': "Appel à l'infirmière",
				'de-de': "Nurse Call"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard a card from your hand. If you do, remove 2 damage counters from 1 of your Pokémon. You can't use more than 1 Nurse Call Poké-Power each turn. This power can't be used if Blissey is affected by a Special Condition.",
				'fr-fr': "Une seule fois lors de votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Retirez alors à 1 de vos Pokémon 2 marqueurs de dégât. Vous ne pouvez pas utiliser plus d'1 Poké-Power Appel à l'infirmière par tour. Ce pouvoir ne peut pas être utilisé si Leuphorie est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), you may discard a card from your hand. If you do, remove 2 damage counters from 1 of your Pokémon. You can't use more than 1 Nurse Call Poké-Power each turn. This power can't be used if Blissey is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Return",
				'fr-fr': "Retour",
				'de-de': "Return"
			},
			effect: {
				'en-us': "Draw cards until you have 6 cards in your hand.",
				'fr-fr': "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
				'de-de': "Draw cards until you have 6 cards in your hand."
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
				'en-us': "Double-edge",
				'fr-fr': "Damoclès",
				'de-de': "Double-edge"
			},
			effect: {
				'en-us': "Blissey does 60 damage to itself.",
				'fr-fr': "Leuphorie s'inflige 60 dégâts.",
				'de-de': "Blissey does 60 damage to itself."
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

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 83922,
				cardmarket: 278443
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278443,
				tcgplayer: 83922
			}
		}
	],

}

export default card
