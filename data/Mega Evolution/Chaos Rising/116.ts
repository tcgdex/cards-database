import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886509,
				tcgplayer: 693517
			}
		},
	],

	name: {
		en: "Mega Greninja ex"
	},

	illustrator: "Susumu Maeya",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [658],
	hp: 350,
	types: ["Water"],

	evolveFrom: {
		en: "Frogadier"
	},

	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Mortal Shuriken"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may discard a Basic Water Energy card from your hand in order to use this Ability. Place 6 damage counters on 1 of your opponent's Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Ninja Spinner"
		},

		cost: ["Water", "Water"],
		damage: 120,

		effect: {
			en: "You may put a Water Energy attached to this Pokémon into your hand and have this attack do 80 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
}

export default card