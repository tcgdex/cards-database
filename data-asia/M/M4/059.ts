import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "メタグロス",
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		ja: "メタングが 合体して 生まれた。 ４つの 脳を 持つ メタグロスは スーパーコンピュータ並みの 知能。",
	},

	stage: "Stage2",
	attacks: [
		{ "name": { "ja": "はねかえす" }, "damage": "60", "cost": ["Metal"], "effect": { "ja": "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］" } },
		{ "name": { "ja": "メタリックハンマー" }, "damage": "150+", "cost": ["Metal", "Metal", "Metal"], "effect": { "ja": "のぞむなら、このポケモンについている「Metal」エネルギーを3個トラッシュし、150ダメージ追加。" } }
	],

	
	weaknesses: [{ "type": "Fire", "value": "x2" }],
	
	resistances: [],
	
	retreat: 3,

	variants: [{"type": "normal"}],
	rarity: "Uncommon",
	dexId: [376],
	regulationMark: "I",
};

export default card;
