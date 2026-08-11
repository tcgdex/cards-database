import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "オリジンパルキアVSTAR",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 280,
	types: ["Water"],

	stage: "VSTAR",

	abilities: [
		{
			type: "Ability",
			name: { ja: "スターポータル" },
			effect: {
				ja: "自分の番に使える。自分のトラッシュから[W]エネルギーを3枚まで選び、自分の[W]ポケモンに好きなようにつける。［対戦中、自分はVSTARパワーを1回しか使えない。］",
			},
		},
	],

	attacks: [
		{
			name: { ja: "あくうのうねり" },
			damage: "60+",
			cost: ["Water", "Water"],
			effect: {
				ja: "おたがいのベンチポケモンの数×20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651349,
				tcgplayer: 569929,
			},
		},
	],

	evolveFrom: {
		ja: "nullV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Mega Hyper Rare",
	dexId: [484],
};

export default card;
