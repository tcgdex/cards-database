import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Moomoo Milk",
		'fr-fr': "Lait Meumeu",
		'de-de': "Kuhmuh-Milch"
	},

	illustrator: "Noriko Hotta",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Choisissez l’un de vos Pokémon. Lancez 2 pièces. Pour chaque face, retirez 3 marqueurs de dégâts de ce Pokémon.",
		'en-us': "Choose 1 of your Pokémon. Flip 2 coins. For each heads, remove 3 damage counters from that Pokémon.",
		'de-de': "Wähle 1 deiner Pokémon. Wirf 2 Münzen. Entferne pro \"Kopf\" 3 Schadensmarken vom gewählten Pokémon."
	},

	trainerType: "Item",

	hp: 0,

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87576,
				cardmarket: 279066
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87576,
				cardmarket: 279066
			}
		},
	],

}

export default card
