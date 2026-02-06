import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ムウマージ",
		'zh-tw': "夢妖魔",
		th: "มูมาจิ",
		id: "Mismagius"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [429],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "呪文のような 鳴き声だが まれに 相手を 幸せにする 効果も 秘めているという。",
		'zh-tw': "如同咒語般的叫聲據說也蘊藏著偶而會讓 對手變得幸福的效果。",
		th: "เสียงร้องราวร่ายมนตร์ ว่ากันว่าในบางครั้งจะมีฤทธิ์ที่ทำให้อีกฝ่ายมีความสุขแฝงอยู่",
		id: "Dikabarkan suara Mismagius yang terdengar seperti mantra tersimpan efek yang terkadang dapat membuat lawannya menjadi bahagia."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "マジカルフリック",
			'zh-tw': "魔法輕彈",
			th: "เมจิคัลฟลิก",
			id: "Magical Flick"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のバトルポケモンについているエネルギーを1個選び、相手のベンチポケモンにつけ替える。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。選擇1個對手的戰鬥寶可夢身上附加的能量，改附於對手的備戰寶可夢身上。",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ย้ายไปติดกับโปเกมอนบนเบนช์ฝ่ายตรงข้าม",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu pindahkan ke Pokémon Cadangan lawan."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ねんどうだん",
			'zh-tw': "念動彈",
			th: "บอลโทรจิต",
			id: "Bola Psikis"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 701089
	}
}

export default card