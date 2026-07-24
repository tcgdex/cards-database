import { Card } from "../../../interfaces";
import Set from "../SM5S";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴウカザル",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "素早さで 相手を 翻弄する。 両手 両足を 使った 独特の 戦い方を する。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "あつきとうし" },
			effect: {
				ja: "このポケモンがいるかぎり、相手のバトルポケモンは、やけどでのせるダメカンの数が6個になる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "バーストパンチ" },
			damage: 50,
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをやけどにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559974,
			},
		},
	],

	evolveFrom: {
		ja: "モウカザル",
	},

	retreat: 1,
	rarity: "Rare",
	dexId: [392],
};

export default card;
