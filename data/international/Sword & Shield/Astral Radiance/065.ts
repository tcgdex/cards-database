import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [480],
	set: Set,

	name: {
		'en-us': "Uxie",
		'fr-fr': "Créhelf",
		'es-es': "Uxie",
		'it-it': "Uxie",
		'pt-br': "Uxie",
		'de-de': "Selfe"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Wise Guidance",
			'fr-fr': "Conseil Avisé",
			'es-es': "Guía de la Sabiduría",
			'it-it': "Guida Saggia",
			'pt-br': "Orientação Sábia",
			'de-de': "Weises Geleit"
		},

		effect: {
			'en-us': "Search your deck for a card and put it into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez une carte dans votre deck, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja 1 carta y ponla en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo una carta e aggiungila a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por 1 carta no seu baralho e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach 1 Karte und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Psychic"],

		name: {
			'en-us': "Psyshot",
			'fr-fr': "Piqûre Psy",
			'es-es': "Disparo Psi",
			'it-it': "Psicosparo",
			'pt-br': "Tiro Psíquico",
			'de-de': "Psychoschuss"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "It is said that its emergence gave humans the intelligence to improve their quality of life.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658641,
				tcgplayer: 272266
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658641,
				tcgplayer: 272266
			}
		},
	],
}

export default card
