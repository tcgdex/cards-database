import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Ruin Wall",
		fr: "Mur en ruines",
		de: "Ruinenwand"
	},

	illustrator: undefined,
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Cherchez dans votre deck une carte Zarbi et placez-la sur votre Banc. Mélangez ensuite votre deck. (Vous ne pouvez pas jouer cette carte si votre Banc est plein.)",
		de: "Search your deck for a card with Unown in its name and put it onto your Bench. Shuffle your deck afterward. (You can't play this card if your Bench is full.)"
	},

	thirdParty: {
		cardmarket: 274585,
		tcgplayer: 88845
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		}
	]
}

export default card

