import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "シルシュルー",
		'zh-tw': "滋汁鼴"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	dexId: [944],
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "温厚だが 怒らせると 毒が 染みこんだ 鋭い 前歯で 咬みつき 痺れさせてくるぞ。",
		'zh-tw': "雖然性情溫馴，但一旦被激怒，就會用滲入了毒素的尖銳門牙 過來咬住你，讓你全身麻痺不已。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "どくえき",
			'zh-tw': "毒液"
		},

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