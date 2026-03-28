import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "Nのゾロアークex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	abilities: [{"type": "Ability", "name": {"ja": "とりひき"}, "effect": {"ja": "自分の番に、自分の手札を1枚トラッシュするなら、1回使える。自分の山札を2枚引く。"}}],

	attacks: [{"name": {"ja": "ナイトジョーカー"}, "cost": ["Darkness", "Darkness"], "effect": {"ja": "自分のベンチの「Nのポケモン」が持つワザを1つ選び、このワザとして使う。"}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "Nのゾロア",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	suffix: "EX",
};

export default card;
