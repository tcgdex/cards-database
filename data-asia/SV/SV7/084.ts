import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火箭雀",
		'zh-cn': "火箭雀",
		ja: "ヒノヤコマ"
	},

	illustrator: "Julie Hang",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "擁有半徑２～３公里的地盤。 絕不會輕饒任何進到 地盤裡的鳥寶可夢。",
		'zh-cn': "擁有半徑２～３公里的地盤。 絕不會輕饒任何進到 地盤裡的鳥寶可夢。",
		ja: "半径 ２～３キロの 縄張りを 持つ。 縄張りに 入ってきた 鳥ポケモンは 容赦しない。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "高速飛行",
			'zh-cn': "高速飛行",
			ja: "スピードひこう"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [662],

	thirdParty: {
		cardmarket: 779098
	}
}

export default card