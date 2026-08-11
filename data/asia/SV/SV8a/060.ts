import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ネイティ",
		'id-id': "Natu",
		'th-th': "เนที",
		'zh-tw': "天然雀",
		'zh-cn': "天然雀"
	},

	illustrator: "ryoma uratsuka",
	rarity: "None",
	category: "Pokemon",
	dexId: [177],
	hp: 50,
	types: ["Psychic"],

	description: {
		'ja-jp': "羽が 育ちきって おらず 飛び跳ねるようにして 移動する。 いつも なにかを 見つめている。",
		'id-id': "Karena sayapnya belum tumbuh sempurna, Natu berpindah dengan cara melompat. Pokémon ini selalu memandangi sesuatu.",
		'th-th': "เคลื่อนที่ด้วยการกระโดดหยอย ๆ เพราะปีกยังโตไม่เต็มที่ มักจะจ้องมองอะไรบางอย่างอยู่ตลอดเวลา",
		'zh-tw': "翅膀還沒有完全長好， 所以只能一跳一跳地移動。 一直在注視著什麼。",
		'zh-cn': "翅膀還沒有完全長好， 所以只能一跳一跳地移動。 一直在注視著什麼。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'ja-jp': "さんれんづき",
			'id-id': "Tusukan Tiga Kali",
			'th-th': "พุ่งชนสามครั้ง",
			'zh-tw': "三連撞",
			'zh-cn': "三連撞"
		},

		damage: "10×",

		effect: {
			'ja-jp': "コインを3回投げ、オモテの数×10ダメージ。",
			'id-id': "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan.",
			'th-th': "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×10點傷害。",
			'zh-cn': "擲3次硬幣，造成正面出現的次數×10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803173,
				tcgplayer: 602420,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				tcgplayer: 604544,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602421,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card