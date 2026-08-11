import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アイアント",
	},

	illustrator: "KEIICHIRO ITO",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "巣の 奥深くに タマゴを 産む。 クイタランに 襲われると 大きな 顎で 噛みついて 反撃。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かみくだく" },
			damage: 50,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863342,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [632],
};

export default card;
