import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Lapras",
		'fr-fr': "Lokhlass",
		'es-es': "Lapras",
		'it-it': "Lapras",
		'pt-br': "Lapras",
		'de-de': "Lapras"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 110,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Mermaid’s Call",
				'fr-fr': "Appel de la Sirène",
				'es-es': "Llamada de la Sirena",
				'it-it': "Richiamo della Sirena",
				'pt-br': "Chamado da Sereia",
				'de-de': "Ruf der Meerjungfrau"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may put a Misty’s Favor card from your discard pile into your hand.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer une carte Faveur d’Ondine de votre pile de défausse dans votre main.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes poner 1 carta de Favor de Misty de tu pila de descartes en tu mano.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi prendere una carta Cortesia di Misty dalla tua pila degli scarti e aggiungerla alle carte che hai in mano.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode colocar 1 carta Favor da Misty da sua pilha de descarte na sua mão.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Mistys Gunst-Karte aus deinem Ablagestapel auf deine Hand nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Surf",
				'fr-fr': "Surf",
				'es-es': "Surf",
				'it-it': "Surf",
				'pt-br': "Surfar",
				'de-de': "Surfer"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It likes swimming around with people on its back. In the Alola region, it's an important means of transportation over water.",
	},

	thirdParty: {
		cardmarket: 388007,
		tcgplayer: 194957
	}
}

export default card
