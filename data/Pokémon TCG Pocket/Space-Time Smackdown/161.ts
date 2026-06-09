import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Gastrodon",
		fr: "Tritosor",
		es: "Gastrodon",
		it: "Gastrodon",
		de: "Gastrodon",
		'pt-br': "Gastrodon",
		ko: "트리토돈"
	},

	illustrator: "takashi shiraishi",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [423],
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		en: "Shellos"
	},

	description: {
		en: "They normally inhabit rocky seashores, but in times of continuous rain, they can sometimes be found in the mountains, far from the sea.",
		fr: "On le rencontre généralement sur les côtes, mais\nquand il pleut suffisamment longtemps, on peut\nl'apercevoir dans les montagnes, loin de la mer.",
		es: "Normalmente viven en la costa, pero también\nes posible encontrarlos en montañas alejadas\ndel mar cuando caen lluvias persistentes.",
		it: "Di solito vive sui litorali rocciosi, ma in periodi\ndi piogge durature può capitare di trovarlo\nanche su monti molto distanti dal mare.",
		de: "Normalerweise hält es sich an der Küste auf,\ndoch bei fortdauerndem Regen trifft man es\nauch fernab vom Meer in den Bergen an.",
		'pt-br': "Costumam habitar litorais rochosos, mas, em épocas\nde chuvas constantes, podem ser encontrados\nnas montanhas, longe do mar.",
		ko: "평소에는 물가에 있지만, 비가 오래 내리면\n바다에서 멀리 떨어진\n산에서 발견될 때도 있다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Muddy Water",
			fr: "Ocroupi",
			es: "Agua Lodosa",
			it: "Fanghiglia",
			de: "Lehmbrühe",
			'pt-br': "Água Barrenta",
			ko: "탁류"
		},

		damage: 60,
		cost: ["Water", "Colorless", "Colorless"],

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon.",
			fr: "Cette attaque inflige aussi 20 dégâts à un des Pokémon de Banc de votre adversaire.",
			es: "Este ataque también hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival.",
			it: "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario.",
			de: "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente.",
			ko: "상대의 벤치 포켓몬 1마리에게도 20데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["palkia"]
}

export default card
