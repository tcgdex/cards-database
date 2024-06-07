import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "タマンチュラ",
		'zh-tw': "團珠蛛",
		th: "ทามันทูล่า",
		id: "Tarountula"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [917],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "お尻から 出す 糸は ワイヤーに 匹敵する 強度。 強さの 秘密が 研究されているのだ。",
		'zh-tw': "從臀部射出的絲線，強度足以與金屬絲匹敵。 強度的秘密仍在研究中。",
		th: "ใยที่ออกมาจากก้นนั้นแข็งแรงพอ ๆ กับเส้นลวด ความลับของความแข็งแกร่งนั้นยังถูกค้นคว้าอยู่",
		id: "Kekuatan benang yang dikeluarkan Tarountula dari belakangnya sebanding dengan kawat. Rahasia kekuatan benangnya sedang diteliti."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ふいをつく",
			'zh-tw': "偷襲",
			th: "จู่โจมกะทันหัน",
			id: "Serangan Kejutan"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว",
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card