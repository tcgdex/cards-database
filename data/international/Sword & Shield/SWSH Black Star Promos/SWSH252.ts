import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [392],
	set: Set,

	name: {
		'fr-fr': "Simiabraz V",
		'de-de': "Panferno V",
		'es-es': "Infernape V",
		'pt-br': "Infernape V",
		'it-it': "Infernape V",
		'en-us': "Infernape V"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 200,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Poing-Météore",
			'de-de': "Meteorhieb",
			'es-es': "Puñetazo Meteoro",
			'pt-br': "Soco Meteoro",
			'it-it': "Meteorbotta",
			'en-us': "Meteor Punch"
		},

		effect: {
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño por cada cara.",
			'pt-br': "Jogue 1 moeda até sair coroa. Este ataque causa 30 pontos de dano para cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'en-us': "Flip a coin until you get tails. This attack does 30 damage for each heads."
		},

		damage: "30×"
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			'fr-fr': "Flamme Éclatante",
			'de-de': "Helle Flamme",
			'es-es': "Llama Viva",
			'pt-br': "Chama Reluzente",
			'it-it': "Splendifiamma",
			'en-us': "Bright Flame"
		},

		effect: {
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'en-us': "Discard 2 Energy from this Pokémon."
		},

		damage: 200
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 665992
	}
}

export default card
