import { Card } from "models/database/card"
import Set from "../SV4K"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "シードラ",
		'zh-tw': "海刺龍",
		'th-th': "ซีดรา",
		'ko-kr': "시드라"
	},

	illustrator: "otumami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [117],
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "細い 口だが 吸引力は 強い。 口より 大きな エサも 一瞬で 吸いこみ 食べるぞ。",
		'zh-tw': "嘴部雖然細，但吸力卻很強。就算是比嘴還要大的食物， 也都能瞬間吸進口裡吃掉。",
		'th-th': "ถึงแม้ปากจะเรียวเล็กแต่มีพลังดูดสูง ไม่ว่าจะเป็นเหยื่อที่มีขนาดใหญ่กว่าปากของตนก็สามารถดูดเข้าไปกินได้ภายในชั่วพริบตา",
		'ko-kr': "입은 가늘지만 흡인력은 강하다. 입보다 큰 먹이도 순식간에 빨아들여 먹는다."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'ja-jp': "バブルこうせん",
			'zh-tw': "泡沫光線",
			'th-th': "บับเบิลบีม",
			'ko-kr': "거품광선"
		},

		damage: 50,

		effect: {
			'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 마비로 만든다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 741316,
				tcgplayer: 565773,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card