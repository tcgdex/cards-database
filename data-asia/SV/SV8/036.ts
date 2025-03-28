import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ジバコイル",
		'zh-tw': "自爆磁怪",
		'zh-cn': "自爆磁怪"
	},

	illustrator: "Po-Suzuki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [462],
	hp: 170,
	types: ["Lightning"],

	description: {
		ja: "特殊な 磁場で レアコイルの 分子 構造が 組み換えられて ジバコイルに 進化した。",
		'zh-tw': "在特殊磁場的影響下， 三合一磁怪的分子構造受到重組， 從而進化成了自爆磁怪。",
		'zh-cn': "在特殊磁場的影響下， 三合一磁怪的分子構造受到重組， 從而進化成了自爆磁怪。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "きょうりょくじば",
			'zh-tw': "強勁磁場",
			'zh-cn': "強勁磁場"
		},

		damage: 80,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。次の相手の番、このワザを受けたポケモンは、にげられない。",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			'zh-cn': "將對手的戰鬥寶可夢【混亂】。在下個對手的回合，受到這個招式的寶可夢無法撤退。"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "でんじほう",
			'zh-tw': "電磁炮",
			'zh-cn': "電磁炮"
		},

		damage: 180,

		effect: {
			ja: "次の自分の番、このポケモンは「でんじほう」が使えない。",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「電磁炮」。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用「電磁炮」。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card