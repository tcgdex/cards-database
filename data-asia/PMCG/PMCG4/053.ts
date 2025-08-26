import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いドラゴナイト",
	},

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
				ja: "ミニオンを召喚します",
			},
			effect: {
				ja: "手からダークドラゴナイトを演奏するときは、デッキを最大2つの基本的なPokmonを検索し、ベンチに置きます。その後、デッキをシャッフルします。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			name: {
				ja: "巨大な尾",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 70,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
