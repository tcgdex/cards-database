import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [666],
	set: Set,

	name: {
		'en-us': "Vivillon",
		'fr-fr': "Prismillon",
		'es-es': "Vivillon",
		'it-it': "Vivillon",
		'pt-br': "Vivillon",
		'de-de': "Vivillon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Spewpa",
		'fr-fr': "Pérégrain",
		'es-es': "Spewpa",
		'it-it': "Spewpa",
		'pt-br': "Spewpa",
		'de-de': "Puponcho"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Evo-Powder",
			'fr-fr': "Poudre Évo",
			'es-es': "Evo-Polvo",
			'it-it': "Evopolvere",
			'pt-br': "Pó Evoluir",
			'de-de': "Entwicklungspuder"
		},

		effect: {
			'en-us': "For each of your Benched Pokémon, search your deck for a card that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
			'fr-fr': "Pour chacun de vos Pokémon de Banc, cherchez dans votre deck une carte Évolution de ce Pokémon-là, puis placez-la sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck.",
			'es-es': "Para cada uno de tus Pokémon en Banca, busca en tu baraja 1 carta que evolucione de ese Pokémon y ponla sobre ese Pokémon para hacerlo evolucionar. Después, baraja las cartas de tu baraja.",
			'it-it': "Per ogni Pokémon nella tua panchina, cerca nel tuo mazzo una carta che si evolve da quel Pokémon e metticela sopra per farlo evolvere. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Para cada um dos seus Pokémon no Banco, procure por uma carta no seu baralho que evolua daquele Pokémon e coloque-a sobre aquele Pokémon para evoluí-lo. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche für jedes Pokémon auf deiner Bank dein Deck nach 1 Karte, die sich aus jenem Pokémon entwickelt, und lege sie auf jenes Pokémon, um es zu entwickeln. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Grass"],

		name: {
			'en-us': "Cutting Wind",
			'fr-fr': "Vent Glacial",
			'es-es': "Viento Helado",
			'it-it': "Vento Tagliente",
			'pt-br': "Vento Dilacerante",
			'de-de': "Schneidender Wind"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794262,
				tcgplayer: 590089
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794262,
				tcgplayer: 590089
			}
		},
	],

	illustrator: "Amelicart",
	
}

export default card
