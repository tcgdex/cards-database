import { Card } from "models/database/card"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "照らされます",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [314],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ビーコン保護",
			},
			effect: {
				'ja-jp': "Volbeatがプレイされている限り、その名前が暗くなっている相手のPokã©Monからの攻撃によって照らされるために、損傷を含むすべての効果を防​​ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "家族を呼びます",
			},
			effect: {
				'ja-jp': "デッキを検索して、基本的なポケモンを探して、ベンチに置きます。  その後、デッキをシャッフルします。",
			},
		},
		{
			cost: ["Grass", "Colorless"],
			name: {
				'ja-jp': "奇妙なラスピン",
			},
			effect: {
				'ja-jp': "防御ポケモンが進化したポケモンである場合、防御ポケモンは混乱しています。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
