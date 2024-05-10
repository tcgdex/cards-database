import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "パラセクト",
		'zh-tw': "派拉斯特"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [47],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "ムシの 方は ほぼ 死んでいて 本体は 背中の キノコだ。 もげると もう 動かなくなる。",
		'zh-tw': "本體是背上的蘑菇，底下的蟲子幾乎已經死亡。 一旦蘑菇脫落，牠就再也不會動了。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "きんしをばらまく",
			'zh-tw': "散佈菌絲"
		},

		effect: {
			ja: "コインを2回投げ、オモテの数ぶんまで、自分の山札からポケモンを選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "擲2次硬幣，從自己的牌庫選擇最多與正面出現的次數相同數量的【草】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ツメできりさく",
			'zh-tw': "利爪劈擊"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card