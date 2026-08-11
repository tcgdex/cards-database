import { Card } from "../../../interfaces";
import Set from "../SM4A";

const card: Card = {
	set: Set,
	name: {
		ja: "ホルード",
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		ja: "大きな 耳は １トンを 超える 岩を 楽に 持ち上げる パワー。 工事現場で 大活躍する。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "あなをほる" },
			damage: 60,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
		{
			name: { ja: "アームハンマー" },
			damage: 90,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手の山札を上から1枚トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560292,
			},
		},
	],

	evolveFrom: {
		ja: "ホルビー",
	},

	retreat: 3,
	rarity: "Common",
	dexId: [660],
};

export default card;
