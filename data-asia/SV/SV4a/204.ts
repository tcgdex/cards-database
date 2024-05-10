import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "オリーニョ",
		'zh-tw': "奧利紐",
		id: "Dolliv"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	dexId: [929],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "フレッシュな 香りの 美味しい オイルを 分けてくれる。 古くから 人間と 共存してきた。",
		'zh-tw': "會分享自己香氣新鮮、美味可口的油。自古以來 就與人類共存，直到現在。",
		id: "Dolliv membagikan minyak lezat beraroma segar. Pokémon ini telah hidup bersama manusia sejak zaman dahulu."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ビンタ",
			'zh-tw': "巴掌",
			id: "Menampar"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			ja: "オイルかけ",
			'zh-tw': "潑油",
			id: "Guyuran Minyak"
		},

		damage: 40,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンがワザを使うとき、相手はコインを1回投げる。ウラならそのワザは失敗。",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢使用招式時，對手擲1次硬幣。若為反面，則那個招式失敗。",
			id: "Pada giliran lawan berikutnya, saat Pokémon yang menerima serangan ini menggunakan serangan, lawan melempar koin 1 kali. Jika hasilnya sisi belakang, serangan tersebut gagal."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card