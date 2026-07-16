import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "ムウマージ",
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "どこからともなく 現れ 呪文を つぶやき 呪いを かけたり 恐ろしい 幻を みせる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "カオスウィール" },
			damage: 30,
			cost: ["Psychic"],
			effect: {
				ja: "次の相手の番、相手は手札から、「ポケモンのどうぐ」「特殊エネルギー」を出してつけられず「スタジアム」も出せない。",
			},
		},
		{
			name: { ja: "くろまじゅつ" },
			damage: "20×",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手の手札の枚数x20ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560263,
			},
		},
	],

	evolveFrom: {
		ja: "ムウマ",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [429],
};

export default card;
