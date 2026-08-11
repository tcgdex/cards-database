import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "マリィのチョロネコ",
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "愛くるしい しぐさで 油断させ 寄ってきた 相手を いきなり ツメで ひっかいて 笑っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "シャープネイル" },
			damage: "20+",
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンが「ポケモンex」なら、40ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863760,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "None",
	dexId: [509],
};

export default card;
