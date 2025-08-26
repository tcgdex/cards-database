import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークプライムエーパー",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [57],
	hp: 60,
	types: ["Fighting"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "狂乱",
			},
			effect: {
				ja: "Dark Primeapeが混乱している間にダメージを与えた場合（それ自体が）</em> </em>であれば、30回のダメージを与えます。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: {
				ja: "熱狂的な攻撃",
			},
			effect: {
				ja: "ダークプライムエーテは現在混乱しています（ダメージを受けた後）。",
			},
			damage: 40,
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
