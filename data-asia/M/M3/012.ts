import { Card } from "../../../interfaces";
import Set from "../M3";

const card: Card = {
	set: Set,
	name: {
		ja: "ジュナイパーex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "スナイパーアイ"}, "effect": {"ja": "相手の手札が4枚なら、このポケモンはワザを使うためのエネルギーが、すべてなくなる。"}}],

	attacks: [{"name": {"ja": "クラッシュアロー"}, "damage": 240, "cost": ["Grass", "Colorless", "Colorless", "Colorless"], "effect": {"ja": "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "フクスロー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [724],

	thirdParty: {
		cardmarket: 867926,
		tcgplayer: 674331,
	},
};

export default card;