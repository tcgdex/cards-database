import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [952],
	set: Set,

	name: {
		'fr-fr': "Scovilain",
		'en-us': "Scovillain",
		'es-es': "Scovillain",
		'it-it': "Scovillain",
		'pt-br': "Scovillain",
		'de-de': "Halupenjo"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Pimito",
		'en-us': "Capsakid",
		'es-es': "Capsakid",
		'it-it': "Capsakid",
		'pt-br': "Capsakid",
		'de-de': "Chilingel"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Type Double",
			'en-us': "Double Type",
			'es-es': "Doble Tipo",
			'it-it': "Doppio Tipo",
			'pt-br': "Tipo Duplo",
			'de-de': "Doppeltyp"
		},

		effect: {
			'fr-fr': "Tant que ce Pokémon est en jeu, il est de type {G} et {R}.",
			'en-us': "As long as this Pokémon is in play, it is {G} and {R} type.",
			'es-es': "Mientras este Pokémon esté en juego, es de tipo {G} y {R}.",
			'it-it': "Fintanto che questo Pokémon è in gioco, è di tipo {G} e {R}.",
			'pt-br': "Enquanto este Pokémon estiver em jogo, será um Pokémon de tipo {G} e {R}.",
			'de-de': "Solange dieses Pokémon im Spiel ist, ist es vom Typ {G} und {R}."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Coup d'Boule Pimenté",
			'en-us': "Spicy Headbutt",
			'es-es': "Cabezazo Picante",
			'it-it': "Testata Piccante",
			'pt-br': "Cabeçada Ardida",
			'de-de': "Scharfe Kopfnuss"
		},

		effect: {
			'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			'en-us': "This attack's damage isn't affected by Resistance.",
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

	description: {
		'en-us': "The red head converts spicy chemicals into fire energy and blasts the surrounding area with a super spicy stream of flame.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725105,
				tcgplayer: 509776,
				cardtrader: 255585
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725105,
				tcgplayer: 509776,
				cardtrader: 255585
			}
		},
	],

	illustrator: "kodama",

	
}

export default card
