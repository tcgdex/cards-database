import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [155],
	set: Set,

	name: {
		'fr-fr': "Héricendre",
		'de-de': "Feurigel",
		'es-es': "Cyndaquil",
		'pt-br': "Cyndaquil",
		'it-it': "Cyndaquil",
		'en-us': "Cyndaquil"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Recharge Énergétique",
			'de-de': "Energielader",
			'es-es': "Cargar Energía",
			'pt-br': "Carga de Energia",
			'it-it': "Caricaenergia",
			'en-us': "Charge Energy"
		},

		effect: {
			'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck.",
			'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			'pt-br': "Procure por até 2 cartas de Energia básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			'it-it': "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
			'en-us': "Search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'fr-fr': "Charbon Mutant",
			'de-de': "Glühende Kohlen",
			'es-es': "Carbón Activado",
			'pt-br': "Carvão Vivo",
			'it-it': "Carboni Ardenti",
			'en-us': "Live Coal"
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
		'en-us': "Hails from the Johto region. Though usually curled into a ball due to its timid disposition, it harbors tremendous firepower."
	},

	thirdParty: {
		cardmarket: 609467
	}
}

export default card
