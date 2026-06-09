import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "マタドガス",
		'zh-tw': "雙彈瓦斯",
		th: "มาตาโดกัซ",
		id: "Weezing"
	},

	illustrator: "Shibuzoh.",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [110],
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "ごくまれに 突然変異で 双子の 小さい ドガースが 連結したまま 出ることがある。",
		'zh-tw': "有時會因為非常罕見的突變， 出現２個連在一起的 雙胞胎小瓦斯彈。",
		th: "มีบ้างที่โดกาซคู่แฝดตัวเล็ก ๆ จะเชื่อมตัวต่อกันออกมาทั้งอย่างนั้น เนื่องจากกระบวนการเปลี่ยนแปลงทางธรรมชาติที่เกิดขึ้นไม่บ่อยนัก",
		id: "Walau langka, kadang terjadi mutasi sehingga Koffing kecil kembar muncul dalam keadaan tetap menyatu."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "もろともボム",
			'zh-tw': "齊爆炸彈",
			th: "บอมบ์พร้อมกันไป",
			id: "Bom Kena Bersama"
		},

		effect: {
			ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、自分はコインを1回投げる。オモテなら、ワザを使ったポケモンをきぜつさせる。",
			'zh-tw': "這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害而【昏厥】時，自己擲1次硬幣。若為正面，則將使用招式的寶可夢【昏厥】。",
			th: "เมื่อโปเกมอนนี้ อยู่บนตำแหน่งต่อสู้และได้รับแดเมจของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้ามและ[หมดสภาพ]แล้ว ฝ่ายเราทอยเหรียญ 1 ครั้ง ถ้าออกหัว จะทำให้โปเกมอนที่ใช้ท่าต่อสู้[หมดสภาพ]",
			id: "Saat Pokémon ini ada di Arena Bertarung dan KO karena menerima kerusakan akibat serangan dari Pokémon lawan, pemain melempar koin 1 kali. Jika hasilnya sisi depan, Pokémon yang telah menggunakan serangan KO."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "スピンガス",
			'zh-tw': "旋轉瓦斯",
			th: "สปินก๊าซ",
			id: "Spin Gas"
		},

		damage: 50,

		effect: {
			ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			'zh-tw': "對手的所有備戰寶可夢也各受到10點傷害。 [在備戰區不計算弱點・抵抗力。]",
			th: "โปเกมอนบนเบนช์ฝ่ายตรงข้ามทุกตัว ก็จะได้รับแดเมจตัวละ 10 ด้วย {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			id: "Serangan ini juga memberikan kerusakan masing-masing sejumlah 10 kepada semua Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719563
	}
}

export default card