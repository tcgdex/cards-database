import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "チラチーノ",
	},

	illustrator: "Ayako Ozaki",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "白い 体毛は 特別な 脂で コーティングされているので 敵の 攻撃を 受け流すのだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ともだちのわ" },
			damage: "20+",
			cost: ["Colorless"],
			effect: { ja: "自分のベンチポケモンの数×20ダメージ追加。" },
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	evolveFrom: {
		ja: "チラーミィ",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [573],

	thirdParty: {
		cardmarket: 828623,
		tcgplayer: 636432,
	},
};

export default card;
