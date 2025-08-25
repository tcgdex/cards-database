import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [486],
	set: Set,

	name: {
		fr: "Regigigas",
		de: "Regigigas",
		es: "Regigigas",
		pt: "Regigigas",
		it: "Regigigas",
		en: "Regigigas"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Mise en Forme",
			de: "Hochfahren",
			es: "Caldear",
			pt: "Aquecer os Músculos",
			it: "Preparazione",
			en: "Limber Up"
		},

		effect: {
			fr: "Attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
			de: "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an dieses Pokémon an.",
			es: "Une 1 carta de Energía Básica de tu pila de descartes a este Pokémon.",
			pt: "Ligue 1 carta de Energia básica da sua pilha de descarte a este Pokémon.",
			it: "Assegna a questo Pokémon una carta Energia base dalla tua pila degli scarti.",
			en: "Attach a basic Energy card from your discard pile to this Pokémon."
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Double Impact",
			de: "Doppelter Einschlag",
			es: "Impacto Doble",
			pt: "Impacto Duplo",
			it: "Doppio Impatto",
			en: "Double Impact"
		},

		effect: {
			fr: "Lancez 2 pièces. Cette attaque inflige 120 dégâts pour chaque côté face.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 120 Schadenspunkte pro Kopf zu.",
			es: "Lanza 2 monedas. Este ataque hace 120 puntos de daño por cada cara.",
			pt: "Jogue 2 moedas. Este ataque causa 120 pontos de dano para cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 120 danni ogni volta che esce testa.",
			en: "Flip 2 coins. This attack does 120 damage for each heads."
		},

		damage: "120×"
	}],

	retreat: 4,
	regulationMark: "F",

	description: {
		en: "There is an enduring legend that states this Pokémon towed continents with ropes."
	},

	thirdParty: {
		cardmarket: 665990
	}
}

export default card