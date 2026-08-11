import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘルガー",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "ヘルガーの 不気味な 遠ぼえは 地獄から 死神が 呼ぶ 声と 昔の 人は 想像していた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ほのおのキバ" },
			damage: 30,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
		{
			name: { ja: "つらぬくキバ" },
			damage: 90,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "このワザのダメージは抵抗力を計算しない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560275,
			},
		},
	],

	evolveFrom: {
		ja: "デルビル",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [229],
};

export default card;
