import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ミガルーサ",
		'zh-tw': "輕身鱈",
		id: "Veluza"
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	dexId: [976],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "無駄な 肉を 捨て去ると 心が 研ぎ澄まされ サイコパワーが 上がる。 贅肉は 淡白だが 美味しい。",
		'zh-tw': "捨棄不必要的肉，能使其心靈受到磨練，精神力量得以提升。 贅肉滋味清淡，但卻相當可口。",
		id: "Begitu membuang daging yang tidak dibutuhkan, hati Veluza menjadi terasah dan kekuatan psikokinesisnya meningkat. Daging berlebih Pokémon ini hambar namun lezat."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ぶつかる",
			'zh-tw': "衝撞",
			id: "Menyeruduk"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "スリムスクリュー",
			'zh-tw': "纖細螺旋",
			id: "Slim Screw"
		},

		damage: 120,

		effect: {
			ja: "このワザは、自分の手札が1枚もないなら、エネルギー1個で使える。",
			'zh-tw': "若自己1張手牌都沒有，則這個招式只需要1個【水】能量即可使用。",
			id: "Jika Kartu Pegangan sendiri tidak tersisa 1 lembar pun, serangan ini dapat digunakan dengan 1 Energi {Air}."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card