import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Mantine",
		fr: "Démanta",
		es: "Mantine",
		it: "Mantine",
		pt: "Mantine",
		de: "Mantax"
	},

	illustrator: "Jumpei Akasaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		226,
	],

	hp: 110,

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
				en: "Water Reserve",
				fr: "Réserve d’Eau",
				es: "Reserva de Agua",
				it: "Riserva Idrica",
				pt: "Reservatório de Água",
				de: "Wasserreserve"
			},
			effect: {
				en: "Search your deck for up to 3 Water Energy cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu’à 3 cartes Énergie Water, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				es: "Busca en tu baraja hasta 3 cartas de Energía Water, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Cerca nel tuo mazzo fino a tre carte Energia Water, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Procure por até 3 cartas de Energia Water no seu baralho, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Durchsuche dein Deck nach bis zu 3 Water-Energiekarten, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse Vague",
				es: "Chapoteo Ondulante",
				it: "Schizzi d’Onda",
				pt: "Onda Borrifante",
				de: "Wellenplatscher"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
