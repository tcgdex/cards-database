import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "サザンドラ",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "昔 人が 邪悪 そのものと 忌み嫌い 攻撃し続けたため 凶暴になったと 言われている。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "みつくびバイト" },
			cost: ["Darkness"],
			effect: {
				ja: "コインを3回投げ、オモテの数ぶん、相手のバトルポケモンについているエネルギーを選び、トラッシュする。",
			},
		},
		{
			name: { ja: "しっこくのキバ" },
			damage: 140,
			cost: ["Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908385,
			},
		},
	],

	evolveFrom: {
		ja: "ジヘッド",
	},

	retreat: 2,
	regulationMark: "J",
	rarity: "None",
	dexId: [635],
};

export default card;
