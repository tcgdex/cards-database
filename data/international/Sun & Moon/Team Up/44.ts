import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Blitzle",
		'fr-fr': "Zébibron",
		'es-es': "Blitzle",
		'it-it': "Blitzle",
		'pt-br': "Blitzle",
		'de-de': "Elezeba"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		522,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Delivery Dash",
				'fr-fr': "Livraison Précipitée",
				'es-es': "Entrega Veloz",
				'it-it': "Pronta Consegna",
				'pt-br': "Entrega Rápida",
				'de-de': "Blitzlieferung"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Electropower cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 2 cartes Électropuissance dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 cartas de Electropoder, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due carte Potenziatore Elettrico, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 cartas Eletropoder no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Elektrokraft-Karten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Zap Kick",
				'fr-fr': "Coup de Pied Ravageur",
				'es-es': "Electropatada",
				'it-it': "Dinamocalcio",
				'pt-br': "Chute Zap",
				'de-de': "Stromtritt"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its mane shines when it discharges electricity. They use the frequency and rhythm of these flashes to communicate.",
	},

	thirdParty: {
		cardmarket: 368975,
		tcgplayer: 183819
	}
}

export default card
