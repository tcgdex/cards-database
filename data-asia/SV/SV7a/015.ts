import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狂歡浪舞鴨",
		'zh-cn': "狂歡浪舞鴨",
		ja: "ウェーニバル"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],

	description: {
		'zh-tw': "會用充滿異國情調的舞蹈 迷倒看到的對手，然後揮舞 以水構成的羽飾將其劈裂。",
		'zh-cn': "會用充滿異國情調的舞蹈 迷倒看到的對手，然後揮舞 以水構成的羽飾將其劈裂。",
		ja: "異国情緒 溢れる ダンスで 見るものを 魅了し 水でできた 飾り羽根を 振りまわし 切り裂く。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "水炮濺射",
			'zh-cn': "水炮濺射",
			ja: 'ハイドロスプラッシュ'
		},

		damage: 120,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [914],

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "‌[特性]快節奏",
			'zh-cn': "‌[特性]快節奏",
			ja: "アップテンポ"
		},

		effect: {
			'zh-tw': "在自己的回合，若將1張自己的手牌放回牌庫下方，則可使用1次。從牌庫抽卡直到自己的手牌滿5張為止。",
			'zh-cn': "在自己的回合，若將1張自己的手牌放回牌庫下方，則可使用1次。從牌庫抽卡直到自己的手牌滿5張為止。",
			ja: "自分の番に、自分の手札を1枚山札の下にもどすなら、1回使える。自分の手札が5枚になるように、山札を引く。"
		}
	}]
}

export default card
