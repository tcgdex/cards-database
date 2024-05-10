import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "スリープ",
		'zh-tw': "催眠貘",
		th: "สลีป",
		id: "Drowzee"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [96],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "突き出た 鼻を ひくひくさせると どこの だれが どんな 夢を 見ているのか 全部 わかるという。",
		'zh-tw': "據說當牠抽動凸出的鼻子，無論是誰在哪裡做著什麼夢， 都會被牠知道得一清二楚。",
		th: "ว่ากันว่าพอมันใช้จมูกที่ยื่นออกมาดมฟุดฟิด ก็จะรู้หมดว่าใครที่อยู่ตรงไหนกำลังฝันอะไรอยู่",
		id: "Dikabarkan Drowzee dapat mengetahui segalanya tentang siapa, di mana, dan sedang bermimpi apa dengan mengedutkan hidungnya yang menonjol."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "むりやりねかす",
			'zh-tw': "強行入眠",
			th: "บังคับให้นอน",
			id: "Menidurkan Paksa"
		},

		effect: {
			ja: "相手は相手自身のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをねむりにする。",
			'zh-tw': "對手選擇對手自己的1隻備戰寶可夢，與戰鬥寶可夢互換。然後，將新上場的寶可夢【睡眠】。",
			th: "ฝ่ายตรงข้ามเลือกโปเกมอนบนเบนช์ฝ่ายตรงข้ามเอง 1 ตัว สลับกับโปเกมอนบนตำแหน่งต่อสู้ หลังจากนั้น ทำให้โปเกมอนที่เพิ่งออกมาใหม่เป็นสภาวะ[หลับ]",
			id: "Lawan memilih 1 Pokémon Cadangannya, lalu menukarnya dengan Pokémon Bertarung. Setelah itu, ubah kondisi Pokémon Bertarung yang baru menjadi Tidur."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ひっぱたく",
			'zh-tw': "重摑",
			th: "ตบแรง",
			id: "Menepuk"
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
	regulationMark: "G"
}

export default card