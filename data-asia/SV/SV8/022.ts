import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ソウブレイズ",
		'zh-tw': "蒼炎刃鬼",
		'zh-cn': "蒼炎刃鬼"
	},

	illustrator: "kantaro",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [937],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "怨念の 染みついた 古い 鎧により 進化した 姿。 容赦なく 敵を 切り刻む。",
		'zh-tw': "憑藉滲進怨念的舊鎧甲 而進化成的樣子。 會毫不留情地斬斷敵人。",
		'zh-cn': "憑藉滲進怨念的舊鎧甲 而進化成的樣子。 會毫不留情地斬斷敵人。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ブレイズカース",
			'zh-tw': "火焰咒詛",
			'zh-cn': "火焰咒詛"
		},

		effect: {
			ja: "相手のポケモン全員についている特殊エネルギーを、すべてトラッシュする。",
			'zh-tw': "將對手的所有寶可夢身上附加的特殊能量卡全部丟棄。",
			'zh-cn': "將對手的所有寶可夢身上附加的特殊能量卡全部丟棄。"
		}
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "こくえんぎり",
			'zh-tw': "黑煙斬",
			'zh-cn': "黑煙斬"
		},

		damage: 160,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card