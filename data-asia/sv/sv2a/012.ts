import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "バタフリー",
		'zh-tw': "巴大蝶"
	},

	illustrator: "Tika Matsuno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [12],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "毎日 ミツを 集めまわる。 脚の 産毛に ミツを 塗りこんで 巣に 持ち帰る 習性をもつ。",
		'zh-tw': "每天都忙著採集花蜜。習慣在腿部的細毛上塗滿花蜜， 然後帶回巢穴裡。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ふきとばし",
			'zh-tw': "吹飛"
		},

		damage: 60,

		effect: {
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "バイバイフライト",
			'zh-tw': "去去飛行"
		},

		effect: {
			ja: "このポケモンと、相手のベンチポケモンを1匹選び、それぞれのポケモンと、ついているすべてのカードを、山札にもどして切る。相手のベンチポケモンがいないなら、このワザは失敗。",
			'zh-tw': "選擇1隻對手的備戰寶可夢，將這隻寶可夢與所選的寶可夢，與各自身上附加的卡，全部放回牌庫並重洗。若對手沒有備戰寶可夢，則這個招式失敗。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card