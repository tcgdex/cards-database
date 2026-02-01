import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "N's Reshiram",
		fr: "Reshiram de N",
		es: "Reshiram de N",
		'es-mx': "Reshiram de N",
		de: "Ns Reshiram",
		it: "Reshiram di N",
		pt: "Reshiram do N"
	},

	illustrator: "rika",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Dragon"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Lightning"],

		name: {
			en: "Powerful Rage",
			fr: "Rage Massive",
			es: "Ira Recia",
			'es-mx': "Furia Dominante",
			de: "Mächtige Wut",
			it: "Forzafuria",
			pt: "Ira Poderosa"
		},

		effect: {
			en: "This attack does 20 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
			es: "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada contador de daño en este Pokémon.",
			de: "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 20 Schadenspunkte zu.",
			it: "Questo attacco infligge 20 danni per ogni segnalino danno presente su questo Pokémon.",
			pt: "Este ataque causa 20 pontos de dano para cada contador de dano neste Pokémon."
		},

		damage: "20×"
	}, {
		cost: ["Fire", "Fire", "Lightning", "Colorless"],

		name: {
			en: "Virtuous Flame",
			fr: "Flamme Vertueuse",
			es: "Llama Virtuosa",
			'es-mx': "Llama Virtuosa",
			de: "Rechtschaffene Flamme",
			it: "Fiamma Virtuosa",
			pt: "Chama Inocente"
		},

		damage: 170
	}],

	retreat: 2,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675966,
		cardmarket: 869765
	}
}

export default card