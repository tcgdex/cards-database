import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "マフォクシー",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "フレアマジック"}, "effect": {"ja": "自分の番に、自分の手札から「基本エネルギー」を1枚トラッシュするなら、1回使える。自分の手札が7枚になるように、山札を引く。"}}],

	attacks: [{"name": {"ja": "エナジーストーム"}, "cost": ["Fire", "Fire"], "damage": "30×", "effect": {"ja": "おたがいのポケモン全員についているエネルギーの数×30ダメージ。"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "テールナー",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [655],
};

export default card;
