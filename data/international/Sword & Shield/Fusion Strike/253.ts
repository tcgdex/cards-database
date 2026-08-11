import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [720],
	set: Set,

	name: {
		'en-us': "Hoopa V",
		'fr-fr': "Hoopa V",
		'es-es': "Hoopa V",
		'it-it': "Hoopa V",
		'pt-br': "Hoopa V",
		'de-de': "Hoopa V"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "V",
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "takuyoa",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Two-Faced",
			'fr-fr': "Deux Visages",
			'de-de': "Doppelgesichtig",
			'es-es': "Dos Rostros",
			'pt-br': "Duas Caras",
			'it-it': "Doppio Viso"
		},

		effect: {
			'en-us': "As long as this Pokémon is in play, it is {P} and {D} type.",
			'fr-fr': "Tant que ce Pokémon est en jeu, il est de type {P} et {D}.",
			'de-de': "Solange dieses Pokémon im Spiel ist, ist es vom Typ {P} und {D}.",
			'es-es': "Mientras este Pokémon esté en juego, es de tipo {P} y {D}.",
			'pt-br': "Enquanto este Pokémon estiver em jogo, será um Pokémon de tipo {P} e {D}.",
			'it-it': "Fintanto che questo Pokémon è in gioco, è di tipo {P} e {D}."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Shadow Impact",
			'fr-fr': "Impact Lugubre",
			'de-de': "Schatteneinschlag",
			'es-es': "Impacto Sombra",
			'pt-br': "Impacto Sombrio",
			'it-it': "Impatto Ombra"
		},

		damage: 170,

		effect: {
			'en-us': "Put 3 damage counters on 1 of your Pokémon.",
			'fr-fr': "Placez 3 marqueurs de dégâts sur l'un de vos Pokémon.",
			'de-de': "Lege 3 Schadensmarken auf 1 deiner Pokémon.",
			'es-es': "Pon 3 contadores de daño en 1 de tus Pokémon.",
			'pt-br': "Coloque 3 contadores de dano em 1 dos seus Pokémon.",
			'it-it': "Metti tre segnalini danno su uno dei tuoi Pokémon."
		}
	}],


	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 582989,
				tcgplayer: 253152
			}
		},
	],
}

export default card
