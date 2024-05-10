import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "キリキザン",
		'zh-tw': "劈斬司令"
	},

	illustrator: "GIDORA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [625],
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "コマタナを 率いて 群れを 成す。 縄張りを 賭けて 争い 負けた 群れは 吸収されていくのだ。",
		'zh-tw': "率領駒刀小兵成群結隊。輸掉賭上地盤之爭的群體，會一個接一個地遭到吸收。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "メタルクロー",
			'zh-tw': "金屬爪"
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			ja: "れんぞくぎり",
			'zh-tw': "連斬"
		},

		damage: "50+",

		effect: {
			ja: "コインを3回投げる。オモテが1回なら、20ダメージ追加。オモテが2回なら、60ダメージ追加。すべてオモテなら、120ダメージ追加。",
			'zh-tw': "擲3次硬幣。若出現1次正面，則增加20點傷害。若出現2次正面，則增加60點傷害。若全部為正面，則增加120點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card