import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ザングース",
		'zh-tw': "貓鼬斬"
	},

	illustrator: "aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [335],
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "ハブネークとは 因縁の あいだ。 出会うと すかさず 前足の ツメを 広げて 威嚇するのだ。",
		'zh-tw': "和飯匙蛇是死對頭。一旦撞見彼此，就會立刻 張開前腳的爪子來威嚇對方。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ひきずりだす",
			'zh-tw': "拖出"
		},

		effect: {
			ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに30ダメージ。",
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到30點傷害。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "スラッシュクロー",
			'zh-tw': "利爪揮砍"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card