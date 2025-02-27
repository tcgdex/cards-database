import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "イーブイex",
		id: "Eevee ex",
		'zh-tw': "伊布ex",
		'zh-cn': "伊布ex"
	},

	illustrator: "Natsuko Shoji été",
	rarity: "None",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "にじいろDNA",
			id: "DNA Warna Pelangi",
			'zh-tw': "虹色DNA",
			'zh-cn': "虹色DNA"
		},

		effect: {
			ja: "このポケモンは、「イーブイ」から進化する「ポケモンex」を手札から出して、このポケモンにのせて進化できる。（最初の自分の番や、出したばかりの番には進化できない。）",
			id: "Pokémon ini dapat berevolusi dengan memasukkan Pokémon {ex} yang merupakan evolusi dari Eevee dari Kartu Pegangan, lalu meletakkannya pada Pokémon ini. (Tidak dapat dievolusikan pada giliran pertama pemain dan pada giliran Pokémon ini dimasukkan.)",
			'zh-tw': "這隻寶可夢可從手牌使出從「伊布」進化而來的「寶可夢【ex】」，放置於這隻寶可夢身上完成進化。（在自己的最初回合或者剛使出的回合無法進化。）",
			'zh-cn': "這隻寶可夢可從手牌使出從「伊布」進化而來的「寶可夢【ex】」，放置於這隻寶可夢身上完成進化。（在自己的最初回合或者剛使出的回合無法進化。）"
		}
	}],

	attacks: [{
		cost: ["Fire", "Water", "Lightning"],

		name: {
			ja: "クォーツシャイン",
			id: "Quartz Shine",
			'zh-tw': "石英閃耀",
			'zh-cn': "石英閃耀"
		},

		damage: 200
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card