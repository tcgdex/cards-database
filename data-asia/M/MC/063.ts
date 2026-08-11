import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "カミッチュ",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "頭を 出している そとッチュと 尻尾を 出している なかッチュが 助け合い りんごのなかで 暮らす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "コーティングアタック" },
			damage: 20,
			cost: ["Grass"],
			effect: {
				ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863354,
			},
		},
	],

	evolveFrom: {
		ja: "カジッチュ",
	},

	retreat: 3,
	regulationMark: "H",
	rarity: "None",
	dexId: [1011],
};

export default card;
