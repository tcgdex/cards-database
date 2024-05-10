import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニドラン♀",
		'zh-tw': "尼多蘭"
	},

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [29],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "硬い 前歯で 木の実を 砕いて 食べる。 ツノの 先は オスより 少し 丸みを 帯びている。",
		'zh-tw': "會用堅硬的門牙咬碎樹果後吃下。角的尖端 會比雄性還要圓一些。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "どくのつの",
			'zh-tw': "毒角"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card