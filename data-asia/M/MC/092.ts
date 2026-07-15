import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ブーバーン",
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "腕の先から 摂氏２０００度の 火の玉を 撃ちだすとき 体は 熱のため ほのかに 白くなる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "マグマのはどう" },
			effect: {
				ja: "このポケモンがいるかぎり、相手のやけどのポケモンは、やけどでのせるダメカンの数が3個多くなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "やきこがす" },
			damage: 90,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863386,
			},
		},
	],

	evolveFrom: {
		ja: "ブーバー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "None",
	dexId: [467],
};

export default card;
