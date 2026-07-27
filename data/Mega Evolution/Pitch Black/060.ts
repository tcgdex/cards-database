import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Skarmory",
		fr: "Airmure",
		es: "Skarmory",
		'es-mx': "Skarmory",
		de: "Panzaeron",
		it: "Skarmory",
		pt: "Skarmory"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	dexId: [227],
	hp: 120,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Steel Cutter",
			fr: "Lame d'Acier",
			es: "Corte de Acero",
			'es-mx': "Corte de Acero",
			de: "Stahlschneider",
			it: "Acciaio Tagliente",
			pt: "Cortador de Aço"
		},

		cost: ["Metal"],

		damage: "40×",

		effect: {
			en: "Discard up to 2 Basic {M} Energy cards from your hand, and this attack does 40 damage for each card you discarded in this way.",
			fr: "Défaussez jusqu'à 2 cartes Énergie {M} de base de votre main. Cette attaque inflige 40 dégâts pour chaque carte défaussée de cette façon.",
			es: "Descarta hasta 2 cartas de Energía {M} Básica de tu mano, y este ataque hace 40 puntos de daño por cada carta que hayas descartado de esta manera.",
			'es-mx': "Descarta hasta 2 cartas de Energía {M} Básica de tu mano, y este ataque hace 40 puntos de daño por cada carta que descartaste de esta manera.",
			de: "Lege bis zu 2 Basis-{M}-Energiekarten aus deiner Hand auf deinen Ablagestapel, und diese Attacke fügt für jede auf diese Weise abgelegte Karte 40 Schadenspunkte zu.",
			it: "Scarta fino a due carte Energia base {M} dalla tua mano e questo attacco infligge 40 danni per ogni carta che hai scartato in questo modo.",
			pt: "Descarte até 2 cartas de Energia {M} Básica da sua mão, e este ataque causa 40 pontos de dano para cada carta descartada desta forma."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895845,
				tcgplayer: 704817
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895845,
				tcgplayer: 704817
			}
		},
	],
}

export default card
