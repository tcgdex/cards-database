import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [8],
	set: Set,

	name: {
		'fr-fr': "Carabaffe",
		'en-us': "Wartortle",
		'es-es': "Wartortle",
		'it-it': "Wartortle",
		'pt-br': "Wartortle",
		'de-de': "Schillok"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Carapuce",
		'en-us': "Squirtle",
		'es-es': "Squirtle",
		'it-it': "Squirtle",
		'pt-br': "Squirtle",
		'de-de': "Schiggy"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Plongée en Apnée",
			'en-us': "Free Diving",
			'es-es': "Buceo Libre",
			'it-it': "Tuffo Libero",
			'pt-br': "Mergulho Livre",
			'de-de': "Freitauchen"
		},

		effect: {
			'fr-fr': "Ajoutez jusqu'à 3 cartes Énergie {W} de base de votre pile de défausse à votre main.",
			'en-us': "Put up to 3 Basic {W} Energy cards from your discard pile into your hand.",
			'es-es': "Pon hasta 3 cartas de Energía {W} Básica de tu pila de descartes en tu mano.",
			'it-it': "Prendi fino a tre carte Energia base {W} dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			'pt-br': "Coloque até 3 cartas de Energia {W} Básica da sua pilha de descarte na sua mão.",
			'de-de': "Nimm bis zu 3 Basis-{W}-Energiekarten aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			'fr-fr': "Attaque Tournante",
			'en-us': "Spinning Attack",
			'es-es': "Ataque Giratorio",
			'it-it': "Attacco Rotante",
			'pt-br': "Ataque Giratório",
			'de-de': "Rundumangriff"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "It cleverly controls its furry ears and tail to maintain its balance while swimming.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733766,
				tcgplayer: 517038,
				cardtrader: 261332
			}
		},
	],

	illustrator: "Mitsuhiro Arita",

	
}

export default card
