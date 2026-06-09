import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "大朝北鼻",
		ja: "ダイノーズ"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		'zh-tw': "會驅使３個小組件去獲取食物或與敵人戰鬥。 本體基本上只負責下命令。",
		ja: "３つの 小さな ユニットを 使い エサを とったり 敵と 戦う。 本体は ほぼ 命令するだけ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "拉鋸磁力",
			ja: "ひっぱりじりょく"
		},

		effect: {
			'zh-tw': "選擇對手的1隻備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到40點傷害。",
			ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに40ダメージ。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "鐵之衝撞",
			ja: "アイアンタックル"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			ja: "このポケモンにも20ダメージ。"
		},

		damage: 120,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 4,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [476],

	thirdParty: {
		cardmarket: 605918
	}
}

export default card