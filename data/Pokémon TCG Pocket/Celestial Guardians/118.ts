import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Dugtrio",
		fr: "Triopikeurd'Alola",
		es: "Dugtriode Alola",
		it: "Dugtriodi Alola",
		de: "Alola-Digdri",
		'pt-br': "Dugtriode Alola",
		ko: "알로라닥트리오"
	},

	illustrator: "Yuka Morii",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	evolveFrom: {
		en: "Alolan Diglett"
	},

	description: {
		en: "Their beautiful, metallic whiskers create a sort of protective helmet on their heads, and they also function as highly precise sensors.",
		fr: "Les magnifiques vibrisses métalliques\nsur ses têtes lui servent à la fois de casque\nprotecteur et de détecteur très précis.",
		es: "Las espléndidas melenas metálicas que cubren sus cabezas hacen\nlas veces de casco protector y de sensor de gran precisión.",
		it: "Oltre a proteggerlo come un casco, le sue meravigliose\nchiome metalliche fungono da sensori estremamente precisi.",
		de: "Seine prächtigen, metallischen Haare schützen seine\nKöpfe wie ein Helm. Gleichzeitig dienen sie ihm als\npräzise Sensoren.",
		'pt-br': "Os belíssimos bigodes metálicos deste Pokémon criam\num tipo de capacete protetivo em sua cabeça. Além disso,\nfuncionam como sensores extremamente precisos.",
		ko: "아름다운 금속질의 수염은\n헬멧처럼 머리를 보호하는 동시에\n고성능 센서이기도 하다."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Iron Head",
			fr: "Tête de Fer",
			es: "Cabeza de Hierro",
			it: "Metaltestata",
			de: "Eisenschädel",
			'pt-br': "Cabeça de Ferro",
			ko: "아이언헤드"
		},

		damage: "70x",
		cost: ["Metal", "Metal"],

		effect: {
			en: "Flip a coin until you get tails. This attack does 70 damage for each heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 70 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 70 puntos de daño por cada cara.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 70 danni ogni volta che esce testa.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 70 pontos de dano para cada cara.",
			ko: "뒷면이 나올 때까지 동전을 던져서 앞면이 나온 수 × 70데미지를 준다."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["solgaleo", "lunala"]
}

export default card
