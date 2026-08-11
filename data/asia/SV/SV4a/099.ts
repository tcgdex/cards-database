import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "コレクレー",
		'zh-tw': "索財靈",
		'th-th': "คอลเลคเรย์",
		'id-id': "Gimmighoul"
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	dexId: [999],
	hp: 50,
	types: ["Psychic"],

	description: {
		'ja-jp': "およそ１５００年前 宝箱の中で 生まれた。 宝を 盗む 不埒者の 生気を 吸い取る。",
		'zh-tw': "約１５００年前出生在寶箱裡。如果有惡棍打算偷走寶藏， 就會被牠吸走精氣。",
		'th-th': "เกิดในกล่องสมบัติเมื่อราว 1500 ปีก่อน สูบพลังชีวิตของคนร้ายที่มาขโมยสมบัติ",
		'id-id': "Sekitar 1500 tahun lalu, Gimmighoul terlahir di dalam kotak harta. Pokémon ini mengisap vitalitas orang jahat yang hendak mencuri hartanya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'ja-jp': "はこにかくれる",
			'zh-tw': "藏入盒子",
			'th-th': "ซ่อนในกล่อง",
			'id-id': "Bersembunyi Dalam Kotak"
		},

		effect: {
			'ja-jp': "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			'th-th': "ทอยเหรียญ 1 ครั้งถ้าออกหัว เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'ja-jp': "ぶつかる",
			'zh-tw': "衝撞",
			'th-th': "กระแทก",
			'id-id': "Menyeruduk"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746481,
				tcgplayer: 567500,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577351,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card