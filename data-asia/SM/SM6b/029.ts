import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ソルロック",
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "昼間に 太陽エネルギーを たくわえる。 いつも 無表情。 相手の 考えを 読み取る。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "サンライト" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の場の「ルナトーン」の最大HPは「130」になる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "やけつくひかり" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。ウラなら、相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559179,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [338],
};

export default card;
