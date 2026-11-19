import { Card } from "../../../interfaces"
import Set from "../ADV1"

const card: Card = {
	set: Set,

	name: {
		ja: "ナマケロ"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [287],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			ja: "かぎづめ"
		},

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗する。"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			ja: "なまける"
		},

		effect: {
			ja: "自分のダメージカウンターをすべてとりのぞく。次の自分の番、自分はワザを使うことができない。"
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 784525,
				tcgplayer: 613094,
				cardtrader: 138025,
			},
		},
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 784525,
				tcgplayer: 613094,
				cardtrader: 138025,
			},
		},
	]
}

export default card
