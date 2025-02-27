import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "イーユイ",
		id: "Chi-Yu",
		th: "อวี้อวี๋",
		'zh-tw': "古玉魚",
		'zh-cn': "古玉魚"
	},

	illustrator: "Dsuke",
	rarity: "None",
	category: "Pokemon",
	dexId: [1004],
	hp: 110,
	types: ["Fire"],

	description: {
		ja: "３０００度の 炎を 操る。 岩や 砂利を 溶かして 作った マグマの海を ゆうゆうと 泳ぐ。",
		id: "Chi-Yu mengendalikan api bersuhu 3000 ℃. Pokémon ini melelehkan batu dan kerikil, lalu berenang dengan tenang di lautan magma buatannya.",
		th: "ควบคุมเปลวไฟที่ร้อนกว่า 3000 องศาเซลเซียส แหวกว่ายในทะเลแม็กมาที่มันสร้างจากการหลอมละลายหินและกรวดอย่างสบาย ๆ",
		'zh-tw': "能操控３０００度的火焰。 會熔化岩石和沙礫做成熔岩海， 並在裡面悠閒自在地游泳。",
		'zh-cn': "能操控３０００度的火焰。 會熔化岩石和沙礫做成熔岩海， 並在裡面悠閒自在地游泳。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "フレアブリング",
			id: "Flare Bring",
			th: "เบิกเปลวเพลิง",
			'zh-tw': "閃焰到來",
			'zh-cn': "閃焰到來"
		},

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のポケモン1匹につける。",
			id: "Pilih paling banyak 2 lembar Energi Dasar {Api} dari Trash sendiri, lalu kenakan pada 1 Pokémon sendiri.",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[ไฟ]] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา 1 ตัว",
			'zh-tw': "從自己的棄牌區選擇最多2張「基本【火】能量」卡，附於自己的1隻寶可夢身上。",
			'zh-cn': "從自己的棄牌區選擇最多2張「基本【火】能量」卡，附於自己的1隻寶可夢身上。"
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "ねたみのごうか",
			id: "Inferno Kedengkian",
			th: "ไฟนรกแห่งความอิจฉา",
			'zh-tw': "嫉妒業火",
			'zh-cn': "嫉妒業火"
		},

		damage: "50+",

		effect: {
			ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、90ダメージ追加。",
			id: "Jika pada giliran lawan sebelumnya, ada Pokémon sendiri yang KO karena kerusakan akibat serangan, kerusakan yang diberikan bertambah sejumlah 90.",
			th: "ในเทิร์นก่อนของฝ่ายตรงข้าม ถ้าโปเกมอนฝ่ายเรา[หมดสภาพ] ด้วยแดเมจของท่าต่อสู้ การโจมตีนี้จะเพิ่มแดเมจอีก 90",
			'zh-tw': "在上個對手的回合，若自己的寶可夢因招式的傷害而【昏厥】了，則增加90點傷害。",
			'zh-cn': "在上個對手的回合，若自己的寶可夢因招式的傷害而【昏厥】了，則增加90點傷害。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card