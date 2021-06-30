import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Golett",
		fr: "Gringolem",
		es: "Golett",
		it: "Golett",
		pt: "Golett",
		de: "Golbit"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		622,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Return",
				fr: "Retour",
				es: "Retribución",
				it: "Ritorno",
				pt: "Retorno",
				de: "Rückkehr"
			},
			effect: {
				en: "You may draw cards until you have 5 cards in your hand.",
				fr: "Vous pouvez piocher des cartes jusqu’à ce que vous ayez 5 cartes en main.",
				es: "Puedes robar cartas hasta que tengas 5 cartas en tu mano.",
				it: "Puoi pescare fino ad avere cinque carte in mano.",
				pt: "Você pode comprar cartas até ter 5 cartas na sua mão.",
				de: "Du kannst so lang Karten ziehen, bis du 5 Karten auf deiner Hand hast."
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
