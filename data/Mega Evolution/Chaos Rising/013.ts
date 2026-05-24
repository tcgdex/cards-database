import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Delphox"
	},

	illustrator: "Gemi",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [655],
	hp: 160,
	types: ["Fire"],

	evolveFrom: {
		en: "Braixen"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Flare Magic"
		},

		effect: {
			en: "Once during your turn, you may discard a Basic Fire Energy card from your hand in order to use this Ability. Draw cards until you have 7 cards in your hand."
		}
	}],

	attacks: [{
		name: {
			en: "Energy Storm"
		},

		cost: ["Fire", "Fire"],
		damage: 30,

		effect: {
			en: "This attack does 30 damage for each Energy attached to all Pokémon in play (both yours and your opponent's)."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693473
	}
}

export default card