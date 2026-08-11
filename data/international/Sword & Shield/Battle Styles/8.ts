import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [421],
	set: Set,

	name: {
		'en-us': "Cherrim",
		'fr-fr': "Ceriflor",
		'es-es': "Cherrim",
		'it-it': "Cherrim",
		'pt-br': "Cherrim",
		'de-de': "Kinoso"
	},

	illustrator: "Mina Nakai",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Cherubi",
		'fr-fr': "Ceribou",
		'es-es': "Cherubi",
		'it-it': "Cherubi",
		'pt-br': "Cherubi",
		'de-de': "Kikugi"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Spring Bloom",
			'fr-fr': "Floraison Vernale",
			'es-es': "Floración Primaveral",
			'it-it': "Fioritura Primaverile",
			'pt-br': "Florescer Primaveril",
			'de-de': "Frühlingsblühen"
		},

		effect: {
			'en-us': "As often as you like during your turn, you may attach a Grass Energy card from your hand to 1 of your Pokémon that doesn't have a Rule Box (Pokémon V, Pokémon-GX, etc. have Rule Boxes).",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie Grass de votre main à l'un de vos Pokémon n'ayant pas d'encadré Règle(les Pokémon-V, Pokémon-GX, etc. ont des encadrés Règle).",
			'es-es': "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía Grass de tu mano a 1 de tus Pokémon que no tenga un recuadro de regla (Pokémon V, Pokémon-GX, etc. tienen recuadros de regla).",
			'it-it': "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon che non ha una regola speciale una carta Energia Grass dalla tua mano tutte le volte che vuoi. I Pokémon-V, i Pokémon-GX, ecc. hanno regole speciali.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá ligar 1 carta de Energia Grass da sua mão a 1 dos seus Pokémon que não tenha uma Caixa de Regras (Pokémon V, Pokémon-GX, etc. têm Caixas de Regras).",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 Grass-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen, das kein Regelfeld hat (Pokémon-V, Pokémon-GX usw. haben Regelfelder)."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Seed Bomb",
			'fr-fr': "Canon Graine",
			'es-es': "Bomba Germen",
			'it-it': "Semebomba",
			'pt-br': "Bomba de Sementes",
			'de-de': "Samenbomben"
		},

		damage: 70,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "The faint scent that emanates from its full blossom entices bug Pokémon to it."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 544936,
				tcgplayer: 234054
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 544936,
				tcgplayer: 234054
			}
		},
	],
}

export default card
