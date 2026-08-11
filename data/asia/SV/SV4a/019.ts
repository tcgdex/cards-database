import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "リククラゲex",
		'zh-tw': "陸地水母ex",
		'th-th': "ริคุคุราเกะex",
		'id-id': "Toedscruel ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Grass"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "まもりのきんし",
			'zh-tw': "守護菌絲",
			'th-th': "เส้นใยราปกป้อง",
			'id-id': "Hifa Pelindung"
		},

		effect: {
			'ja-jp': "このポケモンがいるかぎり、エネルギーがついている自分のポケモン全員は、相手のポケモンが使うワザの効果を受けない。（すでに受けている効果は、なくならない。）",
			'zh-tw': "只要這隻寶可夢在場上，自己的所有身上附有能量卡的寶可夢，不會受到對手的寶可夢使用招式的效果的影響。（已經受到的效果不會消除。）",
			'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนฝ่ายเราทุกตัวที่มีพลังงานติดอยู่ จะไม่ได้รับเอฟเฟกต์ของท่าต่อสู้ที่โปเกมอนฝ่ายตรงข้ามใช้ (เอฟเฟกต์ที่ได้รับไปแล้ว จะไม่หายไป)",
			'id-id': "Selama Pokémon ini ada di Arena, semua Pokémon sendiri yang mengenakan Energi tidak menerima efek akibat serangan yang digunakan oleh Pokémon lawan. (Efek yang telah dialami tidak dipulihkan.)"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			'ja-jp': "コロニーラッシュ",
			'zh-tw': "菌落猛攻",
			'th-th': "โคโลนีรัช",
			'id-id': "Colony Rush"
		},

		damage: "80+",

		effect: {
			'ja-jp': "自分のベンチのエネルギーがついているポケモンの数×40ダメージ追加。",
			'zh-tw': "增加自己的備戰區身上附有【草】能量卡的寶可夢的數量×40點傷害。",
			'th-th': "แดเมจจะเพิ่มตามจำนวนโปเกมอนที่มีพลังงาน[หญ้า]ติดอยู่บนเบนช์ฝ่ายเรา x40",
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 40 untuk tiap Pokémon yang mengenakan Energi {Daun} di Cadangan sendiri."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 746221,
				tcgplayer: 567371,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card