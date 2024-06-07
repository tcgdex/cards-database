import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "エンテイ",
		'zh-tw': "炎帝",
		id: "Entei"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	dexId: [244],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "エンテイが ほえると 世界の どこかの 火山が 噴火すると 言われている。",
		'zh-tw': "據說如果炎帝吼叫的話，世界上的 某處火山就會爆發。",
		id: "Ada yang mengatakan bahwa saat Entei mengaum, maka gunung berapi entah pada belahan dunia yang mana akan meletus."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "プレッシャー",
			'zh-tw': "壓迫感",
			id: "Tekanan"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンが使うワザのダメージは「-20」される。",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，對手的戰鬥寶可夢使用的招式的傷害「-20」點。",
			id: "Selama Pokémon ini ada di Arena Bertarung, kerusakan akibat serangan yang digunakan oleh Pokémon Bertarung lawan berkurang sejumlah 20."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ブレイズボール",
			'zh-tw': "火炎球",
			id: "Blaze Ball"
		},

		damage: "60+",

		effect: {
			ja: "このポケモンについているエネルギーの数×20ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上附加的【火】能量的數量×20點傷害。",
			id: "Kerusakan yang diberikan bertambah sejumlah 20 untuk tiap Energi {Api} yang dikenakan pada Pokémon ini."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card