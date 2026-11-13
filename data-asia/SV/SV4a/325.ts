import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウェーニバルex",
		'zh-tw': "狂歡浪舞鴨ex",
		id: "Quaquaval ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Shiny Ultra Rare",
	category: "Pokemon",
	dexId: [914],
	hp: 320,
	types: ["Water"],

	evolveFrom: {
		ja: "ウェルカモ"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			ja: "エキサイトサンバ",
			'zh-tw': "激動森巴",
			id: "Excite Samba"
		},

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。その後、相手は相手自身のバトルポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。然後，對手將對手自己的戰鬥寶可夢與備戰寶可夢互換。",
			id: "Tukar Pokémon ini dengan Pokémon Cadangan. Setelah itu, lawan menukar Pokémon Bertarungnya dengan Pokémon Cadangan."
		},

		damage: 60,
		cost: ["Water"]
	}, {
		name: {
			ja: "スクリューシュート",
			'zh-tw': "螺旋射擊",
			id: "Screw Shoot"
		},

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、手札にもどす。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，放回手牌。",
			id: "Pilih 2 Energi yang dikenakan pada Pokémon ini, lalu kembalikan ke Kartu Pegangan."
		},

		damage: 230,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747679,
				tcgplayer: 567725,
				cardtrader: 270319,
			},
		},
	]
}

export default card