import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙漠蜻蜓V",
		ja: "フライゴンV"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "沙沫",
			ja: "すなしぶき"
		},

		damage: 70,
		cost: ["Grass", "Fighting"]
	}, {
		name: {
			'zh-tw': "龍之脈衝",
			ja: "ドラゴンインパルス"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【VMAX】」，則增加160點傷害。這個情況下，選擇3個這隻寶可夢身上附加的能量，將其丟棄。",
			ja: "相手のバトルポケモンが「ポケモンVMAX」なら、160ダメージ追加。その場合、このポケモンについているエネルギーを3個選び、トラッシュする。"
		},

		damage: "160＋",
		cost: ["Grass", "Fighting", "Fighting", "Colorless"]
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Double rare"
}

export default card