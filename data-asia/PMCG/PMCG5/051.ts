import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ブロックの入門",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [57],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "スクラム",
			},
			effect: {
				ja: "Brockのプライムエーパーがちょうど10 hpの残りを持っている場合は、それをシャッフルし、すべてのカードがデッキに取り付けられています。  このパワーは、ブロックの入門が眠っている、混乱し、麻痺している間に機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Fighting"],
			name: {
				ja: "メガ・スラッシュ",
			},
			effect: {
				ja: "ブロックのプライムエーパーは、それ自体に20のダメージを与えます。スタジアムカードが再生されている場合は、捨ててください。",
			},
			damage: 60,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
