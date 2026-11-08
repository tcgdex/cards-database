import { Card } from "models/database/card";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マシェード",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 100,
	types: ["Fairy"],

	description: {
		'ja-jp': "点滅する 胞子を 吹き出し 眠りに 誘う。 眠った 獲物の 精気を 吸い取る。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ほうし" },
			effect: {
				'ja-jp': "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをねむりにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ゆめみにふれる" },
			damage: 50,
			cost: ["Fairy", "Fairy"],
			effect: {
				'ja-jp': "相手のバトルポケモンがねむりなら、相手のバトルポケモンについているエネルギーを、すべて山札にもどして切る。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558862,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ネマシュ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [756],
};

export default card;
