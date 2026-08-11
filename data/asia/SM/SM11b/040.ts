import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "タイプ：ヌル",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		ja: "ある任務の ために 開発された ポケモン兵器。 実験中に 暴走した ため 凍結された。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "エアスラッシュ" },
			damage: 50,
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555227,
			},
		},
	],

	retreat: 2,
	regulationMark: "C",
	rarity: "Common",
	dexId: [772],
};

export default card;
