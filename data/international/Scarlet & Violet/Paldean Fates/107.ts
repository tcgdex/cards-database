import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [952],
	set: Set,

	name: {
		'en-us': "Scovillain",
		'fr-fr': "Scovilain",
		'es-es': "Scovillain",
		'it-it': "Scovillain",
		'pt-br': "Scovillain",
		'de-de': "Halupenjo"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
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
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'en-us': "Spicy Headbutt",
			'fr-fr': "Coup d'Boule Pimenté",
			'es-es': "Cabezazo Picante",
			'it-it': "Testata Piccante",
			'pt-br': "Cabeçada Ardida",
			'de-de': "Scharfe Kopfnuss"
		},

		effect: {
			'en-us': "This attack's damage isn't affected by Resistance.",
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
			'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
			'pt-br': "O dano deste ataque não é afetado por Resistência.",
			'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
		},

		damage: 110
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751646,
				tcgplayer: 534481,
				cardtrader: 274291
			}
		},
	],

	illustrator: "Kouki Saitou",

	description: {
		'en-us': "The red head converts spicy chemicals into fire energy and blasts the surrounding area with a super spicy stream of flame.",
	},

}

export default card
