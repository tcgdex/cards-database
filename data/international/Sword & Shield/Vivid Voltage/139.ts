import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [441],

	name: {
		'en-us': "Chatot",
		'fr-fr': "Pijako",
		'es-es': "Chatot",
		'it-it': "Chatot",
		'pt-br': "Chatot",
		'de-de': "Plaudagei"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Minor Errand-Running",
				'fr-fr': "Rendez-Vous Mineur",
				'es-es': "Recado Menor",
				'it-it': "Lavoretto Rapido",
				'pt-br': "Pequena Missão",
				'de-de': "Kleine Besorgung"
			},
			effect: {
				'en-us': "Search your deck for up to 2 basic Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck jusqu'à 2 cartes Énergie de base, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 cartas de Energía Básica, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due carte Energia base, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 cartas de Energia básica no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'es-es': "Picotazo",
				'it-it': "Beccata",
				'pt-br': "Bicada",
				'de-de': "Pikser"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It can learn and speak human words. If they gather, they all learn the same saying."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 512405,
				tcgplayer: 226595
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 512405,
				tcgplayer: 226595
			}
		},
	],
}

export default card
