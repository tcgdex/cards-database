import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "フラエッテ",
		'zh-tw': "花葉蒂",
		th: "ฟลาเอตเต",
		id: "Floette"
	},

	illustrator: "saino misaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [670],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "自分の エネルギーを 赤色の 波長に 乗せて 花へ 送り 潜在能力を 引き出すのだ。",
		'zh-tw': "會透過紅色的波長把自己的能量傳遞給花， 以激發花的潛在能力。",
		th: "ส่งพลังงานของตัวเองให้ดอกไม้ผ่านความยาวคลื่นสีแดงเพื่อดึงพลังที่ซ่อนเร้นอยู่ออกมา",
		id: "Floette mengirimkan energi yang dinaikkan ke gelombang merah kepada bunga dan menarik potensinya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "マジカルリーフ",
			'zh-tw': "魔法葉",
			th: "เมจิคัลลีฟ",
			id: "Magical Leaf"
		},

		damage: "30+",

		effect: {
			ja: "コインを1回投げオモテなら、30ダメージ追加し、このポケモンのHPを「30」回復する。",
			'zh-tw': "擲1次硬幣若為正面，則增加30點傷害，並將這隻寶可夢恢復「30」HP。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว การโจมตีนี้จะเพิ่มแดเมจอีก 30 ฟื้นฟู HP ของโปเกมอนนี้ [30]",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, kerusakan yang diberikan bertambah sejumlah 30, lalu pulihkan HP Pokémon ini sejumlah 30."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693118
	}
}

export default card