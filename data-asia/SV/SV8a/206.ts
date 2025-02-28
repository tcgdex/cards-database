import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "グレイシアex",
		id: "Glaceon ex",
		'zh-tw': "冰伊布ex",
		'zh-cn': "冰伊布ex"
	},

	illustrator: "Kamome Shirahama",
	rarity: "None",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "フロストバレット",
			id: "Frost Bullet",
			'zh-tw': "冰霜子彈",
			'zh-cn': "冰霜子彈"
		},

		damage: 110,

		effect: {
			ja: "相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
			id: "Serangan ini juga memberikan kerusakan sejumlah 30 kepada 1 Pokémon Cadangan lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]",
			'zh-tw': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
			'zh-cn': "對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		}
	}, {
		cost: ["Grass", "Water", "Darkness"],

		name: {
			ja: "ユークレース",
			id: "Euclase",
			'zh-tw': "藍柱石",
			'zh-cn': "藍柱石"
		},

		effect: {
			ja: "ダメカンが6個のっている相手のポケモンを1匹選び、きぜつさせる。",
			id: "Pilih 1 Pokémon lawan yang memiliki Token Kerusakan sejumlah 6, Pokémon tersebut KO.",
			'zh-tw': "選擇1隻對手的身上放置有6個傷害指示物的寶可夢，將其【昏厥】。",
			'zh-cn': "選擇1隻對手的身上放置有6個傷害指示物的寶可夢，將其【昏厥】。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card