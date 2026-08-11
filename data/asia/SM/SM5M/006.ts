import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "エンペルト",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	description: {
		ja: "クチバシから 伸びている ３本の ツノは 強さの 象徴。 リーダーが 一番 大きい。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "トータルコマンド" },
			damage: "20×",
			cost: ["Water", "Colorless"],
			effect: {
				ja: "おたがいのベンチポケモンの数x20ダメージ。",
			},
		},
		{
			name: { ja: "うずしお" },
			damage: 90,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559819,
			},
		},
	],

	evolveFrom: {
		ja: "ポッタイシ",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [395],
};

export default card;
