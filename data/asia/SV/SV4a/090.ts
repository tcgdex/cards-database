import { Card } from "models/database/card"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "バウッツェル",
		'zh-tw': "麻花犬",
		'th-th': "บัลซ์เซล",
		'id-id': "Dachsbun"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	dexId: [927],
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "体から 放つ 良い香りが 小麦の 成長を 助けるため 農村で 大切にされてきた。",
		'zh-tw': "身體散發出的迷人香氣能有助於小麥的成長，因此 一直都備受農村人家的珍視。",
		'th-th': "กลิ่นหอมที่ปล่อยออกมาจากร่างกายช่วยให้ข้าวสาลีเจริญเติบโต มันจึงได้รับการดูแลเอาใจใส่เป็นอย่างดีในหมู่บ้านเกษตรกรรม",
		'id-id': "Dachsbun dijaga dengan baik di desa pertanian karena aroma wangi yang keluar dari tubuh Pokémon ini membantu pertumbuhan gandum."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "こんがりボディ",
			'zh-tw': "焦香之軀",
			'th-th': "สุกได้ที่",
			'id-id': "Tubuh Matang"
		},

		effect: {
			'ja-jp': "このポケモンは、相手のポケモンからワザのダメージを受けず、やけどにならない。",
			'zh-tw': "這隻寶可夢不會受到對手的【火】寶可夢招式的傷害，不會【灼傷】。",
			'th-th': "โปเกมอนนี้ จะไม่ได้รับแดเมจของท่าต่อสู้จากโปเกมอน[ไฟ]ฝ่ายตรงข้าม และไม่เป็นสภาวะ[ไหม้]",
			'id-id': "Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon {Api} lawan dan tidak akan menjadi Luka Bakar."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'ja-jp': "とびだしヘッド",
			'zh-tw': "魯莽頭擊",
			'th-th': "กระโดดโหม่ง",
			'id-id': "Sundulan Meloncat"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 746472,
				tcgplayer: 567489,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577346,
			},
		},
	],

	retreat: 1,
	regulationMark: "G"
}

export default card