import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ドクケイル"
	},

	illustrator: "Midori Harada",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [269],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		ja: "マユルド"
	},

	stage: "Stage2",

	abilities: [{
		type: "Poke-BODY",

		name: {
			ja: "まもりのりんぷん"
		},

		effect: {
			ja: "このポケモンは、相手のワザによる効果を受けない。"
		}
	}],

	attacks: [{
		name: {
			ja: "どくどく"
		},

		effect: {
			ja: "相手をどくにする。このワザでどくになったポケモンは、ポケモンチェックのときにのせるどくのダメージカウンターの数が2個になる。"
		},

		cost: ["Grass", "Colorless"]
	}, {
		name: {
			ja: "かぜおこし"
		},

		damage: 50,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 0,
	variants: [
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784492,
				tcgplayer: 613058,
				cardtrader: 137992,
			},
		},
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784492,
				tcgplayer: 613058,
				cardtrader: 137992,
			},
		},
	]
}

export default card
