import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ニャヒート'
	},

	illustrator: 'Shin Nagasawa',
	rarity: 'Common',
	category: 'Pokemon',
	dexId: [726],
	hp: 90,
	types: ['Fire'],

	evolveFrom: {
		ja: 'ニャビー'
	},

	description: {
		ja: '首の 付け根に 炎の 鈴が ある。 炎が 噴きだすとき リンリンと 高い音が 鳴る。'
	},

	stage: 'Stage1',

	attacks: [
		{
			name: { ja: 'いばる' },
			effect: {
				ja: 'コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを、1個トラッシュする。'
			},
			cost: ['Colorless']
		},
		{
			name: { ja: 'ほのおのツメ' },
			damage: 30,
			cost: ['Fire', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Water', value: "×2" }],
	resistances: [],

	retreat: 1,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560175,
				tcgplayer: 573931,
				cardtrader: 142418
			}
		}
	]
}

export default card
