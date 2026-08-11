import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [494],
	set: Set,

	name: {
		'en-us': "Victini",
		'fr-fr': "Victini",
		'es-es': "Victini",
		'it-it': "Victini",
		'pt-br': "Victini",
		'de-de': "Victini"
	},

	illustrator: "GOSSAN",
	rarity: "Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Assisting Flame",
			'fr-fr': "Flamme de Soutien",
			'es-es': "Llama de Apoyo",
			'it-it': "Fiammaiuto",
			'pt-br': "Chama Auxiliar",
			'de-de': "Helfende Flamme"
		},

		effect: {
			'en-us': "Attach up to 2 Fire Energy cards from your discard pile to your Pokémon in any way you like.",
			'fr-fr': "Attachez jusqu'à 2 cartes Énergie Fire de votre pile de défausse à vos Pokémon comme il vous plaît.",
			'es-es': "Une hasta 2 cartas de Energía Fire de tu pila de descartes a tus Pokémon de la manera que desees.",
			'it-it': "Assegna ai tuoi Pokémon fino a due carte Energia Fire dalla tua pila degli scarti nel modo che preferisci.",
			'pt-br': "Ligue até 2 cartas de Energia Fire da sua pilha de descarte aos seus Pokémon como desejar.",
			'de-de': "Lege bis zu 2 Fire-Energiekarten aus deinem Ablagestapel beliebig an deine Pokémon an."
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'es-es': "Llama",
			'it-it': "Fiammata",
			'pt-br': "Chama",
			'de-de': "Flackern"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "When it shares the infinite energy it creates, that being's entire body will be overflowing with power.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682064,
				tcgplayer: 451654
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682064,
				tcgplayer: 451654
			}
		},
	],
}

export default card
