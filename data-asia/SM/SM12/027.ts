import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "ランターン",
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],

	description: {
		ja: "触手に 棲む バクテリアが ランターンの 体液を 吸うとき 強い 発光現象が 起こる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ちらちらライト" },
			effect: {
				ja: "自分の番に何回でも使える。相手の山札を上から1枚見て、もとにもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "かくはんりゅう" },
			damage: 50,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "のぞむなら、相手に相手自身の山札を切らせる。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 554824,
			},
		},
	],

	evolveFrom: {
		ja: "チョンチー",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [171],
};

export default card;
