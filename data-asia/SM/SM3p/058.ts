import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "ひかるルギア",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "深い 海溝の 底で 眠る。 ルギアが 羽ばたくと ４０日 嵐が 続くと 言われている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぎんのつばさ" },
			damage: "60+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが特性を持っているなら、60ダメージ追加。",
			},
		},
		{
			name: { ja: "エアロフォース" },
			damage: 130,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560216,
			},
		},
	],

	retreat: 2,
	rarity: "Shiny Ultra Rare",
	dexId: [249],
};

export default card;
