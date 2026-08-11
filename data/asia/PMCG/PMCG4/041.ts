import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "わるいオコリザル",
	},

	illustrator: "Mitsuhiro Arita",
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
				'ja-jp': "狂乱",
			},
			effect: {
				'ja-jp': "Dark Primeapeが混乱している間にダメージを与えた場合（それ自体が）</em> </em>であれば、30回のダメージを与えます。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: {
				'ja-jp': "熱狂的な攻撃",
			},
			effect: {
				'ja-jp': "ダークプライムエーテは現在混乱しています（ダメージを受けた後）。",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575769
			},
		},
	],
};

export default card
