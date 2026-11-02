import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "サケブシッポex",
	},

	illustrator: "akagi",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ぜっきょう" },
			cost: ["Colorless"],
			effect: {
				ja: "このワザは、後攻プレイヤーの最初の番にだけ使える。次の相手の番、相手は手札からサポートを出して使えない。",
			},
		},
		{
			name: { ja: "かみくだく" },
			damage: 120,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863655,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [985],

	suffix: "EX",
};

export default card;
