import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "コイキング",
		'zh-tw': "鯉魚王",
		th: "คอยคิง",
		id: "Magikarp"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [129],
	hp: 30,
	types: ["Water"],

	description: {
		ja: "力のない 情けない ポケモン。 たまに 高く 飛び跳ねても ２メートルを 超すのが やっとだ。",
		'zh-tw': "沒力量的可憐寶可夢。偶爾跳得比較高時， 也只是勉強高過2公尺而已。",
		th: "เป็นโปเกมอนที่อ่อนแอและน่าสมเพช นาน ๆ ทีกระโดดสูงเกิน 2 เมตรก็นับว่าดีแล้ว",
		id: "Pokémon menyedihkan yang tidak memiliki kekuatan. Walau kadang Magikarp melompat tinggi, ketinggiannya hampir tidak dapat melampaui 2 meter."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "はねじょうず",
			'zh-tw': "跳躍高手",
			th: "เด้งได้ดี",
			id: "Mahir Melompat"
		},

		damage: "10+",

		effect: {
			ja: "コインを2回投げ、すべてオモテなら、20ダメージ追加。",
			'zh-tw': "擲2次硬幣，若全部為正面，則增加20點傷害。",
			th: "ทอยเหรียญ 2 ครั้ง ถ้าออกหัวทั้งหมด การโจมตีนี้จะเพิ่มแดเมจอีก 20",
			id: "Lempar koin 2 kali. Jika semuanya sisi depan, kerusakan yang diberikan bertambah sejumlah 20."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card