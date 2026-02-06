import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "齒輪組",
		'zh-cn': "齒輪組",
		ja: "ギギアル"
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	description: {
		'zh-tw': "如果認真起來，大齒輪外圈的 齒輪會和小齒輪完全接合。 此時轉速將會大幅提升。",
		'zh-cn': "如果認真起來，大齒輪外圈的 齒輪會和小齒輪完全接合。 此時轉速將會大幅提升。",
		ja: "本気の ときは でかギアの 外の 歯車と ちびギアが 合致。 回転速度が 飛躍 するのだ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "鐵之衝撞",
			'zh-cn': "鐵之衝撞",
			ja: "アイアンタックル"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			'zh-cn': "這隻寶可夢也受到20點傷害。",
			ja: "このポケモンにも20ダメージ。"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [600],

	thirdParty: {
		cardmarket: 779082
	}
}

export default card