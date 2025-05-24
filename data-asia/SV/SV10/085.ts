import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大王燕",
		'zh-cn': "大王燕",
		ja: "オオスバメ"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		'zh-tw': "發現居住在森林裡的獵物時， 會從高空俯衝而下。 用鋒利的爪子捕捉獵物。",
		'zh-cn': "發現居住在森林裡的獵物時， 會從高空俯衝而下。 用鋒利的爪子捕捉獵物。",
		ja: "森に 住む 獲物を 見つけると 上空から 急降下。 鋭い ツメで 捕まえる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "叼",
			'zh-cn': "叼",
			ja: "くわえる"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出3張卡。",
			'zh-cn': "從自己的牌庫抽出3張卡。",
			ja: "自分の山札を3枚引く。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "高速之翼",
			'zh-cn': "高速之翼",
			ja: "スピードウイング"
		},

		damage: 70,
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

	retreat: 0,
	regulationMark: "I",
	rarity: "Common",
	dexId: [277]
}

export default card