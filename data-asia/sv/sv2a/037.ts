import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ロコン",
		'zh-tw': "六尾"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [37],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "６本の しっぽは 育つごとに 毛並みが 良くなり 美しくなる。 抱きしめると ほんのり 温かい。",
		'zh-tw': "隨著身體的成長，６根尾巴的毛髮也會變得更漂亮。 緊緊抱著牠時能感到微微的溫暖。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ほのおでこがす",
			'zh-tw': "火焰灼燒"
		},

		damage: 20,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【灼傷】。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card