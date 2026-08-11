import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [593],
	set: Set,

	name: {
		'en-us': "Jellicent",
		'fr-fr': "Moyade",
		'es-es': "Jellicent",
		'it-it': "Jellicent",
		'pt-br': "Jellicent",
		'de-de': "Apoquallyp"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Frillish",
		'fr-fr': "Viskuse",
		'es-es': "Frillish",
		'it-it': "Frillish",
		'pt-br': "Frillish",
		'de-de': "Quabbel"
	},

	attacks: [{
		name: {
			'en-us': "Sediment Sink",
			'fr-fr': "Sédiment Visqueux",
			'es-es': "Sumidero de Sedimentos",
			'it-it': "Sedimentazione",
			'pt-br': "Sumidouro de Sedimentos",
			'de-de': "Sedimentsenke"
		},

		effect: {
			'en-us': "This attack does 10 damage for each Water Energy card in your discard pile.",
			'fr-fr': "Cette attaque inflige 10 dégâts pour chaque carte Énergie Water dans votre pile de défausse.",
			'es-es': "Este ataque hace 10 puntos de daño por cada carta de Energía Water en tu pila de descartes.",
			'it-it': "Questo attacco infligge 10 danni per ogni carta Energia Water nella tua pila degli scarti.",
			'pt-br': "Este ataque causa 10 pontos de dano para cada carta de Energia Water na sua pilha de descarte.",
			'de-de': "Diese Attacke fügt für jede Water-Energiekarte in deinem Ablagestapel 10 Schadenspunkte zu."
		},

		damage: "10×",
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "Whenever a full moon hangs in the night sky, schools of Jellicent gather near the surface of the sea, waiting for their prey to appear."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545321,
				tcgplayer: 234185
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545321,
				tcgplayer: 234185
			}
		},
	],
}

export default card
