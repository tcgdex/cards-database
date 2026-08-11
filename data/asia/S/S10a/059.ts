import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "エイパム",
		'zh-tw': "長尾怪手",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "掌の如く 器用に 働く 尻尾 持ち 樹上に 暮らす。 古文書に 腕一本の 珍妙なポケモンとの 記述 残る。",
		'zh-tw': "擁有如同手掌般靈活的尾巴。棲息在樹上，有古書將其敘述為 只有一隻手的奇妙寶可夢。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "いたずらテール",
				'zh-tw': "惡作劇之尾",
			},
			cost: ["Colorless"],
			effect: {
				ja: "相手の山札を上から1枚見て、もとにもどす。のぞむなら、その山札を切る。",
				'zh-tw': "查看對手的牌庫上方1張卡，回復原樣。若希望，重洗那個牌庫。",
			},
		},
		{
			name: {
				ja: "ひっかく",
				'zh-tw': "抓",
			},
			damage: 10,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656383,
				tcgplayer: 570722,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577129,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [190],
};

export default card;
