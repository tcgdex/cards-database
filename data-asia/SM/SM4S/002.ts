import { Card } from "../../../interfaces";
import Set from "../SM4S";

const card: Card = {
	set: Set,
	name: {
		ja: "ノクタス",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "夜になると 活動を はじめる。 砂漠の 暑さに 疲れ果てた 獲物を 見つけ出し 捕らえるのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "トゲでえぐる" },
			damage: "30+",
			cost: ["Grass"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっているなら、60ダメージ追加。",
			},
		},
		{
			name: { ja: "つけねらう" },
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンに40ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560314,
			},
		},
	],

	evolveFrom: {
		ja: "サボネア",
	},

	retreat: 2,
	rarity: "Uncommon",
	dexId: [332],
};

export default card;
