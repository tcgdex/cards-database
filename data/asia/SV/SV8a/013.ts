import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "シガロコ",
		'id-id': "Rellor",
		'th-th': "ชิกาโรโค",
		'zh-tw': "蟲滾泥",
		'zh-cn': "蟲滾泥"
	},

	illustrator: "Saboteri",
	rarity: "None",
	category: "Pokemon",
	dexId: [953],
	hp: 50,
	types: ["Grass"],

	description: {
		'ja-jp': "泥玉を 転がしながら 進化の エネルギーを 熟成させる。 やがて 進化のときを 迎える。",
		'id-id': "Rellor mematangkan energi evolusi sambil menggelindingkan bola lumpur. Pada akhirnya, waktu evolusi Pokémon ini akan tiba.",
		'th-th': "บ่มพลังงานที่ใช้ในการวิวัฒนาการให้สุกไปในขณะที่กลิ้งก้อนโคลน เพื่อรอช่วงเวลาที่จะได้วิวัฒนาการ",
		'zh-tw': "會一邊滾著泥巴球， 一邊使進化的能量成熟。 最終會迎接進化的時刻。",
		'zh-cn': "會一邊滾著泥巴球， 一邊使進化的能量成熟。 最終會迎接進化的時刻。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "ちょっとつっこむ",
			'id-id': "Gasak Sedikit",
			'th-th': "จุ้นจ้านหน่อย",
			'zh-tw': "撞一下",
			'zh-cn': "撞一下"
		},

		damage: 30,

		effect: {
			'ja-jp': "このポケモンにも10ダメージ。",
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 10.",
			'th-th': "โปเกมอนนี้ก็จะได้รับแดเมจ 10 ด้วย",
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			'zh-cn': "這隻寶可夢也受到10點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803126,
				tcgplayer: 602341,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				tcgplayer: 604512,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602342,
			},
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card