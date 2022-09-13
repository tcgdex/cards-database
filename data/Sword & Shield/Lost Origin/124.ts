import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Radiant Steelix",
		fr: "Steelix Radieux",
		es: "Steelix Radiante",
		it: "Steelix Lucente",
		pt: "Steelix Radiante",
		de: "Strahlendes Stahlos"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Energy Stream",
			fr: "Courant d'Énergie",
			es: "Torrente de Energía",
			it: "Getto d'Energia",
			pt: "Fluxo de Energia",
			de: "Energiestrom"
		},

		effect: {
			en: "Attach up to 2 Metal Energy cards from your discard pile to this Pokémon.",
			fr: "Attachez jusqu'à 2 cartes Énergie Metal de votre pile de défausse à ce Pokémon.",
			es: "Une hasta 2 cartas de Energía Metal de tu pila de descartes a este Pokémon.",
			it: "Assegna a questo Pokémon fino a due carte Energia Metal dalla tua pila degli scarti.",
			pt: "Ligue até 2 cartas de Energia Metal da sua pilha de descarte a este Pokémon.",
			de: "Lege bis zu 2 Metal-Energiekarten aus deinem Ablagestapel an dieses Pokémon an."
		},

		damage: 20
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			en: "Destructive Finish",
			fr: "Finish Destructeur",
			es: "Remate Destructivo",
			it: "Finale Distruttivo",
			pt: "Destruição Fatal",
			de: "Zerstörerisches Finale"
		},

		effect: {
			en: "Discard cards from the top of your deck until only 1 card remains. This attack does 30 more damage for each Energy card you discarded in this way.",
			fr: "Défaussez des cartes du dessus de votre deck jusqu'à ce qu'il n'en reste qu'une. Cette attaque inflige 30 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
			es: "Descarta cartas de la parte superior de tu baraja hasta que solo quede 1. Este ataque hace 30 puntos de daño más por cada carta de Energía que hayas descartado de esta manera.",
			it: "Scarta delle carte dalla cima del tuo mazzo finché ne resta solo una. Questo attacco infligge 30 danni in più per ogni carta Energia che hai scartato in questo modo.",
			pt: "Descarte cartas de cima do seu baralho até restar apenas 1. Este ataque causa 30 pontos de dano a mais para cada carta de Energia descartada desta forma.",
			de: "Lege so lange Karten von deinem Deck auf deinen Ablagestapel, bis nur 1 Karte übrig ist. Diese Attacke fügt für jede auf diese Weise auf deinen Ablagestapel gelegte Energiekarte 30 Schadenspunkte mehr zu."
		},

		damage: "60+"
	}],

	retreat: 4,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	}
}

export default card