import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [514],
	set: Set,

	name: {
		en: "Simisear",
		fr: "Flamoutan",
		es: "Simisear",
		it: "Simisear",
		pt: "Simisear",
		de: "Grillchita"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		en: "Pansear",
		fr: "Flamajou",
		es: "Pansear",
		it: "Pansear",
		pt: "Pansear",
		de: "Grillmak"
	},

	stage: "Stage1",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Tomokazu Komiya",

	description: {
		en: "When it gets excited, embers rise from its head and tail and it gets hot. For some reason, it loves sweets."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Light Punch",
			fr: "Poing Léger",
			de: "Leichter Hieb",
			es: "Puño Ligero",
			pt: "Soco de Luz",
			it: "Pugnetto"
		},

		damage: 20
	}, {
		cost: ["Fire"],

		name: {
			en: "Fling Fire",
			fr: "Dégommage Enflammé",
			de: "Feuerschleuder",
			es: "Lanzamiento Ígneo",
			pt: "Arremessar Fogo",
			it: "Lancio di Fuoco"
		},

		damage: "60×",

		effect: {
			en: "Discard up to 2 basic Energy cards from your hand. This attack does 60 damage for each card you discarded in this way.",
			fr: "Défaussez jusqu'à 2 cartes Énergie de base de votre main. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			de: "Lege bis zu 2 Basis-Energiekarten aus deiner Hand auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte zu.",
			es: "Descarta hasta 2 cartas de Energía Básica de tu mano. Este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
			pt: "Descarte até 2 cartas de Energia básica da sua mão. Este ataque causa 60 pontos de dano para cada carta descartada desta forma.",
			it: "Scarta fino a due carte Energia base dalla tua mano. Questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582172
	}
}

export default card