import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ひかるゲノセクト'
	},

	illustrator: 'Hitoshi Ariga',
	rarity: "Rare Shining",
	category: 'Pokemon',
	dexId: [649],
	hp: 130,
	types: ['Grass'],

	description: {
		ja: 'プラズマ団によって 改造された 古代の むしポケモン。 背中の 大砲が パワーアップした。'
	},

	stage: 'Basic',

	abilities: [
		{
			type: 'Ability',
			name: { ja: 'エナジーリロード' },
			effect: {
				ja: "自分の番に1回使える。自分の場のポケモンについている{G}エネルギーを1個、このポケモンにつけ替える。"
			}
		}
	],

	attacks: [
		{
			name: { ja: 'ガイブラスター' },
			effect: {
				ja: "このポケモンについている{G}エネルギーの数×20ダメージ追加。"
			},
			damage: '50+',
			cost: ['Colorless', 'Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Fire', value: "×2" }],
	resistances: [],

	retreat: 2,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560168,
				tcgplayer: 573924,
				cardtrader: 142411
			}
		}
	]
}

export default card
