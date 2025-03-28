import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "スグリ",
		id: "Suguri",
		'zh-tw': "烏栗",
		'zh-cn': "烏栗"
	},

	illustrator: "Iori Suzuki",
	rarity: "None",
	category: "Trainer",

	effect: {
		ja: "このカードは、2つの効果から1つを選んで使う。\n\n◆自分のバトルポケモンをベンチポケモンと入れ替える。\n\n◆この番、自分のポケモンが使うワザの、相手のバトル場の「ポケモンex・V」へのダメージは「+30」される。",
		id: "Kartu ini digunakan dengan memilih salah satu dari dua efek berikut. ◆ Tukar Pokémon Bertarung sendiri dengan Pokémon Cadangan. ◆ Pada giliran ini, kerusakan akibat serangan yang digunakan oleh Pokémon sendiri kepada Pokémon {ex}/{V} di Arena Bertarung lawan bertambah sejumlah 30.",
		'zh-tw': "這張卡從2種效果中選擇1種使用。 ◆將自己的戰鬥寶可夢與備戰寶可夢互換。 ◆在這個回合，自己的寶可夢使用的招式，對對手的戰鬥場的「寶可夢【ex】・【V】」造成的傷害「+30」點。",
		'zh-cn': "這張卡從2種效果中選擇1種使用。 ◆將自己的戰鬥寶可夢與備戰寶可夢互換。 ◆在這個回合，自己的寶可夢使用的招式，對對手的戰鬥場的「寶可夢【ex】・【V】」造成的傷害「+30」點。"
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card