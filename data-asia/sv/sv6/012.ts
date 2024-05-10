import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "カミッチュ",
		'zh-tw': "裹蜜蟲"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Saboteri",
	dexId: [1011],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "頭を 出している そとッチュと 尻尾を 出している なかッチュが 助け合い りんごのなかで 暮らす。",
		'zh-tw': "由露出了頭部的外頭蟲與 露出了尾巴的裡頭蟲相扶相持， 一起在蘋果裡面生活。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "おまつりおんど",
			'zh-tw': "祭典樂舞"
		},

		effect: {
			ja: "場に「お祭り会場」が出ているなら、このポケモンは、持っているワザを2回連続で使える。（1回目のワザで相手のバトルポケモンがきぜつしたなら、次のバトルポケモンが出たあと、2回目のワザを使う。）",
			'zh-tw': "若場上有「祭典會場」，則這隻寶可夢可使用持有的招式2次。（若對手的戰鬥寶可夢因第1次的招式而【昏厥】了，則在下一隻寶可夢放置後，使用第2次的招式。）"
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ともだちのわ",
			'zh-tw': "朋友之環"
		},

		damage: "20×",

		effect: {
			ja: "自分のベンチポケモンの数×20ダメージ。",
			'zh-tw': "造成自己的備戰寶可夢的數量×20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card