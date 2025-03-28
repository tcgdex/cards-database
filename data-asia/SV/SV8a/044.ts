import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ナミイルカ",
		id: "Finizen",
		th: "นามิอิรุกะ",
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
		ja: "水のリングは 頭の 穴から 出る 粘着液と 海の水を 混ぜて 作り出したものなのだ。",
		id: "Ring air Finizen terbentuk dari campuran air laut dan cairan perekat yang dikeluarkan dari lubang di kepalanya.",
		th: "วงแหวนน้ำถูกสร้างขึ้นมาจากการผสมกันของของเหลวเหนียวหนืดที่ออกมาจากรูที่หัวและน้ำทะเล",
		'zh-tw': "牠的水環是頭部的洞 冒出來的黏膠與海水 混合後製造出來的。",
		'zh-cn': "牠的水環是頭部的洞 冒出來的黏膠與海水 混合後製造出來的。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "アクアスラッシュ",
			id: "Aqua Slash",
			th: "อควาสแลช",
			'zh-tw': "水流斬",
			'zh-cn': "水流斬"
		},

		damage: 30,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card