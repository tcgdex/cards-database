import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ネイティ",
		id: "Natu",
		th: "เนที",
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
		ja: "羽が 育ちきって おらず 飛び跳ねるようにして 移動する。 いつも なにかを 見つめている。",
		id: "Karena sayapnya belum tumbuh sempurna, Natu berpindah dengan cara melompat. Pokémon ini selalu memandangi sesuatu.",
		th: "เคลื่อนที่ด้วยการกระโดดหยอย ๆ เพราะปีกยังโตไม่เต็มที่ มักจะจ้องมองอะไรบางอย่างอยู่ตลอดเวลา",
		'zh-tw': "翅膀還沒有完全長好， 所以只能一跳一跳地移動。 一直在注視著什麼。",
		'zh-cn': "翅膀還沒有完全長好， 所以只能一跳一跳地移動。 一直在注視著什麼。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "さんれんづき",
			id: "Tusukan Tiga Kali",
			th: "พุ่งชนสามครั้ง",
			'zh-tw': "三連撞",
			'zh-cn': "三連撞"
		},

		damage: "10×",

		effect: {
			ja: "コインを3回投げ、オモテの数×10ダメージ。",
			id: "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 10 untuk tiap lemparan dengan hasil sisi depan.",
			th: "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x10",
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

	retreat: 1,
	regulationMark: "G"
}

export default card