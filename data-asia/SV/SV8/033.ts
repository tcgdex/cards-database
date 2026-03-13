import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ピカチュウex",
		'zh-tw': "皮卡丘ex",
		'zh-cn': "皮卡丘ex"
	},

	illustrator: "aky CG Works",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "がんばりハート",
			'zh-tw': "‌‌勤奮之心",
			'zh-cn': "‌‌勤奮之心"
		},

		effect: {
			ja: "このポケモンのHPがまんたんの状態で、このポケモンがワザのダメージを受けてきぜつするとき、きぜつせず、残りHPが「10」の状態で場に残る。",
			'zh-tw': "‌這隻寶可夢的HP是全滿的狀態下，這隻寶可夢受到招式的傷害而【昏厥】時，這隻寶可夢不會【昏厥】，而是以剩餘HP為「10」的狀態留在場上。",
			'zh-cn': "‌這隻寶可夢的HP是全滿的狀態下，這隻寶可夢受到招式的傷害而【昏厥】時，這隻寶可夢不會【昏厥】，而是以剩餘HP為「10」的狀態留在場上。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Lightning", "Metal"],

		name: {
			ja: "トパーズボルト",
			'zh-tw': "黃玉伏特",
			'zh-cn': "黃玉伏特"
		},

		damage: 300,

		effect: {
			ja: "このポケモンについているエネルギーを3個選び、トラッシュする。",
			'zh-tw': "選擇3個這隻寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "選擇3個這隻寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 793467
	}
}

export default card