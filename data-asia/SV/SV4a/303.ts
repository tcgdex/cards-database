import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "モトトカゲ",
		'zh-tw': "摩托蜥",
		id: "Cyclizar"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	dexId: [967],
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "大昔から 人を 背中に 乗せていたらしい。 １万年前の 壁画に 様子が 描かれている。",
		'zh-tw': "似乎自古就會讓人類坐在背上。１萬年前的 壁畫上描繪著該模樣。",
		id: "Kabarnya, sudah sejak dahulu kala manusia menunggangi punggung Cyclizar. Situasi tersebut terlukiskan dalam sebuah mural dari 10 ribu tahun lalu."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Darkness", "Colorless"],

		name: {
			ja: "こうそくドライブ",
			'zh-tw': "高速猛衝",
			id: "Berkendara Berkecepatan Tinggi"
		},

		damage: 100,

		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
		}
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 734291
	}
}

export default card