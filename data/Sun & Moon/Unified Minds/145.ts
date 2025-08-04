import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Dedenne",
		fr: "Dedenne",
		es: "Dedenne",
		it: "Dedenne",
		pt: "Dedenne",
		de: "Dedenne"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		702,
	],

	hp: 70,

	types: [
		"Fairy",
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
				en: "You may draw cards until you have 6 cards in your hand.",
				fr: "Vous pouvez piocher des cartes jusqu’à ce que vous ayez 6 cartes en main.",
				es: "Puedes robar cartas hasta que tengas 6 cartas en tu mano.",
				it: "Puoi pescare fino ad avere sei carte in mano.",
				pt: "Você pode comprar cartas até ter 6 cartas na sua mão.",
				de: "Du kannst so lang Karten ziehen, bis du 6 Karten auf deiner Hand hast."
			},
			damage: 20,

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
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 388522,
		tcgplayer: 195132
	}
}

export default card
