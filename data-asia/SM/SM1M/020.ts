import { Card } from "../../../interfaces";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		ja: "クワガノン",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	description: {
		ja: "お腹に ある 発電器官で 電気を 起こす。 電撃ビームで とりポケモンも 圧倒する。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ストロングチャージ" },
			effect: {
				ja: "自分の番に1回使える。自分の山札にある[草]エネルギーと[雷]エネルギーを1枚ずつ、自分のポケモンに好きなようにつける。そして山札を切る。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "エレクトロキャノン" },
			damage: 150,
			cost: ["Lightning", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、3個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561621,
			},
		},
	],

	evolveFrom: {
		ja: "デンヂムシ",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [738],
};

export default card;
