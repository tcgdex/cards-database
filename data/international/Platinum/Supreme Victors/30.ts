import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Lickilicky C",
		'fr-fr': "Coudlangue ",
		'de-de': "Schlurplek C"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [463],
	hp: 90,
	types: [
		"Colorless"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Licking-Licking Heal",
				'fr-fr': "Coudlangue guérisseur",
				'de-de': "Schleck-Schleck-Heiler"
			},
			effect: {
				'en-us': "Attach a Basic Energy card from your hand to 1 of your Pokémon. Then, remove 2 damage counters from that Pokémon.",
				'fr-fr': "Attachez une carte Énergie de base de votre main à 1 de vos Pokémon. Ensuite, retirez à ce Pokémon 2 marqueurs de dégât.",
				'de-de': "Lege 1 Basis-Energiekarte von deiner Hand an 1 deiner Pokémon an. Danach entferne 2 Schadensmarken von diesem Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Return",
				'fr-fr': "Retour",
				'de-de': "Rückkehr"
			},
			effect: {
				'en-us': "Draw cards until you have 6 cards in your hand.",
				'fr-fr': "Piochez des cartes jusqu'à ce que vous ayez 6 cartes en main.",
				'de-de': "Ziehe so viele Karten, bis du 6 Karten auf der Hand hast."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278721,
				tcgplayer: 86715
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278721,
				tcgplayer: 86715
			}
		},
	],

}

export default card
