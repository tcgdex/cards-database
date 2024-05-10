import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "チルタリスex",
		'zh-tw': "七夕青鳥ex"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Dragon"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ハミングヒール",
			'zh-tw': "哼唱治癒"
		},

		effect: {
			ja: "自分の番に1回使える。自分のポケモン全員のHPを、それぞれ「20」回復する。",
			'zh-tw': "在自己的回合時可使用1次。將自己的所有寶可夢各恢復「20」HP。"
		}
	}],

	attacks: [{
		cost: ["Water", "Metal"],

		name: {
			ja: "ひかりのはどう",
			'zh-tw': "光之波動"
		},

		damage: 140,

		effect: {
			ja: "次の相手の番、このポケモンは相手のポケモンが使うワザの効果を受けない。",
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到對手的寶可夢使用招式的效果的影響。"
		}
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card