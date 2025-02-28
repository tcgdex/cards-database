import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "コレクレー",
		id: "Gimmighoul",
		th: "คอลเลคเรย์",
		'zh-tw': "索財靈",
		'zh-cn': "索財靈"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	dexId: [999],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "およそ１５００年前 宝箱の中で 生まれた。 宝を 盗む 不埒者の 生気を 吸い取る。",
		id: "Sekitar 1500 tahun lalu, Gimmighoul terlahir di dalam kotak harta. Pokémon ini mengisap vitalitas orang jahat yang hendak mencuri hartanya.",
		th: "เกิดในกล่องสมบัติเมื่อราว 1500 ปีก่อน สูบพลังชีวิตของคนร้ายที่มาขโมยสมบัติ",
		'zh-tw': "約１５００年前出生在寶箱裡。 如果有惡棍打算偷走寶藏， 就會被牠吸走精氣。",
		'zh-cn': "約１５００年前出生在寶箱裡。 如果有惡棍打算偷走寶藏， 就會被牠吸走精氣。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "れんぞくコインなげ",
			id: "Lempar Koin Beruntun",
			th: "ทอยเหรียญต่อเนื่อง",
			'zh-tw': "連續擲幣",
			'zh-cn': "連續擲幣"
		},

		damage: "20×",

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×20ダメージ。",
			id: "Lempar koin hingga hasilnya sisi belakang. Serangan ini memberikan kerusakan sejumlah 20 untuk tiap lemparan dengan hasil sisi depan.",
			th: "ทอยเหรียญจนกว่าจะออกก้อย แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x20",
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×20點傷害。",
			'zh-cn': "擲硬幣直到出現反面，造成正面出現的次數×20點傷害。"
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