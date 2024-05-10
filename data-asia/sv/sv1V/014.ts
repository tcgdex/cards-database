import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "スコヴィラン",
		'zh-tw': "狠辣椒",
		th: "สโกวิลเลิน",
		id: "Scovillain"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [952],
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "グリーンヘッドは 辛み成分に 脳が 刺激されて 凶暴化。 暴れだすと 手がつけられない。",
		'zh-tw': "綠色的頭因為腦部受到了辣味成分的刺激而變得凶暴。 一旦暴怒起來就會一發不可收拾。",
		th: "หัวสีเขียวนั้นมีนิสัยดุร้ายเพราะสมองถูกกระตุ้นด้วยสารเผ็ดร้อน หากเริ่มอาละวาดก็ยากที่จะจัดการได้",
		id: "Scovillain kepala hijau menjadi ganas karena otaknya distimulasi oleh komponen pedas. Pokémon ini tidak dapat dihentikan jika mulai mengamuk."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ホットバイト",
			'zh-tw': "滾燙啃咬",
			th: "ฮอตไบต์",
			id: "Hot Bite"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		}
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "げきからヒーハー",
			'zh-tw': "尖叫辣",
			th: "เผ็ดซี้ดซ้าด",
			id: "Pedas Ekstrem Yuhuu"
		},

		damage: "90+",

		effect: {
			ja: "このポケモンにエネルギーがついているなら、90ダメージ追加。",
			'zh-tw': "若這隻寶可夢身上附有【火】能量卡，則增加90點傷害。",
			th: "ถ้าโปเกมอนนี้มีพลังงาน[ไฟ]ติดอยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 90",
			id: "Jika Pokémon ini mengenakan Energi {Api}, kerusakan yang diberikan bertambah sejumlah 90."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card