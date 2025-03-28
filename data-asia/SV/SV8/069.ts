import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "コライドン",
		'zh-tw': "故勒頓",
		'zh-cn': "故勒頓"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1007],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "拳で 大地を 引き裂いたと 古い 探検記に 記された ツバサノオウの 正体らしい。",
		'zh-tw': "牠似乎就是古老的探險記裡 提到的翼大王的真面目。 據記載，牠曾以拳頭擊裂大地。",
		'zh-cn': "牠似乎就是古老的探險記裡 提到的翼大王的真面目。 據記載，牠曾以拳頭擊裂大地。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "はじょうもうこう",
			'zh-tw': "輪番狂攻",
			'zh-cn': "輪番狂攻"
		},

		damage: "30+",

		effect: {
			ja: "前の自分の番、このポケモン以外の「古代」のポケモンがワザを使っていたなら、150ダメージ追加。",
			'zh-tw': "在上個自己的回合，若這隻寶可夢以外的「古代」寶可夢使用了招式，則增加150點傷害。",
			'zh-cn': "在上個自己的回合，若這隻寶可夢以外的「古代」寶可夢使用了招式，則增加150點傷害。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ぶちかます",
			'zh-tw': "頭突",
			'zh-cn': "頭突"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card