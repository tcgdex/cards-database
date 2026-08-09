import { Card } from "../../../interfaces";
import Set from "../SM11";

const card: Card = {
	set: Set,
	name: {
		ja: "クルミル",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "葉っぱを かみ切り 口から 出す 粘着糸で 縫い合わせる。 自分で 服を 作る ポケモン。",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "はっぱのおくるみ" },
			effect: {
				ja: "このポケモンが受けるワザのダメージは「-10」される。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ふいをつく" },
			damage: 20,
			cost: ["Grass"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 556965,
			},
		},
	],

	retreat: 1,
	regulationMark: "C",
	rarity: "Common",
	dexId: [540],
};

export default card;
