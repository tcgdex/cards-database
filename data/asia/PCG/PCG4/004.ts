import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ミーガニウム",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [154],
	hp: 100,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "癒しの香り",
			},
			effect: {
				'ja-jp': "MeganiumがアクティブなPokã©Monである限り、各Pokã©Mon（Pokã©Mon-Exを除く）（あなたと対戦相手の両方を除く）から1つのダメージカウンターを削除します。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				'ja-jp': "弾力性のある動き",
			},
			effect: {
				'ja-jp': "Meganiumに最大5つのダメージカウンターを配置できます。そうした場合、この攻撃は50のダメージと、この方法でMeganiumに置いたダメージカウンターごとに10ダメージをさらに10回かけます。",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
