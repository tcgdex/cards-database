import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Muk",
		'fr-fr': "Grotadmorv",
		'de-de': "Sleimok"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [89],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Heavyweight",
				'fr-fr': "Poids-lourd",
				'de-de': "Schwergewicht"
			},
			effect: {
				'en-us': "As long as there is a Grass Energy attached to Muk, you must pay an additional ColorlessColorless to retreat it.",
				'fr-fr': "Tant qu'il y a une Énergie  attachée à Grotadmorv, vous devez payer  supplémentaire pour le faire battre en retraite.",
				'de-de': "Solange mindestens eine -Energie an Sleimok angelegt ist, musst du zusätzlich   bezahlen, um es zurückzuziehen."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Burning Sludge",
				'fr-fr': "Gadoue brûlante",
				'de-de': "Brennender Schlamm"
			},

			effect: {
				'en-us': "Flip a number of coins equal to the amount of Grass Energy attached to Muk. If any of them are heads, the Defending Pokémon is now Poisoned and Burned.",
				'fr-fr': "Lancez un nombre de pièces équivalent au nombre d'Énergie  attachées à Grotadmorv. Si vous obtenez au moins une face, le Pokémon Défenseur est maintenant Empoisonné et Brûlé.",
				'de-de': "Wirf so viele Münzen, wie -Energie an Sleimok angelegt ist. Falls mindestens eine von ihnen \"Kopf\" zeigt, ist das Verteidigende Pokémon jetzt vergiftet und verbrannt."
			},

			damage: 10
		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 87620,
				cardmarket: 275048
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87620,
				cardmarket: 275048
			}
		},
	]
}

export default card
