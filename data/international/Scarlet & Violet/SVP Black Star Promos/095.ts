import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [173],
	set: Set,

	name: {
		'en-us': "Cleffa",
		'fr-fr': "Mélo",
		'es-es': "Cleffa",
		'it-it': "Cleffa",
		'pt-br': "Cleffa",
		'de-de': "Pii"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Twinkling Hope",
			'fr-fr': "Espoir Scintillant",
			'es-es': "Brillo Esperanzador",
			'it-it': "Brillasperanza",
			'pt-br': "Brilho de Esperança",
			'de-de': "Funkelnde Hoffnung"
		},

		effect: {
			'en-us': "Search your deck for up to 2 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
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
	retreat: 0,
	regulationMark: "G",
	illustrator: "Tika Matsuno",
	description: {
		'en-us': "Because of its unusual, starlike silhouette, people believe that it came here on a meteor.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 751816,
				tcgplayer: 544201
			},
		}
	],
}

export default card
