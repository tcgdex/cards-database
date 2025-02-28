import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "カゲボウズ",
		'zh-tw': "怨影娃娃",
		'zh-cn': "怨影娃娃"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [353],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "恨みや 妬みの 感情が 大好物。 ピンと立った ツノが 人間の 気持ちを キャッチする。",
		'zh-tw': "最愛吃像是怨恨和嫉妒 這類的感情。會用豎立 的角來察覺人類的心情。",
		'zh-cn': "最愛吃像是怨恨和嫉妒 這類的感情。會用豎立 的角來察覺人類的心情。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ホロウショット",
			'zh-tw': "陰森射擊",
			'zh-cn': "陰森射擊"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "I"
}

export default card