import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "マネネ",
		'zh-tw': "魔尼尼",
		id: "Mime Jr."
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	dexId: [439],
	hp: 30,
	types: ["Psychic"],

	description: {
		ja: "相手の 動きを そっくりに 真似を して 戸惑わせている あいだに さっさと 逃げるのだ。",
		'zh-tw': "可以分毫不差地模仿對手的動作，趁對手迷惑的時候迅速逃走。",
		id: "Mime Jr. menirukan gerakan lawan dengan mirip. Ia langsung melarikan diri ketika lawan tersebut jadi bingung olehnya."
	},

	stage: "Basic",

	attacks: [{


		name: {
			ja: "マネマネごっこ",
			'zh-tw': "扮家家酒",
			id: "Main Mime Mime"
		},

		effect: {
			ja: "相手は相手自身の場のポケモンが持っているワザを1つ選ぶ。選ばれたワザをこのワザとして使う。",
			'zh-tw': "對手選擇對手自己的場上寶可夢持有的1個招式。被選擇的招式作為這個招式使用。",
			id: "Lawan memilih 1 serangan yang dimiliki Pokémon di Arenanya. Gunakan serangan yang telah dipilih sebagai serangan ini."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card
