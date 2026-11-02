import { Card } from "../../../interfaces";
import Set from "../SM10";

const card: Card = {
	set: Set,
	name: {
		ja: "サイドン",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "全身を よろいのような 皮膚で 守っている。 ２０００度の マグマの 中でも 生きられる。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ダーティワーク" },
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "相手の山札を上から1枚トラッシュする。この番、手札から「サカキの追放」を出して使っていたなら、さらに4枚トラッシュする。",
			},
		},
		{
			name: { ja: "つのでつく" },
			damage: 90,
			cost: ["Fighting", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557407,
			},
		},
	],

	evolveFrom: {
		ja: "サイホーン",
	},

	retreat: 4,
	regulationMark: "C",
	rarity: "Common",
	dexId: [112],
};

export default card;
