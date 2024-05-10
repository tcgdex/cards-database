import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ミカルゲ",
		'zh-tw': "花岩怪"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [442],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "１０８個の 魂で できている。 二度と 悪さを しないように 要石に 縛りつけられている。",
		'zh-tw': "由１０８個靈魂構成。為了防止自己再度作惡， 而被綁縛到了楔石上。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "ちょうはつ",
			'zh-tw': "挑釁"
		},

		effect: {
			ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			'zh-tw': "選擇1隻對手的備戰寶可夢，與戰鬥寶可夢互換。"
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "ほろびのせんこく",
			'zh-tw': "滅亡宣告"
		},

		effect: {
			ja: "コインを2回投げ、すべてオモテなら、相手のバトルポケモンをきぜつさせる。",
			'zh-tw': "擲2次硬幣，若全部為正面，則將對手的戰鬥寶可夢【昏厥】。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card