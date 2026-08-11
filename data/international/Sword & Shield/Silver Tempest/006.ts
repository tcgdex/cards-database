import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [192],
	set: Set,

	name: {
		'en-us': "Sunflora",
		'fr-fr': "Héliatronc",
		'es-es': "Sunflora",
		'it-it': "Sunflora",
		'pt-br': "Sunflora",
		'de-de': "Sonnflora"
	},

	illustrator: "zig",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Sunkern",
		'fr-fr': "Tournegrin",
		'es-es': "Sunkern",
		'it-it': "Sunkern",
		'pt-br': "Sunkern",
		'de-de': "Sonnkern"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Bright Beam",
			'fr-fr': "Rayon Éclatant",
			'es-es': "Haz Luminoso",
			'it-it': "Splendiraggio",
			'pt-br': "Raio Reluzente",
			'de-de': "Heller Strahl"
		},

		effect: {
			'en-us': "You may discard up to 3 Energy cards from your hand. This attack does 70 more damage for each card you discarded in this way.",
			'fr-fr': "Vous pouvez défausser jusqu'à 3 cartes Énergie de votre main. Cette attaque inflige 70 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			'es-es': "Puedes descartar hasta 3 cartas de Energía de tu mano. Este ataque hace 70 puntos de daño más por cada carta que hayas descartado de esta manera.",
			'it-it': "Puoi scartare fino a tre carte Energia dalla tua mano. Questo attacco infligge 70 danni in più per ogni carta che hai scartato in questo modo.",
			'pt-br': "Você pode descartar até 3 cartas de Energia da sua mão. Este ataque causa 70 pontos de dano a mais para cada carta descartada desta forma.",
			'de-de': "Du kannst bis zu 3 Energiekarten aus deiner Hand auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 70 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It gets energy from warm sunlight and is known for its habit of moving in pursuit of it.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682045,
				tcgplayer: 451626
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682045,
				tcgplayer: 451626
			}
		},
	],
}

export default card
