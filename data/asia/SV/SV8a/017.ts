import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "チャデス",
		'id-id': "Poltchageist",
		'th-th': "ฉะเดธ",
		'zh-tw': "斯魔茶",
		'zh-cn': "斯魔茶"
	},

	illustrator: "MINAMINAMI Take",
	rarity: "None",
	category: "Pokemon",
	dexId: [1012],
	hp: 30,
	types: ["Grass"],

	description: {
		'ja-jp': "ヤバチャの リージョンフォームに 見えるが まったく 関係のない ポケモンと 最近 判明した。",
		'id-id': "Poltchageist terlihat seperti varian daerah dari Sinistea, tetapi belakangan ini ditemukan bahwa mereka merupakan Pokémon yang tidak ada keterkaitannya sama sekali.",
		'th-th': "แม้จะดูเหมือนฟอร์มตามภูมิภาคของยาบาฉะ แต่ไม่นานมานี้มีการค้นพบแล้วว่า มันเป็นโปเกมอนที่ไม่เกี่ยวข้องกันโดยสิ้นเชิง",
		'zh-tw': "雖然這種寶可夢看起來像是 來悲茶的地區形態，但最近 被發現其實兩者毫無關係。",
		'zh-cn': "雖然這種寶可夢看起來像是 來悲茶的地區形態，但最近 被發現其實兩者毫無關係。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "くらがくれ",
			'id-id': "Gudang Persembunyian",
			'th-th': "ซ่อนในคลัง",
			'zh-tw': "藏隱",
			'zh-cn': "藏隱"
		},

		effect: {
			'ja-jp': "このポケモンは、ベンチにいるかぎり、相手のポケモンからワザのダメージや効果を受けない。",
			'id-id': "Selama Pokémon ini ada di Cadangan, Pokémon ini tidak menerima kerusakan dan efek akibat serangan dari Pokémon lawan.",
			'th-th': "โปเกมอนนี้ ตราบใดที่ยังอยู่บนเบนช์ จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม",
			'zh-tw': "只要這隻寶可夢在備戰區，不會受到對手的寶可夢招式的傷害與效果的影響。",
			'zh-cn': "只要這隻寶可夢在備戰區，不會受到對手的寶可夢招式的傷害與效果的影響。"
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			'ja-jp': "ひっかける",
			'id-id': "Mengait",
			'th-th': "จับแขวน",
			'zh-tw': "鉤住",
			'zh-cn': "鉤住"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803130,
				tcgplayer: 602348,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				tcgplayer: 604515,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602349,
			},
		},
	],

	retreat: 1,
	regulationMark: "H"
}

export default card