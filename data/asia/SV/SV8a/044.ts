import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ナミイルカ",
		'id-id': "Finizen",
		'th-th': "นามิอิรุกะ",
		'zh-tw': "波普海豚",
		'zh-cn': "波普海豚"
	},

	illustrator: "Narumi Sato",
	rarity: "None",
	category: "Pokemon",
	dexId: [963],
	hp: 70,
	types: ["Water"],

	description: {
		'ja-jp': "水のリングは 頭の 穴から 出る 粘着液と 海の水を 混ぜて 作り出したものなのだ。",
		'id-id': "Ring air Finizen terbentuk dari campuran air laut dan cairan perekat yang dikeluarkan dari lubang di kepalanya.",
		'th-th': "วงแหวนน้ำถูกสร้างขึ้นมาจากการผสมกันของของเหลวเหนียวหนืดที่ออกมาจากรูที่หัวและน้ำทะเล",
		'zh-tw': "牠的水環是頭部的洞 冒出來的黏膠與海水 混合後製造出來的。",
		'zh-cn': "牠的水環是頭部的洞 冒出來的黏膠與海水 混合後製造出來的。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "アクアスラッシュ",
			'id-id': "Aqua Slash",
			'th-th': "อควาสแลช",
			'zh-tw': "水流斬",
			'zh-cn': "水流斬"
		},

		damage: 30,

		effect: {
			'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			'id-id': "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			'th-th': "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803157,
				tcgplayer: 602394,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				tcgplayer: 604534,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602395,
			},
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card