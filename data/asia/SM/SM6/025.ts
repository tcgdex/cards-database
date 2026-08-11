import { Card } from "../../../interfaces";
import Set from "../SM6";

const card: Card = {
	set: Set,
	name: {
		ja: "カチコール",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		ja: "マイナス１００度の 冷気で 敵を 氷漬けにする。 万年雪に 覆われた 山で 群れを 作る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かちわる" },
			damage: 10,
			cost: ["Water"],
			effect: {
				ja: "場に出ている相手のスタジアムをトラッシュする。トラッシュした場合、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559570,
			},
		},
	],

	retreat: 2,
	rarity: "Common",
	dexId: [712],
};

export default card;
