import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Blitzle",
		fr: "Zébibron",
		es: "Blitzle",
		it: "Blitzle",
		pt: "Blitzle",
		de: "Elezeba"
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
				en: "Delivery Dash",
				fr: "Livraison Précipitée",
				es: "Entrega Veloz",
				it: "Pronta Consegna",
				pt: "Entrega Rápida",
				de: "Blitzlieferung"
			},
			effect: {
				en: "Search your deck for up to 2 Electropower cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez jusqu’à 2 cartes Électropuissance dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 2 cartas de Electropoder, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a due carte Potenziatore Elettrico, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 2 cartas Eletropoder no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 2 Elektrokraft-Karten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Zap Kick",
				fr: "Coup de Pied Ravageur",
				es: "Electropatada",
				it: "Dinamocalcio",
				pt: "Chute Zap",
				de: "Stromtritt"
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



}

export default card
