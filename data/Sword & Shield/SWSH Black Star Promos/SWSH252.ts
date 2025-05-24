import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Simiabraz V",
		de: "Panferno V",
		es: "Infernape V",
		pt: "Infernape V",
		it: "Infernape V",
		en: "Infernape V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 200,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Poing-Météore",
			de: "Meteorhieb",
			es: "Puñetazo Meteoro",
			pt: "Soco Meteoro",
			it: "Meteorbotta",
			en: "Meteor Punch"
		},

		effect: {
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts pour chaque côté face.",
			de: "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño por cada cara.",
			pt: "Jogue 1 moeda até sair coroa. Este ataque causa 30 pontos de dano para cada cara.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni ogni volta che esce testa.",
			en: "Flip a coin until you get tails. This attack does 30 damage for each heads."
		},

		damage: "30×"
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			fr: "Flamme Éclatante",
			de: "Helle Flamme",
			es: "Llama Viva",
			pt: "Chama Reluzente",
			it: "Splendifiamma",
			en: "Bright Flame"
		},

		effect: {
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel.",
			es: "Descarta 2 Energías de este Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			en: "Discard 2 Energy from this Pokémon."
		},

		damage: 200
	}],

	retreat: 0,
	regulationMark: "F"
}

export default card