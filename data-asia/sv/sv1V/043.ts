import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "フラエッテ",
		'zh-tw': "花葉蒂"
	},

	illustrator: "saino misaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [670],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "自分の エネルギーを 赤色の 波長に 乗せて 花へ 送り 潜在能力を 引き出すのだ。",
		'zh-tw': "會透過紅色的波長把自己的能量傳遞給花， 以激發花的潛在能力。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "マジカルリーフ",
			'zh-tw': "魔法葉"
		},

		damage: "30+",

		effect: {
			ja: "コインを1回投げオモテなら、30ダメージ追加し、このポケモンのHPを「30」回復する。",
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害，並將這隻寶可夢恢復「30」HP。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card