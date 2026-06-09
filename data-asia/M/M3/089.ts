import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "チゴラス",
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "化石から 復活した ポケモン。 気に入らないことが あると かんしゃくを 起こして 大暴れ。",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "いきりたつ"}, "damage": "20x", "cost": ["Fighting", "Colorless"], "effect": {"ja": "このポケモンにのっているダメカンの数×20ダメージ。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "古びたアゴの化石",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [696],

	thirdParty: {
		cardmarket: 868099,
		tcgplayer: 674408,
	},
};

export default card;