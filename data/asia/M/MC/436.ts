import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のニドリーノ",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "神経質で 喧嘩っ早い。 体内の アドレナリンが 増えると 毒素の 濃度も 高まるぞ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶちかます" },
			damage: 30,
			cost: ["Darkness", "Colorless"],
		},
		{
			name: { ja: "つのでえぐる" },
			damage: "60+",
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっているなら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863738,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のニドラン♂",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [33],
};

export default card;
