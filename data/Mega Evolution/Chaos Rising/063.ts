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
		en: "Ferrothorn"
	},

	illustrator: "Haru Akasaka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [598],
	hp: 130,
	types: ["Metal"],

	evolveFrom: {
		en: "Ferroseed"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Prank Drop"
		},

		effect: {
			en: "During your opponent's turn, if this card is discarded from your deck by an effect of your opponent's Attacks, Abilities, Items, or Supporter cards, your opponent discards the top 8 cards of their deck."
		}
	}],

	attacks: [{
		name: {
			en: "Special Whip"
		},

		cost: ["Metal", "Metal"],
		damage: 70,

		effect: {
			en: "If this Pokémon has any Special Energy attached, this attack does 70 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693486,
		cardmarket: 886455
	}
}

export default card