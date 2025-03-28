import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "マシマシラ",
		id: "Munkidori",
		th: "มาชิมาชิระ",
		'zh-tw': "願增猿",
		'zh-cn': "願增猿"
	},

	illustrator: "kodama",
	rarity: "None",
	category: "Pokemon",
	dexId: [1015],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "安全な 場所から 強烈な めまいを 引き起こす 念力を 放って 敵を 翻弄する。",
		id: "Ia memancarkan kekuatan psikokinesisnya yang menyebabkan pusing akut dan mempermainkan musuhnya sesuka hati dari tempat yang aman.",
		th: "อยู่ในสถานที่ที่ปลอดภัยแล้วหยอกล้อศัตรูด้วยการปล่อยพลังจิตที่ทำให้เวียนหัวรุนแรงได้",
		'zh-tw': "會從安全的地方釋放出 能引起強烈頭暈的念力， 把敵手戲弄得團團轉。",
		'zh-cn': "會從安全的地方釋放出 能引起強烈頭暈的念力， 把敵手戲弄得團團轉。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "アドレナブレイン",
			id: "Adrenaline Brain",
			th: "อะดรีนาลีนเบรน",
			'zh-tw': "腎上腺腦力",
			'zh-cn': "腎上腺腦力"
		},

		effect: {
			ja: "このポケモンにエネルギーがついているなら、自分の番に1回使える。自分の場のポケモン1匹にのっているダメカンを3個まで選び、相手の場のポケモン1匹にのせ替える。",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon ini mengenakan Energi {Kegelapan}. Pilih paling banyak 3 Token Kerusakan yang dimiliki 1 Pokémon di Arena sendiri, lalu pindahkan ke 1 Pokémon di Arena lawan.",
			th: "ถ้าโปเกมอนนี้มีพลังงาน[ความมืด]ติดอยู่ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกตัวนับแดเมจที่วางอยู่บนโปเกมอนบนกระดานฝ่ายเรา 1 ตัวได้สูงสุด 3 ตัว ย้ายไปวางที่โปเกมอนบนกระดานฝ่ายตรงข้าม 1 ตัว",
			'zh-tw': "若這隻寶可夢身上附有【惡】能量卡，則在自己的回合時可使用1次。選擇最多3個自己的1隻場上寶可夢身上放置的傷害指示物，改放於對手的1隻場上寶可夢身上。",
			'zh-cn': "若這隻寶可夢身上附有【惡】能量卡，則在自己的回合時可使用1次。選擇最多3個自己的1隻場上寶可夢身上放置的傷害指示物，改放於對手的1隻場上寶可夢身上。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "サイコトリップ",
			id: "Psychotrip",
			th: "ไซโคทริป",
			'zh-tw': "精神歪曲",
			'zh-cn': "精神歪曲"
		},

		damage: 60,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Pusing.",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			'zh-cn': "將對手的戰鬥寶可夢【混亂】。"
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
	regulationMark: "H"
}

export default card