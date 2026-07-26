import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Alph Lithograph",
		fr: "Lithographie d’Alph",
		de: "Alph Lithograph"
	},

	illustrator: "Milky Isobe",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Regardez la main de votre adversaire !",
		en: "Look at your opponent's hand!",
		de: "Schau dir die Handkarten deines Gegners an!"
	},

	trainerType: "Item",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278972
			}
		}
	],
	hp: 0,

	retreat: 0,
}

export default card
