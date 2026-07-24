import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "テッカグヤGX",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "フォースキャンセラー" },
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、自分のポケモン全員は、相手のポケモンが使うGXワザのダメージや効果を受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "パワーサイクロン" },
			damage: 110,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを1個、ベンチポケモンにつけ替える。",
			},
		},
		{
			name: { ja: "ディスカバリーGX" },
			cost: ["Colorless"],
			effect: {
				ja: "自分のサイドを数えたあと、すべて手札に加える。その後、山札の上から、加えた枚数ぶんのカードを、サイドとして置く。数えた枚数ぶんのサイドを置けないなら、このワザは失敗。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558178,
			},
		},
	],

	retreat: 4,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [797],

	suffix: "GX",
};

export default card;
