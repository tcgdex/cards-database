import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'アリゲイツ'
	},

	illustrator: 'Naoki Saito',
	rarity: 'Common',
	category: 'Pokemon',
	dexId: [159],
	hp: 90,
	types: ['Water'],

	evolveFrom: {
		ja: 'ワニノコ'
	},

	description: {
		ja: 'キバは 抜けても 次から 次に 生えてくる。 いつも 口の中には ４８本の キバが そろっている。'
	},

	stage: 'Stage1',

	abilities: [
		{
			type: 'Ability',
			name: { ja: 'とびこむ' },
			effect: {
				ja: 'このポケモンがベンチにいるなら、自分の番に1回使える。自分のバトルポケモンについているエネルギーをすべて、このポケモンにつけ替える。つけ替えた場合、このポケモンをバトルポケモンと入れ替える。'
			}
		}
	],

	attacks: [
		{
			name: { ja: 'かみつく' },
			damage: 60,
			cost: ['Water', 'Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Grass', value: "×2" }],
	resistances: [],

	retreat: 3,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560178,
				tcgplayer: 573934,
				cardtrader: 142421
			}
		}
	]
}

export default card
