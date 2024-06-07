import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "瑪狃拉",
		ja: "マニューラ"
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		'zh-tw': "成群結隊襲擊獵物。透過團隊合作，連象牙豬那樣 強大的對手也能輕鬆解決。",
		ja: "群れを 成し 獲物を 襲う。 チームプレーで マンムーなどの 大物も たやすく しとめる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "亂來",
			ja: "ひっかきまわす"
		},

		effect: {
			'zh-tw': "擲2次硬幣。若出現正面，則查看對手的手牌，從其中選擇與正面出現的次數相同數量的卡，將所選的卡以任意順序排列，放回對手的牌庫下方。",
			ja: "コインを2回投げる。オモテが出たなら、相手の手札を見て、その中からカードをオモテの数ぶん選び、選んだカードを好きな順番に入れ替えて、相手の山札の下にもどす。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "劈開",
			ja: "きりさく"
		},

		damage: 100,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [461]
}

export default card