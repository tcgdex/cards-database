import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "わるいカイリュー",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [149],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'ja-jp': "ミニオンを召喚します",
			},
			effect: {
				'ja-jp': "手からダークドラゴナイトを演奏するときは、デッキを最大2つの基本的なPokmonを検索し、ベンチに置きます。その後、デッキをシャッフルします。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "巨大な尾",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 70,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 575745
			},
		},
	],
};

export default card
