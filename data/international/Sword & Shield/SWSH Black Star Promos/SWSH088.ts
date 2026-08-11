import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Cherrim",
		'fr-fr': "Ceriflor",
		'es-es': "Cherrim",
		'it-it': "Cherrim",
		'pt-br': "Cherrim",
		'de-de': "Kinoso"
	},

	illustrator: "Tika Matsuno",
	rarity: "Promo",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Cherubi",
		'fr-fr': "Ceribou",
		'de-de': "Kikugi",
		'es-es': "Cherubi",
		'pt-br': "Cherubi",
		'it-it': "Cherubi"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Spring Bloom",
			'es-es': "Floración Primaveral",
			'it-it': "Fioritura Primaverile",
			'pt-br': "Florescer Primaveril",
			'de-de': "Frühlingsblühen",
			'fr-fr': "Floraison Vernale"
		},

		effect: {
			'en-us': "As often as you like during your turn, you may attach a {G} Energy card from your hand to 1 of your Pokémon that doesn't have a Rule Box (Pokémon V, Pokémon-GX, etc. have Rule Boxes).",
			'es-es': "Todas las veces que quieras durante tu turno, puedes unir 1 carta de Energía {G} de tu mano a 1 de tus Pokémon que no tenga un recuadro de regla (Pokémon V, Pokémon-GX, etc. tienen recuadros de regla).",
			'it-it': "Durante il tuo turno, puoi assegnare a uno dei tuoi Pokémon che non ha una regola speciale una carta Energia {G} dalla tua mano tutte le volte che vuoi. I Pokémon-V, i Pokémon-GX, ecc. hanno regole speciali.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá ligar 1 carta de Energia {G} da sua mão a 1 dos seus Pokémon que não tenha uma Caixa de Regras (Pokémon V, Pokémon-GX, etc. têm Caixas de Regras).",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 {G}-Energiekarte aus deiner Hand an 1 deiner Pokémon anlegen, das kein Regelfeld hat (Pokémon-V, Pokémon-GX usw. haben Regelfelder).",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez attacher une carte Énergie {G} de votre main à l'un de vos Pokémon n'ayant pas d'encadré Règle(les Pokémon-V, Pokémon-GX, etc. ont des encadrés Règle)."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,

	description: {
		'en-us': "The faint scent that emanates from its full blossom entices bug Pokémon to it."
	},

	stage: "Stage1",
	dexId: [421],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

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

	regulationMark: "E",

	thirdParty: {
		cardmarket: 546936
	}
}

export default card
