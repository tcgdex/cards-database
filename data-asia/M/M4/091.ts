import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "クロバット",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	abilities: [{"type": "Ability", "name": {"ja": "よるこうさく"}, "effect": {"ja": "このポケモンがバトル場にいるなら、自分の番に1回使える。自分の山札から好きなカードを1枚選ぶ。残りの山札を切り、選んだカードを山札の上にもどす。"}}],

	attacks: [{"name": {"ja": "どくおんぱ"}, "cost": ["Darkness"], "damage": 80, "effect": {"ja": "相手のバトルポケモンをどくとこんらんにする。"}}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ゴルバット",
	},

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [169],
};

export default card;
