import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		fr: "Hoopa V",
		de: "Hoopa V",
		es: "Hoopa V",
		pt: "Hoopa V",
		it: "Hoopa V",
		en: "Hoopa V"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Deux Visages",
			de: "Doppelgesichtig",
			es: "Dos Rostros",
			pt: "Duas Caras",
			it: "Doppio Viso",
			en: "Two-Faced"
		},

		effect: {
			fr: "Tant que ce Pokémon est en jeu, il est de type {P} et {D}.",
			de: "Solange dieses Pokémon im Spiel ist, ist es vom Typ {P} und {D}.",
			es: "Mientras este Pokémon esté en juego, es de tipo {P} y {D}.",
			pt: "Enquanto este Pokémon estiver em jogo, será um Pokémon de tipo {P} e {D}.",
			it: "Fintanto che questo Pokémon è in gioco, è di tipo {P} e {D}.",
			en: "As long as this Pokémon is in play, it is {P} and {D} type."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			fr: "Impact Lugubre",
			de: "Schatteneinschlag",
			es: "Impacto Sombra",
			pt: "Impacto Sombrio",
			it: "Impatto Ombra",
			en: "Shadow Impact"
		},

		effect: {
			fr: "Placez 3 marqueurs de dégâts sur l'un de vos Pokémon.",
			de: "Lege 3 Schadensmarken auf 1 deiner Pokémon.",
			es: "Pon 3 contadores de daño en 1 de tus Pokémon.",
			pt: "Coloque 3 contadores de dano em 1 dos seus Pokémon.",
			it: "Metti tre segnalini danno su uno dei tuoi Pokémon.",
			en: "Put 3 damage counters on 1 of your Pokémon."
		},

		damage: 170
	}],

	retreat: 2,
	regulationMark: "E",

	thirdParty: {
		cardmarket: 583203
	}
}

export default card