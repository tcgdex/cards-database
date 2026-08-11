import { Card } from "../../../interfaces";
import Set from "../SM7a";

const card: Card = {
	set: Set,
	name: {
		ja: "ラプラス",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		ja: "密漁で 絶滅寸前に。 大切に 保護 された 結果 逆に 増え過ぎてきたという。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "ゆうえい" },
			effect: {
				ja: "自分の番に1回使える。自分の山札を上から2枚見て、好きな順番に入れ替えて、山札の上にもどす。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "れいとうビーム" },
			damage: 50,
			cost: ["Water", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558905,
			},
		},
	],

	retreat: 2,
	rarity: "Uncommon",
	dexId: [131],
};

export default card;
