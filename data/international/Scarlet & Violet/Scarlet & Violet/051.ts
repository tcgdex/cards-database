import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [779],
	set: Set,

	name: {
		'en-us': "Bruxish",
		'fr-fr': "Denticrisse",
		'es-es': "Bruxish",
		'it-it': "Bruxish",
		'pt-br': "Bruxish",
		'de-de': "Knirfish"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Vivid Charge",
			'fr-fr': "Charge Vive",
			'es-es': "Carga Vívida",
			'it-it': "Carica Brillante",
			'pt-br': "Abastecimento Vívido",
			'de-de': "Farbaufladung"
		},

		effect: {
			'en-us': "Search your deck for up to 3 Basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 3 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 3 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a tre carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 3 cartas de Energia Básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 3 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Wave Splash",
			'fr-fr': "Grosse Vague",
			'es-es': "Chapoteo Ondulante",
			'it-it': "Schizzi d'Onda",
			'pt-br': "Onda Borrifante",
			'de-de': "Wellenplatscher"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "kurumitsu",

	description: {
		'en-us': "It grinds its teeth with great force to stimulate its brain. It fires the psychic energy created by this process from the protuberance on its head.",
	},

	thirdParty: {
        cardmarket: 702346,
        tcgplayer: 487898
    }
}

export default card