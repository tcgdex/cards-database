import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [720],
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

	abilities: [{
		type: "Ability",

		name: {
			en: "Two-Faced",
			fr: "Deux Visages",
			es: "Dos Rostros",
			it: "Doppio Viso",
			pt: "Duas Caras",
			de: "Doppelgesichtig"
		},

		effect: {
			en: "As long as this Pokémon is in play, it is Psychic and Darkness type.",
			fr: "Tant que ce Pokémon est en jeu, il est de type Psychic et Darkness.",
			es: "Mientras este Pokémon esté en juego, es de tipo Psychic y Darkness.",
			it: "Fintanto che questo Pokémon è in gioco, è di tipo Psychic e Darkness.",
			pt: "Enquanto este Pokémon estiver em jogo, será um Pokémon de tipo Psychic e Darkness.",
			de: "Solange dieses Pokémon im Spiel ist, ist es vom Typ Psychic und Darkness."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Shadow Impact",
			fr: "Impact Lugubre",
			es: "Impacto Sombra",
			it: "Impatto Ombra",
			pt: "Impacto Sombrio",
			de: "Schatteneinschlag"
		},

		effect: {
			en: "Put 3 damage counters on 1 of your Pokémon.",
			fr: "Placez 3 marqueurs de dégâts sur l'un de vos Pokémon.",
			es: "Pon 3 contadores de daño en 1 de tus Pokémon.",
			it: "Metti tre segnalini danno su uno dei tuoi Pokémon.",
			pt: "Coloque 3 contadores de dano em 1 dos seus Pokémon.",
			de: "Lege 3 Schadensmarken auf 1 deiner Pokémon."
		},

		damage: 170
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 691933
	}
}

export default card