import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Octillery",
		fr: "Octillery"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Remoraid",
		fr: "Rémoraid"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Rapid Strike Search",
			fr: "Recherche à Mille Poings"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a Rapid Strike card, reveal it, and put it into your hand. Then, shuffle your deck. You can’t use more than 1 Rapid Strike Search Ability each turn.",
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck une carte Mille Poings, la montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck. Vous ne pouvez utiliser qu’un talent Recherche à Mille Poings par tour."
		}
	}],

	attacks: [{
		name: {
			en: "Waterfall",
			fr: "Cascade"
		},

		damage: 50,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card