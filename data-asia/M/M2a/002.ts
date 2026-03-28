import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤンヤンマ",
	},

	illustrator: "svlt",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "翅を 高速で はためかせて 空中で 停止 しながら 自分の 縄張りを 見張っている。",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ふきとばし"}, "cost": ["Colorless"], "effect": {"ja": "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"}}, {"name": {"ja": "するどいはね"}, "cost": ["Grass", "Colorless"], "damage": 30}],

	weaknesses: [{"type": "Lightning", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [193],
};

export default card;
