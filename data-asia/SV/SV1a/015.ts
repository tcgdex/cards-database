import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "カエンジシ",
		'zh-tw': "火炎獅",
		th: "คาเอ็นจิชิ",
		id: "Pyroar"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [668],
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "群れの メスが 協力して 獲物を 仕留める。 メスたちの おかげで 群れが 飢えないのだ。",
		'zh-tw': "雌性們會合力捕殺獵物，所以群體內不會發生 有誰挨餓的狀況。",
		th: "ตัวเมียในฝูงจะช่วยกันจัดการเหยื่อ ต้องขอบคุณเหล่าตัวเมียที่ทำให้ฝูงไม่อดอยาก",
		id: "Para Pyroar betina dalam kelompok saling bekerja sama untuk menghabisi mangsanya. Kelompok Pokémon ini tidak menderita kelaparan berkat mereka."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "こがす",
			'zh-tw': "灼熱",
			th: "เผา",
			id: "Menghanguskan"
		},

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "かけぬける",
			'zh-tw': "飛馳",
			th: "วิ่งแซงหน้า",
			id: "Lari Melewati"
		},

		damage: 60,

		effect: {
			ja: "相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的1隻備戰寶可夢也受到20點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว ก็จะได้รับแดเมจ 20 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini juga memberikan kerusakan sejumlah 20 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701065
	}
}

export default card