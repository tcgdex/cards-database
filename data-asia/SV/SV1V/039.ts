import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "スリーパー",
		'zh-tw': "引夢貘人",
		th: "สลีปเปอร์",
		id: "Hypno"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [97],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "どんなときでも 持っている 振り子を 決まったリズムで 揺らしている。 近寄ると なぜか 眠くなる。",
		'zh-tw': "會以固定的節奏擺動著形影不離的鐘擺。一靠近牠 就會不由自主地昏昏欲睡。",
		th: "แกว่งลูกตุ้มที่พกเอาไว้ตลอดเวลาด้วยจังหวะคงที่ พอเข้าใกล้แล้วไม่รู้ทำไมถึงง่วงนอน",
		id: "Dalam kondisi apa pun, Hypno selalu menggoyangkan pendulum yang dibawanya dengan ritme yang sama. Entah kenapa jadi mengantuk jika mendekatinya."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ふりこであやつる",
			'zh-tw': "靈擺操縱",
			th: "ลูกตุ้มสะกดจิต",
			id: "Pendulum Pengendali"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手の場のポケモンが持っているワザを1つ選び、このワザとして使う。",
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的場上寶可夢持有的招式，作為這個招式使用。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกท่าต่อสู้ที่โปเกมอนบนกระดานฝ่ายตรงข้ามมี 1 ท่า ใช้เป็นท่าต่อสู้นี้ได้",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 serangan yang dimiliki Pokémon di Arena lawan, lalu gunakan sebagai serangan ini."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ねんどうだん",
			'zh-tw': "念動彈",
			th: "บอลโทรจิต",
			id: "Bola Psikis"
		},

		damage: 100
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
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693114
	}
}

export default card