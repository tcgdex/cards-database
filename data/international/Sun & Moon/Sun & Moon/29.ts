import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Golduck",
		'fr-fr': "Akwakwak",
		'es-es': "Golduck",
		'it-it': "Golduck",
		'pt-br': "Golduck",
		'de-de': "Entoron"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		55,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Double Jet",
				'fr-fr': "Jets Doubles",
				'es-es': "Doble Turbo",
				'it-it': "Getto Doppio",
				'pt-br': "Jato Duplo",
				'de-de': "Doppeldüse"
			},
			effect: {
				'en-us': "Discard up to 2 Water Energy cards from your hand. This attack does 60 damage for each card you discarded in this way.",
				'fr-fr': "Défaussez jusqu’à 2 cartes Énergie Water de votre main. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
				'es-es': "Descarta hasta 2 cartas de Energía Water de tu mano. Este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
				'it-it': "Scarta fino a due Energie Water dalla tua mano. Questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
				'pt-br': "Descarte até 2 cartas de Energia Water da sua mão. Este ataque causa 60 pontos de dano para cada carta descartada desta forma.",
				'de-de': "Lege bis zu 2 Water-Energiekarten aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt 60 Schadenspunkte mal der Anzahl der auf diese Weise auf deinen Ablagestapel gelegten Karten zu."
			},
			damage: "60×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It is said that the red part of its forehead grants supernatural powers to those who posses one, so it was over-hunted in the past.",
	},

	thirdParty: {
		cardmarket: 295339,
		tcgplayer: 126900
	}
}

export default card
