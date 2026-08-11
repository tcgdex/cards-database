import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Charcadet",
		'fr-fr': "Charbambin",
		'de-de': "Knarbon",
		'it-it': "Charcadet",
		'es-es': "Charcadet",
		'pt-br': "Charcadet"
	},

	illustrator: "Teeziro",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	dexId: [935],

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Gather Strength",
			'fr-fr': "Pouvoir Collecté",
			'de-de': "Kraftsammler",
			'it-it': "Radunaforze",
			'es-es': "Reunir Fuerzas",
			'pt-br': "Reunir Força"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia il tuo mazzo.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 2 cartas de Energia Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho."
		}
	}, {
		cost: ["Fire"],

		name: {
			'en-us': "Chop",
			'fr-fr': "Coup Tranchant",
			'de-de': "Hacker",
			'it-it': "Ceffone",
			'es-es': "Cortar",
			'pt-br': "Cortar"
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "I",

	weaknesses: [{
		type: "Water",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 859029,
				tcgplayer: 666538
			}
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 859031,
				tcgplayer: 665053
			}
		},
	],
}

export default card
