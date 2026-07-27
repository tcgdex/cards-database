import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "フィオネ",
		'zh-tw': "霏歐納",
	},

	illustrator: "Jiro Sasumo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "暖かい 海を 漂っている。 どんな 遠くに 流されても 生まれた 場所に かならず戻る。",
		'zh-tw': "在溫暖的海面上漂流。不論被沖得多遠， 都能夠回到出生的地方。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "うみのうたげ",
				'zh-tw': "海之宴",
			},
			cost: ["Water"],
			effect: {
				ja: "自分の山札から[W]タイプのたねポケモンを3枚まで選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多3張【水】屬性的【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			},
		},
		{
			name: {
				ja: "スプラッシュ",
				'zh-tw': "飛濺",
			},
			damage: 20,
			cost: ["Water"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 656243,
				tcgplayer: 570674,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577098,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [489],
};

export default card;
