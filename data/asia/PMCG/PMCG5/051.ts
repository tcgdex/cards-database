import { Card } from "models/database/card"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "タケシのオコリザル",
	},
	illustrator: "Ken Sugimori",

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
				'ja-jp': "スクラム",
			},
			effect: {
				'ja-jp': "Brockのプライムエーパーがちょうど10 hpの残りを持っている場合は、それをシャッフルし、すべてのカードがデッキに取り付けられています。  このパワーは、ブロックの入門が眠っている、混乱し、麻痺している間に機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Fighting"],
			name: {
				'ja-jp': "メガ・スラッシュ",
			},
			effect: {
				'ja-jp': "ブロックのプライムエーパーは、それ自体に20のダメージを与えます。スタジアムカードが再生されている場合は、捨ててください。",
			},
			damage: 60,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 576761
			},
		},
	],
};

export default card
