import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "デカヌチャン",
		'zh-tw': "巨鍛匠",
		id: "Tinkaton"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	dexId: [959],
	hp: 140,
	types: ["Psychic"],

	description: {
		ja: "知能が 高く とても 豪快。 ハンマーで 岩を 殴り飛ばして 空飛ぶ アーマーガアを 狙う。",
		'zh-tw': "智商高超，性格豪邁。會用錘子打飛岩石來攻擊 飛在空中的鋼鎧鴉。",
		id: "Tinkaton memiliki kecerdasan tinggi dan sangat kuat. Ia memukul batu ke langit menggunakan palunya dan mengincar Corviknight yang terbang."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "そざいあつめ",
			'zh-tw': "收集素材",
			id: "Mengumpulkan Bahan"
		},

		effect: {
			ja: "自分の番に、自分の手札を1枚トラッシュするなら、1回使える。自分の山札を3枚引く。",
			'zh-tw': "在自己的回合，若將自己的1張手牌丟棄，則可使用1次。從自己的牌庫抽出3張卡。",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika membuang 1 lembar Kartu Pegangan sendiri ke Trash. Ambil 3 kartu dari atas Deck sendiri."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "スペシャルハンマー",
			'zh-tw': "特殊鐵錘",
			id: "Special Hammer"
		},

		damage: "90+",

		effect: {
			ja: "このポケモンに特殊エネルギーがついているなら、90ダメージ追加。",
			'zh-tw': "若這隻寶可夢身上附有特殊能量卡，則增加90點傷害。",
			id: "Jika Pokémon ini mengenakan Energi Spesial, kerusakan yang diberikan bertambah sejumlah 90."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card