import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "ムウマージ",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "祟りや 呪いを 振りまくとして 恐れられて きた。 気まぐれに 人を助ける 呪文も 使う。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ふしぎなことづけ" },
			effect: {
				ja: "自分の番に1回使えて、使ったなら、このポケモンをきぜつさせる。自分の手札が7枚になるように、山札を引く。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "さいみんはどう" },
			damage: 70,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557394,
			},
		},
	],

	evolveFrom: {
		ja: "ムウマ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [429],
};

export default card;
