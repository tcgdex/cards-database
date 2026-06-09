import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "オーベム",
	},

	illustrator: "Apios",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "相手の 記憶を 操作する。 ３色の 指を 点滅させて 仲間と 会話している らしい。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "めいそう" },
			cost: ["Psychic"],
			effect: { ja: "このポケモンのHPを「40」回復する。" },
		},
		{
			name: { ja: "サイコキネシス" },
			damage: "80+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{ type: "normal" },
		{ type: "reverse", foil: "pokeball" },
		{ type: "reverse", foil: "masterball" },
	],

	evolveFrom: {
		ja: "リグレー",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [606],

	thirdParty: {
		cardmarket: 828493,
		tcgplayer: 636398,
	},
};

export default card;
