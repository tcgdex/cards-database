import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ミライドン",
		'zh-tw': "密勒頓",
		'zh-cn': "密勒頓"
	},

	illustrator: "Nurikabe",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1008],
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "古い 書物に 名が ある テツノオロチらしい。 雷で 大地を 灰に 変えたという。",
		'zh-tw': "牠似乎就是古書裡所提及的 鐵大蛇。傳說牠曾用雷電 將大地化成了一片灰。",
		'zh-cn': "牠似乎就是古書裡所提及的 鐵大蛇。傳說牠曾用雷電 將大地化成了一片灰。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "プロテクトコード",
			'zh-tw': "防護代碼",
			'zh-cn': "防護代碼"
		},

		damage: 40,

		effect: {
			ja: "次の相手の番、自分の「未来」のポケモン全員は、「ポケモンex」からワザのダメージを受けない。このポケモンがバトル場をはなれたら、この効果はなくなる。",
			'zh-tw': "在下個對手的回合，自己的所有「未來」寶可夢不會受到「寶可夢【ex】」招式的傷害。若這隻寶可夢離開戰鬥場，則這個效果消除。",
			'zh-cn': "在下個對手的回合，自己的所有「未來」寶可夢不會受到「寶可夢【ex】」招式的傷害。若這隻寶可夢離開戰鬥場，則這個效果消除。"
		}
	}, {
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			ja: "サンダークロー",
			'zh-tw': "閃電爪",
			'zh-cn': "閃電爪"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card