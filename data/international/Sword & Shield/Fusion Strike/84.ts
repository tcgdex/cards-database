import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [872],
	set: Set,

	name: {
		'en-us': "Snom",
		'fr-fr': "Frissonille",
		'es-es': "Snom",
		'it-it': "Snom",
		'pt-br': "Snom",
		'de-de': "Snomnom"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Water"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Yuka Morii",

	description: {
		'en-us': "It eats snow that piles up on the ground. The more snow it eats, the bigger and more impressive the spikes on its back grow."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Find Ice",
			'fr-fr': "Chercheur de Glace",
			'de-de': "Eis finden",
			'es-es': "Encontrar Hielo",
			'pt-br': "Encontrar Gelo",
			'it-it': "Trovaghiaccio"
		},

		effect: {
			'en-us': "Search your deck for up to 2 {W} Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie {W}, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 {W}-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía {W}, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 2 cartas de Energia {W} no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia {W}, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo."
		}
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582218,
				tcgplayer: 253238
			}
		},
		{
			type: 'normal',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 740470
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582218,
				tcgplayer: 253238
			}
		},
	],
}

export default card
