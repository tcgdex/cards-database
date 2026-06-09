import { Card } from "../../../interfaces"
import Set from "../SV4M"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノコウベ",
		'zh-tw': "鐵脖頸",
		th: "คอเหล็ก",
		ko: "무쇠머리"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [993],
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "古い 書物に 記された テツノコウベという 物体は このポケモンかも しれない。",
		'zh-tw': "老舊書籍所記載的叫做鐵脖頸的物體，說不定就是這隻寶可夢。",
		th: "วัตถุที่เรียกว่าคอเหล็กที่ระบุในบันทึกเก่าแก่อาจเป็นโปเกมอนตัวนี้",
		ko: "오래된 서적에 기록된 \"무쇠머리\"라는 물체는 이 포켓몬을 말하는 것일지도 모른다."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ホーミングヘッド",
			'zh-tw': "自動導向頭擊",
			th: "โฮมมิงเฮด",
			ko: "호밍헤드"
		},

		effect: {
			ja: "ダメカンがのっている相手のポケモン3匹に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的身上放置有傷害指示物的3隻寶可夢各受到50點傷害。[在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนฝ่ายตรงข้าม 3 ตัวที่มีตัวนับแดเมจวางอยู่ จะได้รับแดเมจตัวละ 50 {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			ko: "데미지 카운터가 올려져 있는 상대의 포켓몬 3마리에게 각각 50데미지를 준다. (벤치는 약점, 저항력 계산을 하지 않는다.)"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "バリオンビーム",
			'zh-tw': "重子光束",
			th: "แบรีออนบีม",
			ko: "바리온빔"
		},

		damage: 150,

		effect: {
			ja: "このワザは、このポケモンに「ブーストエナジー 未来」がついているなら、エネルギー3個で使える。",
			'zh-tw': "若這隻寶可夢身上附有「驅勁能量 未來」，則這個招式只需要3個【無】能量即可使用。",
			th: "ท่าต่อสู้นี้ ถ้าโปเกมอนนี้มี [บูสต์เอนเนอร์จี้ อนาคต] ติดอยู่ สามารถใช้ได้ด้วยพลังงาน[ไร้สี] 3 ลูก",
			ko: "이 기술은 이 포켓몬에게 「부스트에너지 미래」가 붙어 있다면 (무색) 에너지 3개로 사용할 수 있다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card