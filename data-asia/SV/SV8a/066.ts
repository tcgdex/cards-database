import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヨノワール",
		id: "Dusknoir",
		th: "โยนัวร์",
		'zh-tw': "黑夜魔靈",
		'zh-cn': "黑夜魔靈"
	},

	illustrator: "danciao",
	rarity: "None",
	category: "Pokemon",
	dexId: [477],
	hp: 160,
	types: ["Psychic"],

	description: {
		ja: "この世と あの世を 行ったり来たり。 さまよう 魂を 吸い込んで 運ぶと いわれ 恐れられている。",
		id: "Pokémon yang datang dan pergi ke dunia fana dan alam baka. Konon ia mengisap roh gentayangan dan mengangkutnya sehingga ditakuti.",
		th: "ไปกลับระหว่างโลกนี้และโลกหลังความตาย ผู้คนต่างหวาดกลัวเพราะเชื่อว่ามันจะดูดกลืนวิญญาณเร่ร่อนและพาไปด้วย",
		'zh-tw': "在這個世界與另一個世界間往返。 據說會吸入並帶走遊蕩的靈魂， 因此遭到人們畏懼。",
		'zh-cn': "在這個世界與另一個世界間往返。 據說會吸入並帶走遊蕩的靈魂， 因此遭到人們畏懼。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "カースドボム",
			id: "Cursed Bomb",
			th: "ระเบิดต้องสาป",
			'zh-tw': "咒詛炸彈",
			'zh-cn': "咒詛炸彈"
		},

		effect: {
			ja: "自分の番に1回使えて、使ったなら、このポケモンをきぜつさせる。相手のポケモン1匹に、ダメカンを13個のせる。",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pokémon ini KO jika menggunakan Ability ini. Letakkan 13 Token Kerusakan pada 1 Pokémon lawan.",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เมื่อใช้แล้ว จะทำให้โปเกมอนนี้[หมดสภาพ] วางตัวนับแดเมจ 13 ตัว บนโปเกมอนฝ่ายตรงข้าม 1 ตัว",
			'zh-tw': "在自己的回合時可使用1次，若使用，則將這隻寶可夢【昏厥】。在對手的1隻寶可夢身上放置13個傷害指示物。",
			'zh-cn': "在自己的回合時可使用1次，若使用，則將這隻寶可夢【昏厥】。在對手的1隻寶可夢身上放置13個傷害指示物。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "かげしばり",
			id: "Pengikat Bayangan",
			th: "จับเงา",
			'zh-tw': "影子束縛",
			'zh-cn': "影子束縛"
		},

		damage: 150,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。",
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat Mundur.",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนที่ได้รับท่าต่อสู้นี้ จะหนีไม่ได้",
			'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
			'zh-cn': "在下個對手的回合，受到這個招式的寶可夢無法撤退。"
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

	retreat: 3,
	regulationMark: "H"
}

export default card