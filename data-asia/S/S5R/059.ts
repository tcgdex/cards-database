import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	dexId: [626],
	rarity: "Common",
	set: Set,

	name: {
		ja: "バッフロン",
		'zh-tw': "爆炸頭水牛",
		th: "บัฟฟรอน"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "激しい 頭突きを 食らわせても ふさふさの 体毛が ダメージを 吸収して くれるのだ。",
		'zh-tw': "就算使出猛烈的頭錘，蓬鬆的體毛也能將傷害都吸收掉。",
		th: "แม้จะโดนหัวพุ่งชนรุนแรงแค่ไหน ขนที่ฟูฟ่องก็จะดูดซับความเสียหายให้"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "そうしょく",
			'zh-tw': "食草",
			th: "กินพืช"
		},

		effect: {
			ja: "このポケモンが使うワザの、相手の[草]ポケモンへのダメージは「+60」される。",
			'zh-tw': "這隻寶可夢使用的招式，對對手的【草】寶可夢造成的傷害「+60」點。",
			th: "แดเมจของท่าต่อสู้ที่โปเกมอนนี้ใช้ทำกับโปเกมอน [หญ้า] ของฝ่ายตรงข้าม จะถูก [+60]"
		}
	}],

	attacks: [{
		name: {
			ja: "アフロブレイク",
			'zh-tw': "爆炸頭突擊"
		},

		effect: {
			ja: "このポケモンにも30ダメージ。",
			'zh-tw': "這隻寶可夢也受到30點傷害。"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533867, tcgplayer: 569100, cardtrader: 240070 } }
	]
}

export default card