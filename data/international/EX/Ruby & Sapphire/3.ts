import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Blaziken",
		'fr-fr': "Brasegali",
		'de-de': "Lohgock"
	},

	illustrator: "Kouki Saitou",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [257],

	hp: 100,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Combusken",
		'fr-fr': "Galifeu"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Firestarter",
				'fr-fr': "Pyroteknik",
				'de-de': "Firestarter"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon. This power can't be used if Blaziken is affected by a Special Condition.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une Carte Énergie  de votre pile de défausse à un des Pokémon de votre Banc. Ce pouvoir ne peut être utilisé si Brasegali est affecté par un État Spécial.",
				'de-de': "Once during your turn (before your attack), you may attach a  Energy card from your discard pile to 1 of your Benched Pokémon. This power can't be used if Blaziken is affected by a Special Condition."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fire Stream",
				'fr-fr': "Courant de feu",
				'de-de': "Fire Stream"
			},
			effect: {
				'en-us': "Discard a Fire Energy card attached to Blaziken. If you do, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Vous pouvez défausser une Carte Énergie  attachée à Brasegali. Cette attaque inflige alors 10 dégâts à chacun des Pokémon du Banc de votre adversaire. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				'de-de': "Discard a  Energy card attached to Blaziken. If you do, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [		{
			type: "holo",
			thirdParty: {
				cardmarket: 275651,
				tcgplayer: 83903
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275651,
				tcgplayer: 83903
			}
		},
		{
			type: "holo",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125113
			}
		},
		{
			type: "reverse",
			subtype: "no-e-reader",
			thirdParty: {
				cardmarket: 275651,
			},

		},
		{
			type: "holo",
			stamp: ["chris-fulop"],
			thirdParty: {
				tcgplayer: 477367
			}
		}
	],

}

export default card
