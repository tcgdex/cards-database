import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Lugia",
		'fr-fr': "Lugia",
		'de-de': "Lugia"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [249],

	hp: 80,

	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Crystal Type",
				'fr-fr': "Type de cristal",
				'de-de': "Kristall-Typ"
			},
			effect: {
				'en-us': "Whenever you attach a Fire, Water, or Psychic basic Energy card from your hand to Lugia, Lugia's type (color) becomes the same as that Energy card type until the end of the turn.",
				'fr-fr': "À chaque fois que vous attachez une carte Énergie de base , ou  de votre main à Lugia, le type de Lugia (sa couleur) devient identique au type de carte Énergie jusqu'à la fin du tour.",
				'de-de': "Immer wenn du eine -, - oder -Energiekarte aus deiner Hand an Lugia anlegst, wird Lugias Typ (Farbe) bis zum Ende des Zuges derselbe Typ wie diese Energiekarte."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Fire",
			],
			name: {
				'en-us': "Psychic",
				'fr-fr': "Psyko",
				'de-de': "Psycho"
			},
			effect: {
				'en-us': "This attack does 10 damage times the number of Energy cards attached to the Defending Pokémon.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de cartes Énergie attachées au Pokémon Défenseur.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl an Energiekarten, die an das Verteidigende Pokémon angelegt sind, zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Water",
				"Water",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Steam Blast",
				'fr-fr': "Coud' vapeur",
				'de-de': "Dampfstrahl"
			},
			effect: {
				'en-us': "Discard an Energy card attached to Lugia.",
				'fr-fr': "Défaussez-vous d'une carte Énergie attachée à Lugia.",
				'de-de': "Lege 1 an Lugia angelegte Energiekarte auf deinen Ablagestapel."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 3,


	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 86905,
				cardmarket: 275225
			}
		},
	]
}

export default card
