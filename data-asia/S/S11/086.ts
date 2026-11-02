import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "パッチール",
		'zh-tw': "晃晃斑",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "１匹ずつ ブチ模様は 異なる。 フラフラした 動きで 相手の 攻撃を 絶妙に かわすぞ。",
		'zh-tw': "每一隻身上的斑點都不一樣。會用搖搖晃晃的動作 巧妙地避開對手的攻擊。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "フラフラスピン",
				'zh-tw': "搖晃旋轉",
			},
			cost: ["Colorless"],
			effect: {
				ja: "相手のポケモン全員に、それぞれ10ダメージ。相手のバトルポケモンをこんらんにする。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "對手的所有寶可夢各受到10點傷害。將對手的戰鬥寶可夢【混亂】。[在備戰區不計算弱點・抵抗力。]",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667961,
				tcgplayer: 570017,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [327],
};

export default card;
