import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ロトム"
	},

	illustrator: "Shinya Mizuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [479],
	hp: 80,
	types: ["Lightning"],

	description: {
		ja: "特殊な モーターを 動かす 動力源として 長い あいだ 研究されていた ポケモン。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "クラッシュパルス"
		},

		effect: {
			ja: "相手の手札を見て、その中にある「グッズ」と「ポケモンのどうぐ」を、すべてトラッシュする。"
		}
	}, {
		cost: ["Lightning"],

		name: {
			ja: "エネショート"
		},

		damage: "20×",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×20ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card