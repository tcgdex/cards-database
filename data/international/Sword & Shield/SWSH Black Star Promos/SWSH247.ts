import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [486],
	set: Set,

	name: {
		'fr-fr': "Regigigas",
		'de-de': "Regigigas",
		'es-es': "Regigigas",
		'pt-br': "Regigigas",
		'it-it': "Regigigas",
		'en-us': "Regigigas"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Mise en Forme",
			'de-de': "Hochfahren",
			'es-es': "Caldear",
			'pt-br': "Aquecer os Músculos",
			'it-it': "Preparazione",
			'en-us': "Limber Up"
		},

		effect: {
			'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
			'de-de': "Lege 1 Basis-Energiekarte aus deinem Ablagestapel an dieses Pokémon an.",
			'es-es': "Une 1 carta de Energía Básica de tu pila de descartes a este Pokémon.",
			'pt-br': "Ligue 1 carta de Energia básica da sua pilha de descarte a este Pokémon.",
			'it-it': "Assegna a questo Pokémon una carta Energia base dalla tua pila degli scarti.",
			'en-us': "Attach a basic Energy card from your discard pile to this Pokémon."
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Double Impact",
			'de-de': "Doppelter Einschlag",
			'es-es': "Impacto Doble",
			'pt-br': "Impacto Duplo",
			'it-it': "Doppio Impatto",
			'en-us': "Double Impact"
		},

		effect: {
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 120 dégâts pour chaque côté face.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 120 Schadenspunkte pro Kopf zu.",
			'es-es': "Lanza 2 monedas. Este ataque hace 120 puntos de daño por cada cara.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 120 pontos de dano para cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 120 danni ogni volta che esce testa.",
			'en-us': "Flip 2 coins. This attack does 120 damage for each heads."
		},

		damage: "120×"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "F",

	description: {
		'en-us': "There is an enduring legend that states this Pokémon towed continents with ropes."
	},

	thirdParty: {
		cardmarket: 665990
	}
}

export default card
