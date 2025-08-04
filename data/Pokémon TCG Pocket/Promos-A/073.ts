import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Toucannon",
		fr: "Bazoucan",
		es: "Toucannon",
		it: "Toucannon",
		de: "Tukanon",
		'pt-br': "Toucannon",
		ko: "왕큰부리"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Trumbeak"
	},

	description: {
		en: "They smack beaks with others of their kind to communicate.\nThe strength and number of hits tell each other how they feel.",
		fr: "Ils communiquent entre eux en se frappant\nmutuellement sur le bec. La force et la cadence\ndes coups en disent long sur leur état d'esprit.",
		es: "Se comunican con sus compañeros chocando los\npicos. El número de veces y la fuerza con la que\nlo hacen transmiten sus distintos sentimientos.",
		it: "I Toucannon comunicano tra di loro sbattendo i becchi. La forza\ne il numero dei colpi indicano i sentimenti che vogliono esprimere.",
		de: "Sie kommunizieren miteinander, indem sie ihre\nSchnäbel gegeneinanderschlagen. Stärke und\nAnzahl der Schläge übermitteln ihre Gefühle.",
		'pt-br': "Batem os bicos com outros de sua espécie\npara se comunicar. A quantidade e a força das bicadas\ndemonstram como estão se sentindo.",
		ko: "동료와 부리를 부딪히며\n커뮤니케이션한다. 부딪히는 강도나\n횟수로 기분을 전달한다."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Beak Blast",
			fr: "Bec-Canon",
			es: "Pico Cañón",
			it: "Cannonbecco",
			de: "Schnabelkanone",
			'pt-br': "Bico Explosivo",
			ko: "부리캐논"
		},

		damage: 80,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Quemado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene bruciato.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verbrannt.",
			
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 배틀 포켓몬을 화상으로 만든다.",
			'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Queimado."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["vol8"]
}

export default card