import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "索財靈",
		'zh-cn': "索財靈",
		ja: "コレクレー"
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		'zh-tw': "棲息在老舊的寶箱中。有時會 因沒人注意到自己是寶可夢， 而被擱置在道具店的角落。",
		'zh-cn': "棲息在老舊的寶箱中。有時會 因沒人注意到自己是寶可夢， 而被擱置在道具店的角落。",
		ja: "古びた 宝箱の中に 棲む。 ポケモンと 気づかれず 道具屋の 片隅に 置かれていることがある。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "小使者",
			'zh-cn': "小使者",
			ja: "ちいさなおつかい"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇最多2張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
			ja: "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "撞擊",
			'zh-cn': "撞擊",
			ja: "たいあたり"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [999]
}

export default card