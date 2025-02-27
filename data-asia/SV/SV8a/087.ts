import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "チヲハウハネ",
		id: "Slither Wing",
		th: "ปีกไล้พสุธา",
		'zh-tw': "爬地翅",
		'zh-cn': "爬地翅"
	},

	illustrator: "Shinji Kanda",
	rarity: "None",
	category: "Pokemon",
	dexId: [988],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "古い 本で チヲハウハネと 紹介されている 生物に 似た点が ある 謎のポケモン。",
		id: "Pokémon misterius yang memiliki kemiripan dengan makhluk hidup bernama Slither Wing yang diperkenalkan dalam sebuah buku kuno.",
		th: "โปเกมอนปริศนาที่มีบางจุดคล้ายคลึงกับสิ่งมีชีวิตที่ถูกเรียกว่าปีกไล้พสุธาในหนังสือเก่าแก่",
		'zh-tw': "與古老書籍裡介紹的一種 叫做爬地翅的生物有著 相似點的神秘寶可夢。",
		'zh-cn': "與古老書籍裡介紹的一種 叫做爬地翅的生物有著 相似點的神秘寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "てつつぶし",
			id: "Pelumat Besi",
			th: "บดเหล็ก",
			'zh-tw': "鐵碎",
			'zh-cn': "鐵碎"
		},

		damage: "20+",

		effect: {
			ja: "相手の場に「未来」のポケモンがいるなら、120ダメージ追加。",
			id: "Jika ada Pokémon Futur di Arena lawan, kerusakan yang diberikan bertambah sejumlah 120.",
			th: "ถ้าบนกระดานฝ่ายตรงข้ามมีโปเกมอน [อนาคต] อยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			'zh-tw': "若對手的場上有「未來」寶可夢，則增加120點傷害。",
			'zh-cn': "若對手的場上有「未來」寶可夢，則增加120點傷害。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "スマッシュウイング",
			id: "Smash Wing",
			th: "สแมชวิง",
			'zh-tw': "粉碎之翼",
			'zh-cn': "粉碎之翼"
		},

		damage: 130,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
			id: "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash.",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card