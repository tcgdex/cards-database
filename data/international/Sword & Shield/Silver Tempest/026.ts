import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [654],
	set: Set,

	name: {
		'en-us': "Braixen",
		'fr-fr': "Roussil",
		'es-es': "Braixen",
		'it-it': "Braixen",
		'pt-br': "Braixen",
		'de-de': "Rutena"
	},

	illustrator: "Ligton",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Fennekin",
		'fr-fr': "Feunnec",
		'es-es': "Fennekin",
		'it-it': "Fennekin",
		'pt-br': "Fennekin",
		'de-de': "Fynx"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'es-es': "Combustión",
			'it-it': "Fuoco Continuo",
			'pt-br': "Combustão",
			'de-de': "Glühen"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Flare Parade",
			'fr-fr': "Parade Flamboyante",
			'es-es': "Desfile de Antorchas",
			'it-it': "Corteo Fiammeggiante",
			'pt-br': "Desfile de Labaredas",
			'de-de': "Flammenparade"
		},

		effect: {
			'en-us': "This attack does 60 damage for each Serena card in your discard pile.",
			'fr-fr': "Cette attaque inflige 60 dégâts pour chaque carte Serena dans votre pile de défausse.",
			'es-es': "Este ataque hace 60 puntos de daño por cada carta de Serena en tu pila de descartes.",
			'it-it': "Questo attacco infligge 60 danni per ogni carta Serena nella tua pila degli scarti.",
			'pt-br': "Este ataque causa 60 pontos de dano para cada carta Serena na sua pilha de descarte.",
			'de-de': "Diese Attacke fügt für jede Serena-Karte in deinem Ablagestapel 60 Schadenspunkte zu."
		},

		damage: "60×"
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
		'en-us': "When the twig is plucked from its tail, friction sets the twig alight. The flame is used to send signals to its allies.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682067,
				tcgplayer: 451657
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682067,
				tcgplayer: 451657
			}
		},
	],
}

export default card
