import { Card } from "../../../interfaces";
import Set from "../SM10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ライチュウ&アローラライチュウGX",
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 260,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "タンデムショック" },
			damage: "80+",
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "この番、このポケモンがベンチからバトル場に出ていたなら、80ダメージ追加し、相手のバトルポケモンをマヒにする。",
			},
		},
		{
			name: { ja: "ライトニングライドGX" },
			damage: "150+",
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。追加で[雷]エネルギーが2個ついているなら、100ダメージ追加。［対戦中、自分はGXワザを1回しか使えない。］",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 557336,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Ultra Rare",
	dexId: [26, 26],

	suffix: "TAG TEAM-GX",
};

export default card;
