import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Rocket's Hitmonchan ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [107],
	hp: 100,
	types: ["Darkness"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ストライクバック",
			},
			effect: {
				'ja-jp': "RocketのHitmonchan Exがアクティブなポカモンであり、対戦相手の攻撃によって損傷を受けている場合（RocketのHitmonchan Exがノックアウトされたとしても）、攻撃するPokã©Monに2つのダメージカウンターを置きます。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				'ja-jp': "マッハパンチ",
			},
			effect: {
				'ja-jp': "対戦相手のベンチポケモンの1つに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				'ja-jp': "マグナムパンチ",
			},
			damage: 60,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
