import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [192],
	set: Set,

	name: {
		'fr-fr': "Héliatronc",
		'de-de': "Sonnflora",
		'es-es': "Sunflora",
		'pt-br': "Sunflora",
		'it-it': "Sunflora",
		'en-us': "Sunflora"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'fr-fr': "Tournegrin",
		'de-de': "Sonnkern",
		'es-es': "Sunkern",
		'pt-br': "Sunkern",
		'it-it': "Sunkern",
		'en-us': "Sunkern"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Rayon Éclatant",
			'de-de': "Heller Strahl",
			'es-es': "Haz Luminoso",
			'pt-br': "Raio Reluzente",
			'it-it': "Splendiraggio",
			'en-us': "Bright Beam"
		},

		effect: {
			'fr-fr': "Vous pouvez défausser jusqu'à 3 cartes Énergie de votre main. Cette attaque inflige 70 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			'de-de': "Du kannst bis zu 3 Energiekarten aus deiner Hand auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 70 Schadenspunkte mehr zu.",
			'es-es': "Puedes descartar hasta 3 cartas de Energía de tu mano. Este ataque hace 70 puntos de daño más por cada carta que hayas descartado de esta manera.",
			'pt-br': "Você pode descartar até 3 cartas de Energia da sua mão. Este ataque causa 70 pontos de dano a mais para cada carta descartada desta forma.",
			'it-it': "Puoi scartare fino a tre carte Energia dalla tua mano. Questo attacco infligge 70 danni in più per ogni carta che hai scartato in questo modo.",
			'en-us': "You may discard up to 3 Energy cards from your hand. This attack does 70 more damage for each card you discarded in this way."
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
		'en-us': "It gets energy from warm sunlight and is known for its habit of moving in pursuit of it."
	},

	thirdParty: {
		cardmarket: 681798
	}
}

export default card
