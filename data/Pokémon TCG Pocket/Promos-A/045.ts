import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Nosepass",
		fr: "Tarinor",
		es: "Nosepass",
		it: "Nosepass",
		de: "Nasgnet",
		'pt-br': "Nosepass",
		ko: "코코파스"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		en: "It moves less than an inch a year, but when\nit's in a jam, it will spin and drill down into the\nground in a split second.",
		fr: "Il ne se déplace que d'un centimètre\npar an, mais s'il se sent menacé, il virevolte\net s'enfonce dans le sol en un instant.",
		es: "Solo se desplaza un centímetro al año, pero,\nsi se siente amenazado, gira sobre sí mismo\ny se hunde bajo tierra en un abrir y cerrar de ojos.",
		it: "Si sposta di 1 cm all'anno, ma quando si trova in difficoltà\nruota su se stesso e in un attimo si nasconde sottoterra.",
		de: "Es bewegt sich nur 1 cm pro Jahr, aber in\nNotlagen bohrt es sich mit seinem Körper\nblitzschnell in den Boden.",
		'pt-br': "Este Pokémon move-se 3 centímetros por ano,\nmas quando está em uma enrascada, gira e perfura o solo\nem questão de segundos.",
		ko: "1년에 1cm밖에 움직이지 않지만\n위기에 처하면 회전하여\n순식간에 땅속으로 파고든다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Iron Defense",
			fr: "Mur de Fer",
			es: "Defensa Férrea",
			it: "Ferroscudo",
			de: "Eisenabwehr",
			'pt-br': "Defesa de Ferro",
			ko: "철벽"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage done to this Pokémon by attacks.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, se evita todo el daño infligido a este Pokémon por ataques.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni tutti i danni inflitti a questo Pokémon da qualsiasi attacco.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden, der diesem Pokémon durch Attacken zugefügt wird.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques.",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 다음 차례에 이 포켓몬은 기술의 데미지를 받지 않는다."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["vol5"]
}

export default card
