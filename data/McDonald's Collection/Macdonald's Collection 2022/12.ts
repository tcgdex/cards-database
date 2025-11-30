import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Bewear",
		fr: "Chelours",
		es: "Bewear",
		it: "Bewear",
		pt: "Bewear",
		de: "Kosturso"
	},

	illustrator: "Shigenori Negishi",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [760],

	hp: 120,

	types: ["Colorless"],

	stage: "Stage1",

	evolveFrom: {
		en: "Stufful",
		fr: "Nounourson",
		es: "Stufful",
		it: "Stufful",
		pt: "Stufful",
		de: "Velursi"
	},

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				en: "Lunge Out",
				fr: "Coup Rapide",
				es: "Embestida",
				it: "Slancio",
				pt: "Investida Rápida",
				de: "Vorstoß"
			},
			damage: 30,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				en: "Hammer Arm",
				fr: "Marto-Poing",
				es: "Machada",
				it: "Martelpugno",
				pt: "Braço de Martelo",
				de: "Hammerarm"
			},
			damage: 100,
			effect: {
				en: "Discard the top card of your opponent's deck.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire.",
				es: "Descarta la primera carta de la baraja de tu rival.",
				it: "Scarta la prima carta del mazzo del tuo avversario.",
				pt: "Descarte a carta de cima do baralho do seu oponente.",
				de: "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
			},
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

