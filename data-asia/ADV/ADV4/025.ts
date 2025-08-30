import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "ミロティック",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [350],
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "ヒーリングシャワー",
			},
			effect: {
				ja: "ターン中に、手からミロティックをプレイしてPokã©Monの1つを進化させると、すべてのPokã©Monと対戦相手のPokã©Mon（Pokã©Mon-Exを除く）からすべてのダメージカウンターを削除できます。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "波のスプラッシュ",
			},
			damage: 30,
		},
		{
			cost: ["Water", "Water", "Colorless", "Colorless"],
			name: {
				ja: "歪んだ波",
			},
			effect: {
				ja: "ダメージを与える前に、防御ポケモンから3つのダメージカウンターを削除します（3つ未満の場合はすべて）。",
			},
			damage: 80,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
