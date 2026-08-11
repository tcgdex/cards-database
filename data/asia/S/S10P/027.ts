import { Card } from "models/database/card";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "トゲチック",
		'zh-tw': "波克基古",
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		'ja-jp': "心優しい 人の 前に 幸せを もたらすため 姿を 現すと 言われている。",
		'zh-tw': "據說牠會為了將幸福帶給心地善良 的人而現身。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "しあわせボイス",
				'zh-tw': "幸福之聲",
			},
			effect: {
				'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のバトルポケモンのHPを「30」回復する。",
				'zh-tw': "在自己的回合，當從手牌使出這張卡並完成進化時，可使用1次。將自己的戰鬥寶可夢恢復「30」HP。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "ようせいのかぜ",
				'zh-tw': "妖精之風",
			},
			damage: 30,
			cost: ["Psychic", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651086,
				tcgplayer: 569870,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "トゲピー",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [176],
};

export default card;
