import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "キョジオーン",
		'zh-tw': "鹽石巨靈",
		id: "Garganacl"
	},

	illustrator: "Kouki Saitou",
	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [934],
	hp: 180,
	types: ["Fighting"],

	evolveFrom: {
		ja: "ジオヅム"
	},

	description: {
		ja: "指先を 擦りあわせて 塩を ケガした ポケモンに 振りかけると ひどい 傷も たちまち 治る。",
		'zh-tw': "只要合起指尖，搓出鹽來灑在受傷的寶可夢身上， 就算再重的傷都會瞬間痊癒。",
		id: "Garganacl menaburkan garam kepada Pokémon yang terluka dengan menggosok-gosokkan ujung jarinya. Luka parah pun akan segera sembuh."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "めぐみのしお",
			'zh-tw': "恩澤之鹽",
			id: "Garam Berkah"
		},

		effect: {
			ja: "このポケモンがいるかぎり、ポケモンチェックのたび、自分のポケモン全員のHPを、それぞれ「20」回復する。",
			'zh-tw': "只要這隻寶可夢在場上，每次寶可夢檢查時，將自己的所有寶可夢各恢復「20」HP。",
			id: "Selama Pokémon ini ada di Arena, tiap kali Pokémon Check, pulihkan HP semua Pokémon sendiri masing-masing sejumlah 20."
		}
	}],

	attacks: [{
		name: {
			ja: "ノックハンマー",
			'zh-tw': "敲擊之錘",
			id: "Knock Hammer"
		},

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方1張卡丟棄。",
			id: "Buang 1 kartu dari atas Deck lawan ke Trash."
		},

		damage: 130,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747639,
				tcgplayer: 567686,
				cardtrader: 270284,
			},
		},
	]
}

export default card