import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ムウマージ"
	},

	illustrator: "aoki",
	category: "Pokemon",
	dexId: [429],
	hp: 90,
	types: ["Psychic"],

	description: {
		'ja-jp': "呪文のような 鳴き声だが まれに 相手を 幸せにする 効果も 秘めているという。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "マジカルフリック"
		},

		effect: {
			'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のバトルポケモンについているエネルギーを1個選び、相手のベンチポケモンにつけ替える。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'ja-jp': "ねんどうだん"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701541,
				tcgplayer: 568206,
			},
		},
	],

	retreat: 1,
}

export default card