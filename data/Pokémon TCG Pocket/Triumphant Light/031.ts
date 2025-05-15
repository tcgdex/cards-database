import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		it: "Gastly",
		de: "Nebulak",
		'pt-br': "Gastly",
		ko: "고오스"
	},

	illustrator: "Yuu Nishida",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	description: {
		en: "It wraps its opponent in its gas-like body, slowly weakening its prey by poisoning it through the skin.",
		fr: "Il enveloppe ses proies dans le nuage de gaz\nque forme son corps et les empoisonne à travers\nleur peau afin de les affaiblir petit à petit.",
		es: "Su estrategia consiste en envolver al rival con su\ncuerpo gaseoso y envenenarlo a través de la piel.",
		it: "Avvolge le prede nel corpo gassoso\ne le indebolisce lentamente facendo\npenetrare il veleno nella loro pelle.",
		de: "Es hüllt seine Beute in seinen Gaskörper ein\nund schwächt sie, indem es sie nach und nach\nüber die Haut vergiftet.",
		'pt-br': "Envolve o oponente em seu corpo gasoso,\nenfraquecendo sua presa lentamente\ne a envenenando pela pele.",
		ko: "가스로 된 몸으로 휘감은 다음\n먹이의 피부를 통해 조금씩\n독을 흘려보내어 약하게 만든다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Astonish",
			fr: "Étonnement",
			es: "Impresionar",
			it: "Sgomento",
			de: "Erstauner",
			'pt-br': "Abismar",
			ko: "놀래키기"
		},

		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent reveals a random card from their hand and shuffles it into their deck.",
			fr: "Lancez une pièce. Si c'est face, votre adversaire montre une carte de sa main au hasard, puis la mélange avec son deck.",
			es: "Lanza 1 moneda. Si sale cara, tu rival enseña 1 carta aleatoria de su mano, la pone de nuevo en su baraja y las baraja todas.",
			it: "Lancia una moneta. Se esce testa, il tuo avversario mostra una carta a caso dalla sua mano e la rimischia nel suo mazzo.",
			de: "Wirf 1 Münze. Bei Kopf zeigt dein Gegner dir 1 zufällige Karte aus seiner Hand und mischt sie in sein Deck.",
			
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 패를 랜덤으로 1장 앞면을 보고 상대의 덱으로 되돌린다.",
			'pt-br': "Jogue uma moeda. Se sair cara, seu oponente revelará 1 carta aleatória da mão dele e a embaralhará no baralho dele."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card
