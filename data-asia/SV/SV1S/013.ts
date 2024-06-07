import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "コイキング",
		'zh-tw': "鯉魚王",
		th: "คอยคิง",
		id: "Magikarp"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [129],
	hp: 30,
	types: ["Water"],

	description: {
		ja: "力のない 情けない ポケモン。 たまに 高く 飛び跳ねても ２メートルを 超すのが やっとだ。",
		'zh-tw': "沒力量的可憐寶可夢。偶爾跳得比較高時， 也只是勉強高過2公尺而已。",
		th: "เป็นโปเกมอนที่อ่อนแอและน่าสมเพช นาน ๆ ทีกระโดดสูงเกิน 2 เมตรก็นับว่าดีแล้ว",
		id: "Pokémon menyedihkan yang tidak memiliki kekuatan. Walau kadang Magikarp melompat tinggi, ketinggiannya hampir tidak dapat melampaui 2 meter."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "はねとぶ",
			'zh-tw': "飛跳",
			th: "เด้งกระโดด",
			id: "Melonjak"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手のポケモン1匹に、10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "擲1次硬幣若為正面，則對手的1隻寶可夢受到10點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว ทำแดเมจ 10 กับโปเกมอนฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, serangan ini memberikan kerusakan sejumlah 10 kepada 1 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card