import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [383],
	set: Set,

	name: {
		en: "Groudon",
		fr: "Groudon",
		es: "Groudon",
		it: "Groudon",
		pt: "Groudon",
		de: "Groudon"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Swelling Power",
			fr: "Puissance Grandissante",
			es: "Poder Desbordante",
			it: "Potere Amplificato",
			pt: "Poder Crescente",
			de: "Anschwellende Kraft"
		},

		effect: {
			en: "Attach a Basic {F} Energy card from your hand to 1 of your Pokémon.",
			fr: "Attachez une carte Énergie {F} de base de votre main à l'un de vos Pokémon.",
			es: "Une 1 carta de Energía {F} Básica de tu mano a uno de tus Pokémon.",
			it: "Assegna a uno dei tuoi Pokémon una carta Energia base {F} dalla tua mano.",
			pt: "Ligue uma carta de Energia {F} Básica da sua mão a 1 dos seus Pokémon.",
			de: "Lege 1 Basis-{F}-Energiekarte aus deiner Hand an 1 deiner Pokémon an."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Magma Purge",
			fr: "Nettoyage Magma",
			es: "Purga Magma",
			it: "Magmarimozione",
			pt: "Expurgação Magmática",
			de: "Magma-Auswurf"
		},

		effect: {
			en: "Discard up to 4 Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way.",
			fr: "Défaussez jusqu'à 4 Énergies de vos Pokémon. Cette attaque inflige 60 dégâts pour chaque carte défaussée de cette façon.",
			es: "Descarta hasta 4 Energías de tus Pokémon. Este ataque hace 60 puntos de daño por cada carta que hayas descartado de esta manera.",
			it: "Scarta fino a quattro Energie dai tuoi Pokémon. Questo attacco infligge 60 danni per ogni carta che hai scartato in questo modo.",
			pt: "Descarte até 4 Energias dos seus Pokémon. Este ataque causa 60 pontos de dano para cada carta descartada desta forma.",
			de: "Lege bis zu 4 Energien von deinen Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 60 Schadenspunkte zu."
		},

		damage: "60×"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "Uta"
}

export default card