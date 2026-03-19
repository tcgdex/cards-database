import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "パウワウ",
		'zh-tw': "小海獅",
		th: "เพาเวา",
		id: "Seel"
	},

	illustrator: "aoki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [86],
	hp: 80,
	types: ["Water"],

	description: {
		ja: "分厚い 脂肪の おかげで 寒い 海も へっちゃらだけど 暖かい 海では ちょっと バテやすいのだ。",
		'zh-tw': "因為有著厚厚的脂肪， 所以完全不怕寒冷的海域， 但在溫暖的海裡就有點容易中暑。",
		th: "ด้วยไขมันที่หนา ทำให้อยู่ในทะเลที่หนาวเย็นได้อย่างสบาย แต่ถ้าเป็นทะเลที่อบอุ่นแล้วก็จะรู้สึกเพลียง่ายหน่อย",
		id: "Berkat lemaknya yang tebal, laut yang dingin tidak masalah bagi Seel, tapi Pokémon ini mudah lelah di laut hangat."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ひんやり",
			'zh-tw': "寒意",
			th: "เย็นยะเยือก",
			id: "Sejuk"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719528
	}
}

export default card