import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "オニスズメ",
		'zh-tw': "烈雀"
	},

	illustrator: "Gemi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [21],
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "羽が 短く 長い 距離を 飛べない。 せわしなく 動き まわって むしポケモンを ついばむ。",
		'zh-tw': "翅膀很短，無法長距離飛行。 總是不停地四處跳來跳去， 忙著啄食蟲寶可夢。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ぬけがけしんか",
			'zh-tw': "搶先進化"
		},

		effect: {
			ja: "このポケモンは、後攻プレイヤーの最初の番なら、出したばかりでも進化できる。",
			'zh-tw': "若在後攻玩家的最初回合，則這隻寶可夢就算剛使出也可進化。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "スピードひこう",
			'zh-tw': "高速飛行"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card