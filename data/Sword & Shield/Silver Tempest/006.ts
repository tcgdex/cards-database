import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Sunflora",
		fr: "Héliatronc",
		es: "Sunflora",
		it: "Sunflora",
		pt: "Sunflora",
		de: "Sonnflora"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Sunkern",
		fr: "Tournegrin",
		es: "Sunkern",
		it: "Sunkern",
		pt: "Sunkern",
		de: "Sonnkern"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bright Beam",
			fr: "Rayon Éclatant",
			es: "Haz Luminoso",
			it: "Splendiraggio",
			pt: "Raio Reluzente",
			de: "Heller Strahl"
		},

		effect: {
			en: "You may discard up to 3 Energy cards from your hand. This attack does 70 more damage for each card you discarded in this way.",
			fr: "Vous pouvez défausser jusqu'à 3 cartes Énergie de votre main. Cette attaque inflige 70 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			es: "Puedes descartar hasta 3 cartas de Energía de tu mano. Este ataque hace 70 puntos de daño más por cada carta que hayas descartado de esta manera.",
			it: "Puoi scartare fino a tre carte Energia dalla tua mano. Questo attacco infligge 70 danni in più per ogni carta che hai scartato in questo modo.",
			pt: "Você pode descartar até 3 cartas de Energia da sua mão. Este ataque causa 70 pontos de dano a mais para cada carta descartada desta forma.",
			de: "Du kannst bis zu 3 Energiekarten aus deiner Hand auf deinen Ablagestapel legen. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 70 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card