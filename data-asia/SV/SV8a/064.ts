import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヨマワル",
		id: "Duskull",
		th: "โยมาวารุ",
		'zh-tw': "夜巡靈",
		'zh-cn': "夜巡靈"
	},

	illustrator: "IKEDA Saki",
	rarity: "None",
	category: "Pokemon",
	dexId: [355],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "真っ赤な ひとつ目で 睨みつけられ 生体エネルギーを 吸われるとき ひどい 寒気に 襲われる。",
		id: "Ketika vitalitas terisap akibat dipelototi oleh mata tunggal merah padam Pokémon ini, rasa menggigil yang luar biasa akan menyerang.",
		th: "จะรู้สึกหนาวสั่นอย่างรุนแรงตอนที่ถูกมันจ้องเขม็งด้วยนัยน์ตาเดียวสีแดงฉานและสูบพลังงานชีวิตไป",
		'zh-tw': "遭到牠鮮紅的獨眼瞪視 並且被吸取生物能量時， 會受到嚴重的寒氣侵襲。",
		'zh-cn': "遭到牠鮮紅的獨眼瞪視 並且被吸取生物能量時， 會受到嚴重的寒氣侵襲。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "むかえにいく",
			id: "Pergi Menjemput",
			th: "รับวิญญาณ",
			'zh-tw': "前往渡魂",
			'zh-cn': "前往渡魂"
		},

		effect: {
			ja: "自分のトラッシュから「ヨマワル」を3枚まで選び、ベンチに出す。",
			id: "Pilih paling banyak 3 lembar Duskull dari Trash sendiri, lalu masukkan ke Cadangan.",
			th: "เลือกการ์ด [โยมาวารุ] ได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา วางบนเบนช์",
			'zh-tw': "從自己的棄牌區選擇最多3張「夜巡靈」，放置於備戰區。",
			'zh-cn': "從自己的棄牌區選擇最多3張「夜巡靈」，放置於備戰區。"
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "つぶやく",
			id: "Bergumam",
			th: "งึมงำ",
			'zh-tw': "囈語",
			'zh-cn': "囈語"
		},

		damage: 30
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
	regulationMark: "H"
}

export default card