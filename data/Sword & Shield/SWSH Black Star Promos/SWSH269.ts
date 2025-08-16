import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [192],
	set: Set,

	name: {
		fr: "Héliatronc",
		de: "Sonnflora",
		es: "Sunflora",
		pt: "Sunflora",
		it: "Sunflora",
		en: "Sunflora"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		fr: "Tournegrin",
		de: "Sonnkern",
		es: "Sunkern",
		pt: "Sunkern",
		it: "Sunkern",
		en: "Sunkern"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Rayon Éclatant",
			de: "Heller Strahl",
			es: "Haz Luminoso",
			pt: "Raio Reluzente",
			it: "Splendiraggio",
			en: "Bright Beam"
		},

		effect: {
			fr: "Vous pouvez défausser jusqu'à 3 cartes Énergie de votre main. Cette attaque inflige 70 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			de: "Du kannst bis zu 3 Energiekarten aus deiner Hand auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 70 Schadenspunkte mehr zu.",
			es: "Puedes descartar hasta 3 cartas de Energía de tu mano. Este ataque hace 70 puntos de daño más por cada carta que hayas descartado de esta manera.",
			pt: "Você pode descartar até 3 cartas de Energia da sua mão. Este ataque causa 70 pontos de dano a mais para cada carta descartada desta forma.",
			it: "Puoi scartare fino a tre carte Energia dalla tua mano. Questo attacco infligge 70 danni in più per ogni carta che hai scartato in questo modo.",
			en: "You may discard up to 3 Energy cards from your hand. This attack does 70 more damage for each card you discarded in this way."
		},

		damage: "10+"
	}],

	retreat: 2,
	regulationMark: "F",

	description: {
		en: "It gets energy from warm sunlight and is known for its habit of moving in pursuit of it."
	}
}

export default card