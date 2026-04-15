import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "勇士雄鷹",
		'zh-cn': "勇士雄鷹",
		ja: "ウォーグル"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "只要是為了夥伴， 即使身受重傷也不會停止戰鬥。 是勇敢的天空戰士。",
		'zh-cn': "只要是為了夥伴， 即使身受重傷也不會停止戰鬥。 是勇敢的天空戰士。",
		ja: "仲間の ためなら どれだけ 傷つこうとも 戦いを やめない 勇敢な 大空の 戦士。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "拖出",
			'zh-cn': "拖出",
			ja: "ひきずりだす"
		},

		effect: {
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到40點傷害。",
			'zh-cn': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。然後，新上場的寶可夢受到40點傷害。",
			ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに40ダメージ。"
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "爆破之風",
			'zh-cn': "爆破之風",
			ja: "ブラストウインド"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [628],

	thirdParty: {
		cardmarket: 787610
	}
}

export default card