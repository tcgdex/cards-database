import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "アローラライチュウ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "アローラ地方 でのみ この姿に 進化する。 その要因の ひとつが 餌であると 研究家は 語る。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "サーフテール" },
			effect: {
				ja: "場にスタジアムが出ているなら、このポケモンのにげるためのエネルギーは、すべてなくなる。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "サイコキネシス" },
			damage: "70+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数x20ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560261,
			},
		},
	],

	evolveFrom: {
		ja: "ピカチュウ",
	},

	retreat: 2,
	rarity: "Rare",
	dexId: [26],
};

export default card;
