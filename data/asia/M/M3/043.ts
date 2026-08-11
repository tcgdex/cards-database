import { Card } from "models/database/card";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "チゴラス",
	},

	illustrator: "Tomoki Sone",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'ja-jp': "化石から 復活した ポケモン。 気に入らないことが あると かんしゃくを 起こして 大暴れ。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "いきりたつ"}, "damage": "20x", "cost": ["Fighting", "Colorless"], "effect": {"ja": "このポケモンにのっているダメカンの数×20ダメージ。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	evolveFrom: {
		'ja-jp': "古びたアゴの化石",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [696],

	thirdParty: {
		cardmarket: 867965,
		tcgplayer: 674362,
	},
};

export default card;