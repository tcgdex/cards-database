import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Solgaleo"
	},

	illustrator: "Nurikabe",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [791],
	hp: 170,
	types: ["Metal"],
	stage: "Stage2",

	description: {
		en: "Solgaleo was once known as the Beast That Devours the Sun. Energy in the form of light radiates boundlessly from it."
	},

	abilities: [{
		type: "Ability",
		name: {
			en: "Sunrise"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is on your Bench, you may use this Ability. Search your deck for up to 2 Basic Metal Energy cards and attach them to this Pokémon. Then, shuffle your deck."
		}
	}],

	attacks: [{
		name: {
			en: "Sunsteel Strike"
		},

		cost: ["Metal", "Metal", "Colorless", "Colorless"],

		damage: 220,

		effect: {
			en: "Discard all Energy from this Pokémon."
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907712,
				tcgplayer: 716498
			}
		}
	],
}

export default card
