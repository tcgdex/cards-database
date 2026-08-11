import { Card } from "../../../interfaces";
import Set from "../SM11a";

const card: Card = {
	set: Set,
	name: {
		ja: "オーロット",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "森の 化け物と 恐れられる。 木こりたちは オーロットが 嫌う ほのおタイプを連れ 森に 入る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "まどわすもり" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "のぞむなら、相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
		{
			name: { ja: "シャドーインパクト" },
			damage: 120,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "自分のポケモン1匹に、ダメカンを4個のせる。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556637,
			},
		},
	],

	evolveFrom: {
		ja: "ボクレー",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [709],
};

export default card;
