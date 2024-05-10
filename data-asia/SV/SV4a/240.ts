import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "コリンク",
		'zh-tw': "小貓怪",
		id: "Shinx"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	dexId: [403],
	hp: 70,
	types: ["Lightning"],

	description: {
		ja: "体を 動かすたびに 筋肉が 伸び縮みして 電気が 生まれる。 ピンチになると 体が 輝く。",
		'zh-tw': "每當活動身體時，肌肉的伸縮會產生電流。 當遇上危機時，身體會發光。",
		id: "Tiap kali menggerakkan tubuhnya, otot Shinx memanjang dan memendek serta menghasilkan listrik. Tubuh Pokémon ini bersinar ketika terdesak."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "けりつける",
			'zh-tw': "踹",
			id: "Menyepak"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card