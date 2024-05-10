import { Card } from "../../../interfaces"
import Set from "../SV3"

const card: Card = {
	set: Set,

	name: {
		ja: "キリキザン",
		'zh-tw': "劈斬司令",
		th: "คิริคิซัน"
	},

	illustrator: "GIDORA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [625],
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "コマタナを 率いて 群れを 成す。 縄張りを 賭けて 争い 負けた 群れは 吸収されていくのだ。",
		'zh-tw': "率領駒刀小兵成群結隊。輸掉賭上地盤之爭的群體，會一個接一個地遭到吸收。",
		th: "เป็นผู้นำและรวมฝูงโคมาทานา ฝูงที่พ่ายแพ้ในการต่อสู้แย่งชิงอาณาเขตจะถูกกลืนรวมกับฝ่ายชนะ"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "メタルクロー",
			'zh-tw': "金屬爪",
			th: "เมทัลคลอว์"
		},

		damage: 20
	}, {
		cost: ["Metal", "Colorless"],

		name: {
			ja: "れんぞくぎり",
			'zh-tw': "連斬",
			th: "ตัดต่อเนื่อง"
		},

		damage: "50+",

		effect: {
			ja: "コインを3回投げる。オモテが1回なら、20ダメージ追加。オモテが2回なら、60ダメージ追加。すべてオモテなら、120ダメージ追加。",
			'zh-tw': "擲3次硬幣。若出現1次正面，則增加20點傷害。若出現2次正面，則增加60點傷害。若全部為正面，則增加120點傷害。",
			th: "ทอยเหรียญ 3 ครั้ง ถ้าออกหัว 1 ครั้ง การโจมตีนี้จะเพิ่มแดเมจอีก 20 ถ้าออกหัว 2 ครั้ง การโจมตีนี้จะเพิ่มแดเมจอีก 60 ถ้าออกหัวทั้งหมด การโจมตีนี้จะเพิ่มแดเมจอีก 120"
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