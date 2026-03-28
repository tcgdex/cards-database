import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ルナトーン",
	},

	illustrator: "Ounishi",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	description: {
		ja: "４０年前に 隕石の 落ちた 場所で 初めて 見つかった。 にらむ だけで 敵を 眠らせる。",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "ルナサイクル"}, "effect": {"ja": "自分の場に「ソルロック」がいて、自分の番に、自分の手札から「基本エネルギー」を1枚トラッシュするなら、1回使える。自分の山札を3枚引く。この特性は別の「ルナサイクル」を使った番は使えない。"}}],

	attacks: [{"name": {"ja": "パワージェム"}, "cost": ["Fighting", "Fighting"], "damage": 50}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [337],
};

export default card;
