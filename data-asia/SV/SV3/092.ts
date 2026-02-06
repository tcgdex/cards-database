import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "ジグザグマ",
		'zh-tw': "蛇紋熊",
		th: "จิกุซากุมะ"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [263],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "好奇心 旺盛な ポケモン。 なににでも 興味を 持つので いつも ジグザグに 歩いている。",
		'zh-tw': "好奇心旺盛的寶可夢。不論對什麼都很感興趣，所以總是呈鋸齒形行走。",
		th: "โปเกมอนที่เต็มเปี่ยมไปด้วยความอยากรู้อยากเห็น เพราะสนใจไปหมดทุกอย่าง ก็เลยเดินซิกแซ็กไปมาเสมอ"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "とびだしヘッド",
			'zh-tw': "魯莽頭擊",
			th: "กระโดดโหม่ง"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ツメできりさく",
			'zh-tw': "利爪劈擊",
			th: "กรงเล็บฉีกร่าง"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 724046
	}
}

export default card