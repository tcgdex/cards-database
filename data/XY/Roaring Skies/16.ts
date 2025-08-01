import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Articuno",
		fr: "Artikodin",
		es: "Articuno",
		it: "Articuno",
		pt: "Articuno",
		de: "Arktos"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		144,
	],

	hp: 120,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Find Ice",
				fr: "Chercheur de Glace",
				es: "Encontrar Hielo",
				it: "Trovaghiaccio",
				pt: "Encontrar Gelo",
				de: "Eis finden"
			},
			effect: {
				en: "Search your deck for up to 3 Water Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
				fr: "Cherchez jusqu'à 3 cartes Énergie Water dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 3 cartas de Energía Water, enséñalas y ponlas en tu mano. Baraja las cartas de tu baraja después.",
				it: "Cerca nel tuo mazzo fino a tre carte Energia Water, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure no seu baralho até 3 cards de Energia Water, revele-os e coloque-os na mão. Em seguida, embaralhe seus cards.",
				de: "Durchsuche dein Deck nach bis zu 3 Water-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Freezing Wind",
				fr: "Vent Glaçant",
				es: "Viento Gélido",
				it: "Ventogelido",
				pt: "Vento Gelado",
				de: "Polarwind"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 282684
	}
}

export default card
