import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "プテラVSTAR",
		'zh-tw': "化石翼龍VSTAR",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],

	stage: "VSTAR",

	attacks: [
		{
			name: {
				ja: "ロストダイブ",
				'zh-tw': "放逐奇襲",
			},
			damage: 240,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: {
				ja: "自分の山札を上から3枚、ロストゾーンに置く。",
				'zh-tw': "將自己的牌庫上方3張卡放置於放逐區。",
			},
		},
		{
			name: {
				ja: "エンシェントスター",
				'zh-tw': "[VSTAR力量]古時星星",
			},
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンは、場をはなれるまで「相手の場の『ポケモンV』（『プテラVSTAR』をのぞく）の特性は、すべてなくなる。」という効果の特性を持つ。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "這隻寶可夢離場前，擁有「對手的場上的『寶可夢【V】』（『化石翼龍【VSTAR】』 除外）的特性全部消除。」效果的特性。[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 667932,
				tcgplayer: 569988,
			},
		},
	],

	evolveFrom: {
		ja: "プテラV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [142],
};

export default card;
