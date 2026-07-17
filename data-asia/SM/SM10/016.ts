import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ガオガエン",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],

	description: {
		ja: "荒っぽく わがままだが 格下を なぶることは つまらないので キライ。 格上の 相手に やる気を 出す。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ストロングエール" },
			effect: {
				ja: "このポケモンがいるかぎり、自分のポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。この効果は、この特性を持つポケモンが何匹いても、重ならない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かえんほうしゃ" },
			damage: 90,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557371,
			},
		},
	],

	evolveFrom: {
		ja: "ニャヒート",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [727],
};

export default card;
