import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Hoopa V",
		fr: "Hoopa V",
		es: "Hoopa V",
		it: "Hoopa V",
		pt: "Hoopa V",
		de: "Hoopa V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",
	retreat: 2,
	regulationMark: "E",
	illustrator: "takuyoa",

	abilities: [{
		type: "Ability",

		name: {
			en: "Two-Faced",
			fr: "Deux Visages",
			de: "Doppelgesichtig",
			es: "Dos Rostros",
			pt: "Duas Caras",
			it: "Doppio Viso"
		},

		effect: {
			en: "As long as this Pokémon is in play, it is {P} and {D} type.",
			fr: "Tant que ce Pokémon est en jeu, il est de type {P} et {D}.",
			de: "Solange dieses Pokémon im Spiel ist, ist es vom Typ {P} und {D}.",
			es: "Mientras este Pokémon esté en juego, es de tipo {P} y {D}.",
			pt: "Enquanto este Pokémon estiver em jogo, será um Pokémon de tipo {P} e {D}.",
			it: "Fintanto che questo Pokémon è in gioco, è di tipo {P} e {D}."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Shadow Impact",
			fr: "Impact Lugubre",
			de: "Schatteneinschlag",
			es: "Impacto Sombra",
			pt: "Impacto Sombrio",
			it: "Impatto Ombra"
		},

		damage: 170,

		effect: {
			en: "Put 3 damage counters on 1 of your Pokémon.",
			fr: "Placez 3 marqueurs de dégâts sur l'un de vos Pokémon.",
			de: "Lege 3 Schadensmarken auf 1 deiner Pokémon.",
			es: "Pon 3 contadores de daño en 1 de tus Pokémon.",
			pt: "Coloque 3 contadores de dano em 1 dos seus Pokémon.",
			it: "Metti tre segnalini danno su uno dei tuoi Pokémon."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582989
	}
}

export default card