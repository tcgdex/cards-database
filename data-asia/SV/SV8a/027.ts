import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウガツホムラex",
		id: "Gouging Fire ex",
		th: "เพลิงทะลวงex",
		'zh-tw': "破空焰ex",
		'zh-cn': "破空焰ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ヒートブラスト",
			id: "Heat Blast",
			th: "ฮีทบลาสต์",
			'zh-tw': "高溫爆破",
			'zh-cn': "高溫爆破"
		},

		damage: 60
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "れっかばくしん",
			id: "Maju Pesat Api Berkobar",
			th: "ไฟลุกบุกทะลวง",
			'zh-tw': "烈火爆進",
			'zh-cn': "烈火爆進"
		},

		damage: 260,

		effect: {
			ja: "このワザを使ったなら、このポケモンは、バトル場をはなれるまで「れっかばくしん」が使えない。",
			id: "Jika Pokémon ini telah menggunakan serangan ini, Pokémon ini tidak dapat menggunakan Maju Pesat Api Berkobar hingga meninggalkan Arena Bertarung.",
			th: "ถ้าใช้ท่าต่อสู้นี้แล้ว โปเกมอนนี้ จะใช้ [ไฟลุกบุกทะลวง] ไม่ได้จนกว่าจะออกจากตำแหน่งต่อสู้",
			'zh-tw': "若使用了這個招式，則這隻寶可夢離開戰鬥場前無法使用「烈火爆進」。",
			'zh-cn': "若使用了這個招式，則這隻寶可夢離開戰鬥場前無法使用「烈火爆進」。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card