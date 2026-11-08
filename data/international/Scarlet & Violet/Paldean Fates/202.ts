import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [143],
	set: Set,

	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex",
		'es-es': "Snorlax",
		'it-it': "Snorlax",
		'pt-br': "Snorlax",
		'de-de': "Relaxo"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Voraciousness",
			'fr-fr': "Avidité",
			'es-es': "Glotonería",
			'it-it': "Ingordigia",
			'pt-br': "Esfomeado",
			'de-de': "Unersättlichkeit"
		},

		effect: {
			'en-us': "Once during your turn, you may put up to 2 Leftovers cards from your discard pile into your hand.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez ajouter à votre main jusqu'à 2 cartes Restes de votre pile de défausse.",
			'es-es': "Una vez durante tu turno, puedes poner hasta 2 cartas de Restos de tu pila de descartes en tu mano.",
			'it-it': "Una sola volta durante il tuo turno, puoi prendere fino a due carte Avanzi dalla tua pila degli scarti e aggiungerle alle carte che hai in mano.",
			'pt-br': "Uma vez durante o seu turno, você poderá colocar até 2 cartas Sobras da sua pilha de descarte na sua mão.",
			'de-de': "Einmal während deines Zuges kannst du bis zu 2 Überreste-Karten aus deinem Ablagestapel auf deine Hand nehmen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Thudding Press",
			'fr-fr': "Pression Fracassante",
			'es-es': "Presión Sorda",
			'it-it': "Tonfopressa",
			'pt-br': "Compressão de Baque",
			'de-de': "Prallpresse"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751741,
				tcgplayer: 535193,
				cardtrader: 274387
			}
		},
	],

	illustrator: "Shigenori Negishi",

	description: {
		'en-us': "This Pokémon's stomach is so strong, even eating moldy or rotten food will not affect it.",
	},

}

export default card
