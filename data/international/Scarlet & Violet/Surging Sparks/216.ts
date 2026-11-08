import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [952],
	set: Set,

	name: {
		'en-us': "Scovillain ex",
		'fr-fr': "Scovilain-ex",
		'es-es': "Scovillain ex",
		'it-it': "Scovillain-ex",
		'pt-br': "Scovillain ex",
		'de-de': "Halupenjo-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Capsakid",
		'fr-fr': "Pimito",
		'es-es': "Capsakid",
		'it-it': "Capsakid",
		'pt-br': "Capsakid",
		'de-de': "Chilingel"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Double Type",
			'fr-fr': "Type Double",
			'es-es': "Doble Tipo",
			'it-it': "Doppio Tipo",
			'pt-br': "Tipo Duplo",
			'de-de': "Doppeltyp"
		},

		effect: {
			'en-us': "As long as this Pokémon is in play, it is {G} and {R} type.",
			'fr-fr': "Tant que ce Pokémon est en jeu, il est de type {G} et {R}.",
			'es-es': "Mientras este Pokémon esté en juego, es de tipo {G} y {R}.",
			'it-it': "Fintanto che questo Pokémon è in gioco, è di tipo {G} e {R}.",
			'pt-br': "Enquanto este Pokémon estiver em jogo, será um Pokémon de tipo {G} e {R}.",
			'de-de': "Solange dieses Pokémon im Spiel ist, ist es vom Typ {G} und {R}."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Spicy Rage",
			'fr-fr': "Frénésie Pimentée",
			'es-es': "Furia Picante",
			'it-it': "Ira Piccante",
			'pt-br': "Ira Apimentada",
			'de-de': "Scharfer Zorn"
		},

		effect: {
			'en-us': "This attack does 70 more damage for each damage counter on this Pokémon.",
			'fr-fr': "Cette attaque inflige 70 dégâts supplémentaires pour chaque marqueur de dégâts sur ce Pokémon.",
			'es-es': "Este ataque hace 70 puntos de daño más por cada contador de daño en este Pokémon.",
			'it-it': "Questo attacco infligge 70 danni in più per ogni segnalino danno presente su questo Pokémon.",
			'pt-br': "Este ataque causa 70 pontos de dano a mais para cada contador de dano neste Pokémon.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 70 Schadenspunkte mehr zu."
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794589,
				tcgplayer: 590041
			}
		},
	],

	suffix: "ex",
	illustrator: "PLANETA Igarashi",

}

export default card
