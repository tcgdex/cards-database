import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ベトベトン",
		'zh-tw': "臭臭泥",
		'th-th': "เบโตเบตัน",
		'id-id': "Muk"
	},

	illustrator: "Haru Akasaka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [89],
	hp: 140,
	types: ["Darkness"],

	description: {
		'ja-jp': "汚い ヘドロが 全身に まとわりつく。 足跡に 触っただけで 毒に 侵される。",
		'zh-tw': "全身上下沾滿污泥。光是碰到牠的足跡， 都會受到毒素的侵襲。",
		'th-th': "โคลนสกปรกติดทั่วตัว แค่ไปโดนร่องรอยที่มันขยับตัวผ่านก็ติดพิษแล้ว",
		'id-id': "Limbah kotor menyelimuti tubuh Muk. Siapa pun akan keracunan walau hanya menyentuh jejak kakinya."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "どくぶくろ",
			'zh-tw': "毒袋",
			'th-th': "ถุงพิษ",
			'id-id': "Kantong Racun"
		},

		effect: {
			'ja-jp': "このポケモンがいるかぎり、相手のどくのポケモンは、進化・退化してもどくが回復しない。",
			'zh-tw': "只要這隻寶可夢在場上，對手的【中毒】的寶可夢，就算進化・退化，【中毒】也不會恢復。",
			'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนที่เป็นสภาวะ[พิษ]ของฝ่ายตรงข้าม แม้จะวิวัฒนาการหรือวิวัฒนาการย้อนกลับก็จะไม่หายจากสภาวะ[พิษ]",
			'id-id': "Selama Pokémon ini ada di Arena, Pokémon lawan yang mengalami kondisi Racun tidak pulih kondisi Racunnya meskipun melakukan evolusi atau diturunkan tingkat evolusinya."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ポイズンアタック",
			'zh-tw': "猛毒攻擊",
			'th-th': "พอยซันแอทแทก",
			'id-id': "Poison Attack"
		},

		damage: 100,

		effect: {
			'ja-jp': "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			'th-th': "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[พิษ]",
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 693019,
				tcgplayer: 567169,
			},
		},
	],

	retreat: 4,
	regulationMark: "G",
}

export default card