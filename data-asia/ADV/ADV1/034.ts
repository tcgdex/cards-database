import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ハリテヤマ"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [297],
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		ja: "マクノシタ"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "もろてづき"
		},

		effect: {
			ja: "相手のバトルポケモン全員に、それぞれ20ダメージ。"
		},

		cost: ["Fighting"]
	}, {
		name: {
			ja: "やぐらおとし"
		},

		effect: {
			ja: "相手がポケモンexなら、40ダメージを追加する。"
		},

		damage: "40+",
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	variants: [
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784518,
				tcgplayer: 613060,
				cardtrader: 138018,
			},
		},
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784518,
				tcgplayer: 613060,
				cardtrader: 138018,
			},
		},
	]
}

export default card
