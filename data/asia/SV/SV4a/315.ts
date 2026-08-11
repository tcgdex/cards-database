import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "グルトン",
		'zh-tw': "愛吃豚",
		'id-id': "Lechonk"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	dexId: [915],
	hp: 70,
	types: ["Colorless"],

	description: {
		'ja-jp': "一日中 エサを 探す。 優れた 嗅覚を 持つが エサ探し 以外に 使わない。",
		'zh-tw': "一整天都在覓食。雖然擁有優秀的嗅覺， 但卻只被用在覓食上。",
		'id-id': "Lechonk mencari makanan seharian penuh. Meskipun memiliki indra pencium yang sangat baik, Pokémon ini tidak menggunakannya selain untuk mencari makan."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "きまぐれタックル",
			'zh-tw': "胡思亂撞",
			'id-id': "Serudukan Semaunya"
		},

		damage: 70,

		effect: {
			'ja-jp': "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747669,
				tcgplayer: 567716,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card