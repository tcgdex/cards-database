import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ボルトロス",
		'zh-tw': "雷電雲",
		id: "Thundurus"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	dexId: [642],
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "大空を 飛び回りながら あちこちに 雷を 落として 山火事を 起こすので 嫌われる。",
		'zh-tw': "一邊在空中飛來飛去，一邊四處打雷引發森林大火， 因此受到厭惡。",
		id: "Thundurus terbang mengelilingi langit luas sambil menjatuhkan petir ke sana kemari dan menyebabkan kebakaran gunung sehingga Pokémon ini tidak disukai."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "あくてんこう",
			'zh-tw': "壞天氣",
			id: "Cuaca Buruk"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、自分のベンチポケモン全員は、相手のワザのダメージを受けない。",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，自己的所有備戰寶可夢不會受到對手的招式的傷害。",
			id: "Selama Pokémon ini ada di Arena Bertarung, semua Pokémon Cadangan sendiri tidak menerima kerusakan akibat serangan lawan."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			ja: "ギガントボルト",
			'zh-tw': "巨烈伏特",
			id: "Gigant Bolt"
		},

		damage: 140,

		effect: {
			ja: "このポケモンにも90ダメージ。",
			'zh-tw': "這隻寶可夢也受到90點傷害。",
			id: "Pokémon ini juga menerima kerusakan sejumlah 90."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card