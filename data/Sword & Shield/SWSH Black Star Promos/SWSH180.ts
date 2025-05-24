import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Pyroli VMAX",
		de: "Flamara VMAX",
		es: "Flareon VMAX",
		pt: "Flareon VMAX",
		it: "Flareon VMAX",
		en: "Flareon VMAX"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	evolveFrom: {
		fr: "Pyroli-V",
		de: "Flamara-V",
		es: "Flareon V",
		pt: "Flareon V",
		it: "Flareon-V",
		en: "Flareon V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			fr: "Éclatomax",
			de: "Dyna-Sprengung",
			es: "Maxidetonación",
			pt: "Detonar Max",
			it: "Dynadeflagrazione",
			en: "Max Detonate"
		},

		effect: {
			fr: "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 100 dégâts pour chaque carte Énergie défaussée de cette façon.",
			de: "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Energiekarte 100 Schadenspunkte zu.",
			es: "Descarta las 5 primeras cartas de tu baraja. Este ataque hace 100 puntos de daño por cada carta de Energía que hayas descartado de esta manera.",
			pt: "Descarte as 5 cartas de cima do seu baralho. Este ataque causa 100 pontos de dano para cada carta de Energia descartada desta forma.",
			it: "Scarta le prime cinque carte del tuo mazzo. Questo attacco infligge 100 danni per ogni carta Energia che hai scartato in questo modo.",
			en: "Discard the top 5 cards of your deck. This attack does 100 damage for each Energy card you discarded in this way."
		},

		damage: "100×"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card