import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "マネネ",
		'zh-tw': "魔尼尼",
		th: "มาเนเน",
		id: "Mime Jr."
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	dexId: [439],
	hp: 30,
	types: ["Psychic"],

	description: {
		ja: "相手の 動きを そっくりに 真似を して 戸惑わせている あいだに さっさと 逃げるのだ。",
		'zh-tw': "可以分毫不差地模仿對手的動作，趁對手迷惑的時候迅速逃走。",
		th: "จะเลียนแบบการเคลื่อนไหวของอีกฝ่ายให้เหมือนเปี๊ยบ และในช่วงที่อีกฝ่ายกำลังสับสนก็จะรีบหนีไป",
		id: "Mime Jr. menirukan gerakan lawan dengan mirip. Ia langsung melarikan diri ketika lawan tersebut jadi bingung olehnya."
	},

	stage: "Basic",

	attacks: [{


		name: {
			ja: "マネマネごっこ",
			'zh-tw': "扮家家酒",
			th: "ติ๊ต่าง",
			id: "Main Mime Mime"
		},

		effect: {
			ja: "相手は相手自身の場のポケモンが持っているワザを1つ選ぶ。選ばれたワザをこのワザとして使う。",
			'zh-tw': "對手選擇對手自己的場上寶可夢持有的1個招式。被選擇的招式作為這個招式使用。",
			th: "ฝ่ายตรงข้ามเลือกท่าต่อสู้ที่โปเกมอนบนกระดานฝ่ายตรงข้ามเองมี 1 ท่า นำท่าต่อสู้ที่ถูกเลือกไว้มาใช้เป็นท่าต่อสู้นี้ได้",
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