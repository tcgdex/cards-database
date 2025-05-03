import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブースターex",
		id: "Flareon ex",
		'zh-tw': "火伊布ex",
		'zh-cn': "火伊布ex"
	},

	illustrator: "Nurikabe",
	rarity: "None",
	category: "Pokemon",
	hp: 270,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			ja: "バーニングチャージ",
			id: "Burning Charge",
			'zh-tw': "燃燒充能",
			'zh-cn': "燃燒充能"
		},

		damage: 130,

		effect: {
			ja: "自分の山札から基本エネルギーを2枚まで選び、自分のポケモン1匹につける。そして山札を切る。",
			id: "Pilih paling banyak 2 lembar Energi Dasar dari Deck sendiri, lalu kenakan pada 1 Pokémon sendiri. Kemudian, kocok Deck.",
			'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，附於自己的1隻寶可夢身上。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇最多2張基本能量卡，附於自己的1隻寶可夢身上。並且重洗牌庫。"
		}
	}, {
		cost: ["Fire", "Water", "Lightning"],

		name: {
			ja: "カーネリアン",
			id: "Carnelian",
			'zh-tw': "紅玉髓",
			'zh-cn': "紅玉髓"
		},

		damage: 280,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan serangan.",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card