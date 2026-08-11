import { Card } from "models/database/card"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "キバニア",
		'zh-tw': "利牙魚",
		'th-th': "คิบาเนีย"
	},

	illustrator: "Jerky",
	rarity: "Common",
	category: "Pokemon",
	dexId: [318],
	hp: 50,
	types: ["Water"],

	description: {
		'ja-jp': "鋭い キバと たくましい 顎を もつ。 船乗りたちは キバニアの すみかには けっして 近づかない。",
		'zh-tw': "擁有銳利的牙齒和結實的下巴。船員們絕對不會去靠近利牙魚棲息的地方。",
		'th-th': "มีเขี้ยวที่คมและกรามอันทรงพลังอยู่ ลูกเรือจะไม่เข้าใกล้รังของคิบาเนียเป็นอันขาด"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "するどいキバ",
			'zh-tw': "銳利之牙",
			'th-th': "เขี้ยวคม"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 723951,
				tcgplayer: 566975,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
}

export default card