import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "サンダース",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		ja: "肺の 中に 電気を 生み出す 器官が ある。 吐息に 混ざって 電気の 音が バチバチ聞こえる。",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "スピードエール" },
			effect: {
				ja: "このポケモンがいるかぎり、自分の場の「イーブイ」から進化する「ポケモンGX」が使うワザに必要なエネルギーは、それぞれ【無】エネルギー1個ぶん少なくなる。この効果は、この特性を持つポケモンが何匹いても、重ならない",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ヘッドボルト" },
			damage: 70,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 543681,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	regulationMark: "C",
	rarity: "None",
	dexId: [135],
};

export default card;
