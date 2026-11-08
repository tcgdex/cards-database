import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [131],
	set: Set,

	name: {
		'en-us': "Lapras",
		'fr-fr': "Lokhlass",
		'es-es': "Lapras",
		'it-it': "Lapras",
		'pt-br': "Lapras",
		'de-de': "Lapras"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Into the Deep",
			'fr-fr': "Dans l'Abysse",
			'es-es': "En lo Profundo",
			'it-it': "Baratro",
			'pt-br': "Nas Profundezas",
			'de-de': "In die Tiefe"
		},

		effect: {
			'en-us': "Put up to 3 Basic Energy cards from your discard pile into your hand.",
			'fr-fr': "Ajoutez jusqu'à 3 cartes Énergie de base de votre pile de défausse à votre main.",
			'es-es': "Pon hasta 3 cartas de Energía Básica de tu pila de descartes en tu mano.",
			'it-it': "Prendi fino a tre carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
			'pt-br': "Coloque até 3 cartas de Energia Básica da sua pilha de descarte na sua mão.",
			'de-de': "Nimm bis zu 3 Basis-Energiekarten aus deinem Ablagestapel auf deine Hand."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Freeze-Dry",
			'fr-fr': "Lyophilisation",
			'es-es': "Liofilización",
			'it-it': "Liofilizzazione",
			'pt-br': "Liofilização",
			'de-de': "Gefriertrockner"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			'de-de': "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751543,
				tcgplayer: 534158,
				cardtrader: 274200
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751543,
				tcgplayer: 534158,
				cardtrader: 274200
			}
		},
	],

	illustrator: "Gemi",

	description: {
		'en-us': "Crossing icy seas is no issue for this cold-resistant Pokémon. Its smooth skin is a little cool to the touch.",
	},

}

export default card
