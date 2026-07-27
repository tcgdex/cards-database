import { Card } from "../../../interfaces";
import Set from "../SM9";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲンガー&ミミッキュGX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 240,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ポルターガイスト" },
			damage: "50×",
			cost: ["Psychic", "Psychic"],
			effect: {
				ja: "相手の手札を見て、その中にあるトレーナーズの枚数x50ダメージ。",
			},
		},
		{
			name: { ja: "ホラーハウスGX" },
			cost: ["Psychic"],
			effect: {
				ja: "次の相手の番、相手は手札からカードを出して使えない。追加で[超]エネルギーが1個ついているなら、おたがいのプレイヤーは、それぞれの手札が7枚になるように、山札を引く。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558477,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [94, 778],

	suffix: "TAG TEAM-GX",
};

export default card;
