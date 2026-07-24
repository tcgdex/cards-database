import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "ピクシー",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 100,
	types: ["Fairy"],

	description: {
		ja: "人前に 姿を みせることを 好まない。 深い 山の 奥で 群れに なって ひっそり 暮らす。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "こもりうた" },
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
			},
		},
		{
			name: { ja: "コメットパンチ" },
			damage: 60,
			cost: ["Fairy", "Colorless", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンの「コメットパンチ」のダメージは「+60」される。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [{ type: "Darkness", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561502,
			},
		},
	],

	evolveFrom: {
		ja: "ピッピ",
	},

	retreat: 1,
	rarity: "Common",
	dexId: [36],
};

export default card;
