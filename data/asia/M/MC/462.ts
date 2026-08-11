import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ペンドラー",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "首のツメで 獲物を つかむと そのまま 地面に 叩きつけ 毒のトゲを 突きたてるぞ。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "ひどうなひとさし" },
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンの残りHPが「10」になるように、ダメカンをのせる。",
			},
		},
		{
			name: { ja: "ヘドロばくだん" },
			damage: 160,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863764,
			},
		},
	],

	evolveFrom: {
		ja: "ホイーガ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [545],
};

export default card;
