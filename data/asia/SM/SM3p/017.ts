import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャヒート",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "首の 付け根に 炎の 鈴が ある。 炎が 噴きだすとき リンリンと 高い音が 鳴る。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "いばる" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
		{
			name: { ja: "ほのおのツメ" },
			damage: 30,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560175,
			},
		},
	],

	evolveFrom: {
		ja: "ニャビー",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [726],
};

export default card;
