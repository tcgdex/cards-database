import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [155],
	set: Set,

	name: {
		'en-us': "Cyndaquil",
		'fr-fr': "Héricendre",
		'es-es': "Cyndaquil",
		'it-it': "Cyndaquil",
		'pt-br': "Cyndaquil",
		'de-de': "Feurigel"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Charge Energy",
			'fr-fr': "Recharge Énergétique",
			'es-es': "Cargar Energía",
			'it-it': "Caricaenergia",
			'pt-br': "Carga de Energia",
			'de-de': "Energielader"
		},

		effect: {
			'en-us': "Search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'pt-br': "Procure por até 2 cartas de Energia básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Live Coal",
			'fr-fr': "Charbon Mutant",
			'es-es': "Carbón Activado",
			'it-it': "Carboni Ardenti",
			'pt-br': "Carvão Vivo",
			'de-de': "Glühende Kohlen"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Hails from the Johto region. Though usually curled into a ball due to its timid disposition, it harbors tremendous firepower.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658523,
				tcgplayer: 272223
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658523,
				tcgplayer: 272223
			}
		},
	],
}

export default card
