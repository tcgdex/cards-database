import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "長毛巨魔",
		'zh-cn': "長毛巨魔",
		ja: "オーロンゲ"
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		'zh-tw': "生活在森林深處。即使因進化 而變得強壯挺拔，也改不掉做 無謂的壞事和惡作劇的習慣。",
		'zh-cn': "生活在森林深處。即使因進化 而變得強壯挺拔，也改不掉做 無謂的壞事和惡作劇的習慣。",
		ja: "森の 奥深くに 暮らしている。 立派に 進化しても くだらない 悪さと 悪戯は やめないのだ。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "挑釁抓擊",
			'zh-cn': "挑釁抓擊",
			ja: "ちょうはつクラッチ"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換（由對手選擇放置於戰鬥場的寶可夢）。然後，新上場的寶可夢受到160點傷害。",
			'zh-cn': "將對手的戰鬥寶可夢與備戰寶可夢互換（由對手選擇放置於戰鬥場的寶可夢）。然後，新上場的寶可夢受到160點傷害。",
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える（バトル場に出すポケモンは相手が選ぶ）。その後、新しく出てきたポケモンに160ダメージ。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "擊拳",
			'zh-cn': "擊拳",
			ja: "グーパンチ"
		},

		effect: {
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。"
		},

		damage: 160,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [861]
}

export default card