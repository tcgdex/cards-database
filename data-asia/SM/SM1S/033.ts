import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラペルシアン",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "丸い 顔と 最高級の ベルベットより 滑らかな 毛並みが アローラで 大人気の ポケモン。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ちょうはつ" },
			cost: [],
			effect: {
				ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
			},
		},
		{
			name: { ja: "ツメでえぐる" },
			damage: "30+",
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンにダメカンがのっているなら、30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561710,
			},
		},
	],

	evolveFrom: {
		ja: "アローラニャース",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [53],
};

export default card;
