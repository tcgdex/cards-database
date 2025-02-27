import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ビワ",
		id: "Eria",
		'zh-tw': "枇琶",
		'zh-cn': "枇琶"
	},

	illustrator: "Ryuta Fuse",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "相手の手札を見て、その中からグッズを2枚まで選び、トラッシュする。",
		id: "Lihat Kartu Pegangan lawan, pilih paling banyak 2 lembar Item di antaranya, lalu buang ke Trash.",
		'zh-tw': "查看對手的手牌，從其中選擇最多2張物品卡，將其丟棄。",
		'zh-cn': "查看對手的手牌，從其中選擇最多2張物品卡，將其丟棄。"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card