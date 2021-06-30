import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Furfrou",
		fr: "Couafarel",
		es: "Furfrou",
		it: "Furfrou",
		pt: "Furfrou",
		de: "Coiffwaff"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		676,
	],
	hp: 90,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
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
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
