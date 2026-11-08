import { Card } from "models/database/card"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "酷豹",
		'th-th': "เลพัลดัส",
		'ja-jp': "レパルダス"
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		'zh-tw': "雖然人們容易被牠美麗的毛皮和姿態所迷惑，但牠其實 是一種善變而凶暴的寶可夢。",
		'th-th': "มักจะหลงใหลไปกับขนและลักษณะที่สวยงาม แต่เป็นโปเกมอนที่บ้าคลั่งและอารมณ์แปรปรวน",
		'ja-jp': "美しい 毛並みと スタイルに 惑わされがちだが 気まぐれで 狂暴な ポケモンなのだ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "亂抓",
			'th-th': "ข่วนแหลก",
			'ja-jp': "みだれひっかき"
		},

		effect: {
			'zh-tw': "擲3次硬幣，造成正面出現的次數×40點傷害。",
			'th-th': "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x40",
			'ja-jp': "コインを3回投げ、オモテの数×40ダメージ。"
		},

		damage: "40×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "利爪劈擊",
			'th-th': "กรงเล็บฉีกร่าง",
			'ja-jp': "ツメできりさく"
		},

		damage: 110,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 680197,
				tcgplayer: 570116,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [510],
}

export default card