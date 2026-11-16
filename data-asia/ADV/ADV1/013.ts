import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "バクーダ"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [323],
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		ja: "ドンメル"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "ひのたま"
		},

		effect: {
			ja: "相手のベンチポケモン1匹にも、10ダメージ。"
		},

		damage: 20,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			ja: "ほのおのうず"
		},

		effect: {
			ja: "自分の基本エネルギーを2個トラッシュする。(トラッシュできないなら、このワザは失敗する。)"
		},

		damage: 100,
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	variants: [
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784497,
				tcgplayer: 613056,
				cardtrader: 137997,
			},
		},
		{
			type: "holo",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784497,
				tcgplayer: 613056,
				cardtrader: 137997,
			},
		},
	]
}

export default card
