import { Card } from "models/database/card";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メタグロス",
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	hp: 180,
	types: ["Metal"],

	description: {
		'ja-jp': "メタングが 合体して 生まれた。 ４つの 脳を 持つ メタグロスは スーパーコンピュータ並みの 知能。",
	},

	stage: "Stage2",

	attacks: [
		{
			name: { ja: "はねかえす" },
			damage: 60,
			cost: ["Metal"],
			effect: {
				'ja-jp': "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
			},
		},
		{
			name: { ja: "メタリックハンマー" },
			damage: "150+",
			cost: ["Metal", "Metal", "Metal", "Colorless"],
			effect: {
				'ja-jp': "のぞむなら、このポケモンについている[M]エネルギーを3個トラッシュし、150ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 876958,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "メタング",
	},

	retreat: 3,
	regulationMark: "J",
	rarity: "Uncommon",
	dexId: [376],
};

export default card;
