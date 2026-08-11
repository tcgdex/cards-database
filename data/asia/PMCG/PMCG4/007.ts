import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "わるいベトベトン",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [89],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'ja-jp': "粘着性のグー",
			},
			effect: {
				'ja-jp': "暗いMukがあなたのアクティブなポケモンである限り、あなたの対戦相手は彼または彼女のアクティブなポケモンを後退させるために無色の無色のより多くを支払います。このパワーは、暗いムックが眠っている、混乱し、麻痺している間に機能しなくなります。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				'ja-jp': "スラッジパンチ",
			},
			effect: {
				'ja-jp': "防御ポケモンは現在中毒になっています。",
			},
			damage: 20,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575768
			},
		},
	],
};

export default card
