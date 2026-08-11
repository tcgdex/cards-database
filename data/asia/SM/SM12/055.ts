import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ソルガレオ",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	description: {
		ja: "ウルトラホールを 開いた 結果 異世界の エネルギーや 生命を この世界に 呼ぶことも あるのだ。",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: { ja: "にちりんのそうこう" },
			effect: {
				ja: "自分の場に「ルナアーラ」がいるなら、自分の場の「ソルガレオ」と「ルナアーラ」が、相手のポケモンから受けるワザのダメージは「-50」される。この効果は、この特性を持つポケモンが何匹いても、重ならない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ソルファング" },
			damage: 180,
			cost: ["Metal", "Metal", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、2個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 554909,
			},
		},
	],

	evolveFrom: {
		ja: "コスモウム",
	},

	retreat: 3,
	regulationMark: "C",
	rarity: "Rare",
	dexId: [791],
};

export default card;
