import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "ローブシン",
		'zh-tw': "修建老匠"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Takeshi Nakamura",
	dexId: [534],
	hp: 180,
	types: ["Fighting"],

	description: {
		ja: "力に 頼らず 遠心力を うまく 活かして コンクリートを 振り回す 技を 使いこなせる。",
		'zh-tw': "能夠不憑蠻力， 而是巧妙利用離心力 來揮舞水泥柱使出招式。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "あばれまわる",
			'zh-tw': "暴走"
		},

		damage: 80,

		effect: {
			ja: "このポケモンをこんらんにする。",
			'zh-tw': "將這隻寶可夢【混亂】。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ガッツスイング",
			'zh-tw': "堅毅橫掃"
		},

		damage: 250,

		effect: {
			ja: "このワザは、このポケモンが特殊状態なら、このワザを使うためのエネルギーがこのポケモンについていなくても、使える。",
			'zh-tw': "若這隻寶可夢處於特殊狀態，則使用這個招式所需的能量就算沒有附於這隻寶可夢身上，這個招式也可使用。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card