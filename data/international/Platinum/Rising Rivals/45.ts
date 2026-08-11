import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Leafeon",
		'fr-fr': "Phyllali Niv. 49",
		'de-de': "Folipurba"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [470],

	hp: 90,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Eevee",
		'fr-fr': "Evoli"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Energy Refresh",
				'fr-fr': "Regain d'énergie",
				'de-de': "Energie-Heilung"
			},
			effect: {
				'en-us': "As long as Leafeon is your Active Pokémon, whenever you attach an Energy card from your hand to 1 of your Pokémon, remove 2 damage counters from that Pokémon.",
				'fr-fr': "Tant que Phyllali est votre Pokémon Actif, lorsque vous attachez une carte Énergie de votre main à 1 de vos Pokémon, retirez à ce Pokémon 2 marqueurs de dégât.",
				'de-de': "Solange Folipurba dein Aktives Pokémon ist, entferne jedes Mal, wenn du 1 Energiekarte von deiner Hand an 1 deiner Pokémon anlegst, 2 Schadensmarken von diesem Pokémon."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Plus Energy",
				'fr-fr': "Énergie plus",
				'de-de': "Bonusenergie"
			},
			effect: {
				'en-us': "Attach a basic Energy card from your hand to 1 of your Pokémon.",
				'fr-fr': "Attachez une carte Énergie de base de votre main à 1 de vos Pokémon.",
				'de-de': "Lege 1 Basis-Energiekarte von deiner Hand an 1 deiner Pokémon an."
			},
			damage: 40,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Soothing Scent",
				'fr-fr': "Senteur apaisante",
				'de-de': "Beruhigender Duft"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278619,
				tcgplayer: 86679
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278619,
				tcgplayer: 86679
			}
		},
	],

}

export default card
