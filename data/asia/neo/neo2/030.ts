import { Card } from "models/database/card"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "a",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [201],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'ja-jp': "怒り[怒り]",
			},
			effect: {
				'ja-jp': "名前が掲載されていないPokmonが隠された電源攻撃を使用するたびに、その攻撃は、Unown [a]の各ダメージカウンターに対してさらに10ダメージを与えます。プレイ中に複数の未使用[a]がある場合は、攻撃ごとに1 [怒り]のみを使用します。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "隠された力",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
