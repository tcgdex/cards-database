import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "スターミー",
		'zh-tw': "寶石海星",
		id: "Starmie"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	dexId: [121],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "体を 高速で 回転させ 海を 泳ぎながら 小さな プランクトンを 吸収する。",
		'zh-tw': "會高速旋轉著身體在海裡游泳，並且同時 吸食微小的浮游生物。",
		id: "Starmie memutar tubuhnya dengan kecepatan tinggi dan mengisap plankton kecil sambil berenang di laut."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "なぞのすいせい",
			'zh-tw': "謎之水性",
			id: "Komet Misterius"
		},

		effect: {
			ja: "自分の番に1回使える。相手のポケモン1匹に、ダメカンを2個のせる。その後、このポケモンと、ついているすべてのカードを、トラッシュする。",
			'zh-tw': "在自己的回合時可使用1次。在對手的1隻寶可夢身上放置2個傷害指示物。然後，將這隻寶可夢與附加的卡全部丟棄。",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Letakkan 2 Token Kerusakan pada 1 Pokémon lawan. Setelah itu, buang Pokémon ini dan semua kartu yang dikenakannya ke Trash."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "スピードアタック",
			'zh-tw': "高速攻擊",
			id: "Speed Attack"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card