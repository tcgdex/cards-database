import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [40],
	set: Set,

	name: {
		'en-us': "Wigglytuff",
		'fr-fr': "Grodoudou",
		'es-es': "Wigglytuff",
		'it-it': "Wigglytuff",
		'pt-br': "Wigglytuff",
		'de-de': "Knuddeluff"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
		'es-es': "Jigglypuff",
		'it-it': "Jigglypuff",
		'pt-br': "Jigglypuff",
		'de-de': "Pummeluff"
	},

	stage: "Stage1",
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "E",
	illustrator: "Asako Ito",

	description: {
		'en-us': "When it gets angry, it inhales with all its might, and its body gradually inflates. Sometimes they can grow 20 times larger!"
	},

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Find Treasure",
			'fr-fr': "Course au Trésor",
			'de-de': "Schätze finden",
			'es-es': "Encontrar Tesoros",
			'pt-br': "Encontrar Tesouro",
			'it-it': "Caccia al Tesoro"
		},

		effect: {
			'en-us': "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo fino a due carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Hyper Voice",
			'fr-fr': "Mégaphone",
			'de-de': "Schallwelle",
			'es-es': "Vozarrón",
			'pt-br': "Hipervoz",
			'it-it': "Granvoce"
		},

		damage: 90
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582603,
				tcgplayer: 253269
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582603,
				tcgplayer: 253269
			}
		},
	],
}

export default card
