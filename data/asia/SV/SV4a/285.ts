import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "キョジオーン",
		'zh-tw': "鹽石巨靈",
		'id-id': "Garganacl"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	dexId: [934],
	hp: 180,
	types: ["Fighting"],

	description: {
		'ja-jp': "指先を 擦りあわせて 塩を ケガした ポケモンに 振りかけると ひどい 傷も たちまち 治る。",
		'zh-tw': "只要合起指尖，搓出鹽來灑在受傷的寶可夢身上， 就算再重的傷都會瞬間痊癒。",
		'id-id': "Garganacl menaburkan garam kepada Pokémon yang terluka dengan menggosok-gosokkan ujung jarinya. Luka parah pun akan segera sembuh."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "めぐみのしお",
			'zh-tw': "恩澤之鹽",
			'id-id': "Garam Berkah"
		},

		effect: {
			'ja-jp': "このポケモンがいるかぎり、ポケモンチェックのたび、自分のポケモン全員のHPを、それぞれ「20」回復する。",
			'zh-tw': "只要這隻寶可夢在場上，每次寶可夢檢查時，將自己的所有寶可夢各恢復「20」HP。",
			'id-id': "Selama Pokémon ini ada di Arena, tiap kali Pokémon Check, pulihkan HP semua Pokémon sendiri masing-masing sejumlah 20."
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			'ja-jp': "ノックハンマー",
			'zh-tw': "敲擊之錘",
			'id-id': "Knock Hammer"
		},

		damage: 130,

		effect: {
			'ja-jp': "相手の山札を上から1枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方1張卡丟棄。",
			'id-id': "Buang 1 kartu dari atas Deck lawan ke Trash."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747639,
				tcgplayer: 567686,
			},
		},
	],

	retreat: 3,
	regulationMark: "G"
}

export default card