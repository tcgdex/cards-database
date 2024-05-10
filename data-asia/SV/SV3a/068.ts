import { Card } from "../../../interfaces"
import Set from "../SV3a"

const card: Card = {
	set: Set,

	name: {
		ja: "コレクレー",
		'zh-tw': "索財靈",
		th: "คอลเลคเรย์"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	dexId: [999],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "およそ１５００年前 宝箱の中で 生まれた。 宝を 盗む 不埒者の 生気を 吸い取る。",
		'zh-tw': "約１５００年前出生在寶箱裡。如果有惡棍打算偷走寶藏， 就會被牠吸走精氣。",
		th: "เกิดในกล่องสมบัติเมื่อราว 1500 ปีก่อน สูบพลังชีวิตของคนร้ายที่มาขโมยสมบัติ"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "れんぞくコインなげ",
			'zh-tw': "連續擲幣",
			th: "ทอยเหรียญต่อเนื่อง"
		},

		damage: "20×",

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×20ダメージ。",
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×20點傷害。",
			th: "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x20"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card