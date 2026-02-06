import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "呆呆王",
		'zh-cn': "呆呆王",
		ja: "ヤドキング"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'zh-tw': "有著非凡的智慧和靈感。 不論何時都不慌不忙， 一副悠然自得的樣子。",
		'zh-cn': "有著非凡的智慧和靈感。 不論何時都不慌不忙， 一副悠然自得的樣子。",
		ja: "すごい 知性と ひらめきを 持っている。 どんなときも あわてず 騒がず のんびりとしている。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "耀閃挑戰",
			'zh-cn': "耀閃挑戰",
			ja: "ひらめきチャレンジ"
		},

		effect: {
			'zh-tw': "將自己的牌庫上方1張卡丟棄，若那張卡為寶可夢卡（「擁有規則的寶可夢」除外），則選擇1個那隻寶可夢持有的招式，作為這個招式使用。",
			'zh-cn': "將自己的牌庫上方1張卡丟棄，若那張卡為寶可夢卡（「擁有規則的寶可夢」除外），則選擇1個那隻寶可夢持有的招式，作為這個招式使用。",
			ja: "自分の山札を上から1枚トラッシュし、そのカードがポケモン（「ルールを持つポケモン」をのぞく）なら、そのポケモンが持っているワザを1つ選び、このワザとして使う。"
		},

		cost: ["Psychic", "Colorless"]
	}, {
		name: {
			'zh-tw': "超念力",
			'zh-cn': "超念力",
			ja: "ちょうねんりき"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [199],

	thirdParty: {
		cardmarket: 779053
	}
}

export default card