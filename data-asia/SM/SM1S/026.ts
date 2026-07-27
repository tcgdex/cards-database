import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "ドヒドイデ",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "１２本の足で 海底を はう。 ドヒドイデの はったあとには サニーゴのカスが 散らばっている。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "どくびし" },
			effect: {
				ja: "このポケモンがいるかぎり、相手のバトルポケモンがにげるたび、新しく出てきたポケモンをどくにする。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ベノムショック" },
			damage: "50+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンがどくなら、50ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561703,
			},
		},
	],

	evolveFrom: {
		ja: "ヒドイデ",
	},

	retreat: 3,
	rarity: "Rare",
	dexId: [748],
};

export default card;
