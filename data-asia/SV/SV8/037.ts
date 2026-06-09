import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ロトム",
		'zh-tw': "洛托姆",
		'zh-cn': "洛托姆"
	},

	illustrator: "Shinya Mizuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [479],
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "特殊な モーターを 動かす 動力源として 長い あいだ 研究されていた ポケモン。",
		'zh-tw': "被當作驅動 特殊馬達的動力源， 而被長期研究的寶可夢。",
		'zh-cn': "被當作驅動 特殊馬達的動力源， 而被長期研究的寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "クラッシュパルス",
			'zh-tw': "粉碎脈衝",
			'zh-cn': "粉碎脈衝"
		},

		effect: {
			ja: "相手の手札を見て、その中にある「グッズ」と「ポケモンのどうぐ」を、すべてトラッシュする。",
			'zh-tw': "查看對手的手牌，將其中的「物品」卡與「寶可夢道具」卡全部丟棄。",
			'zh-cn': "查看對手的手牌，將其中的「物品」卡與「寶可夢道具」卡全部丟棄。"
		}
	}, {
		cost: ["Lightning"],

		name: {
			ja: "エネショート",
			'zh-tw': "能量短路",
			'zh-cn': "能量短路"
		},

		damage: "20×",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×20ダメージ。",
			'zh-tw': "造成對手的戰鬥寶可夢身上附加的能量的數量×20點傷害。",
			'zh-cn': "造成對手的戰鬥寶可夢身上附加的能量的數量×20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793471
	}
}

export default card