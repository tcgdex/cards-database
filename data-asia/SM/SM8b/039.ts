import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "デンジュモクGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 180,
	types: ["Lightning"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "フラッシュヘッド" },
			effect: {
				ja: "このポケモンは、特殊エネルギーがついている相手のポケモンから、ワザのダメージを受けない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ランブルワイヤー" },
			damage: 100,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "相手の山札を上から1枚トラッシュする。",
			},
		},
		{
			name: { ja: "ライトニングGX" },
			cost: ["Lightning"],
			effect: {
				ja: "相手の手札を見て、その中にあるカードを1枚、ウラにして相手のサイドとして置く。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 550681,
			},
		},
	],

	retreat: 2,
	rarity: "Double rare",
	dexId: [796],

	suffix: "GX",
};

export default card;
