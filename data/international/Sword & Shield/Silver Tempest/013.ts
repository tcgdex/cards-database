import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [632],
	set: Set,

	name: {
		'en-us': "Durant",
		'fr-fr': "Fermite",
		'es-es': "Durant",
		'it-it': "Durant",
		'pt-br': "Durant",
		'de-de': "Fermicula"
	},

	illustrator: "Yuya Oka",
	rarity: "Common",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Energy Digging",
			'fr-fr': "Fouille Énergétique",
			'es-es': "Excavación de Energía",
			'it-it': "Scavo Energetico",
			'pt-br': "Escavação de Energia",
			'de-de': "Nach Energie graben"
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
		cost: ["Grass", "Colorless"],

		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "They lay their eggs deep inside their nests. When attacked by Heatmor, they retaliate using their massive mandibles.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682054,
				tcgplayer: 451641
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682054,
				tcgplayer: 451641
			}
		},
	],
}

export default card
