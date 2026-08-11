import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ドータクン",
		'zh-tw': "青銅鐘",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "雨雲を呼ぶ 神と いわれる。 怒らせると 鐘の音の ような 不気味な 声で 威嚇する。",
		'zh-tw': "被稱為能召喚雨雲的神明。生氣時會用像鐘聲一般令人 毛骨悚然的聲音來威嚇對手。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "たいねつ",
				'zh-tw': "耐熱",
			},
			effect: {
				ja: "このポケモンは、相手の[R]ポケモンからワザのダメージを受けない。",
				'zh-tw': "這隻寶可夢不會受到對手的【火】寶可夢招式的傷害。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ぶちかます",
				'zh-tw': "頭突",
			},
			damage: 100,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651108,
				tcgplayer: 569892,
			},
		},
	],

	evolveFrom: {
		ja: "ドーミラー",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [437],
};

export default card;
