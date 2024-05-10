import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "バウッツェル",
		'zh-tw': "麻花犬",
		id: "Dachsbun"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	dexId: [927],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "体から 放つ 良い香りが 小麦の 成長を 助けるため 農村で 大切にされてきた。",
		'zh-tw': "身體散發出的迷人香氣能有助於小麥的成長，因此 一直都備受農村人家的珍視。",
		id: "Dachsbun dijaga dengan baik di desa pertanian karena aroma wangi yang keluar dari tubuh Pokémon ini membantu pertumbuhan gandum."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "こんがりボディ",
			'zh-tw': "焦香之軀",
			id: "Tubuh Matang"
		},

		effect: {
			ja: "このポケモンは、相手のポケモンからワザのダメージを受けず、やけどにならない。",
			'zh-tw': "這隻寶可夢不會受到對手的【火】寶可夢招式的傷害，不會【灼傷】。",
			id: "Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon {Api} lawan dan tidak akan menjadi Luka Bakar."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "とびだしヘッド",
			'zh-tw': "魯莽頭擊",
			id: "Sundulan Meloncat"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card