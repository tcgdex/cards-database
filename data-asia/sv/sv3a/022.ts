import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "グライガー",
		'zh-tw': "天蠍"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [207],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "顔面 めがけて 飛んでくる。 張りつかれた 獲物が 驚く あいだに 毒針を 刺しこむ。",
		'zh-tw': "會朝著獵物迎面飛來， 然後趁著被纏上的獵物 驚慌失措時刺入毒針。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "どくどく",
			'zh-tw': "劇毒"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は2個になる。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【中毒】。因這個【中毒】而放置的傷害指示物的數量改為2個。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card