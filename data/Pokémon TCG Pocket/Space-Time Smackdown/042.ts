import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Finneon",
		fr: "Écayon",
		es: "Finneon",
		it: "Finneon",
		de: "Finneon",
		'pt-br': "Finneon",
		ko: "형광어"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		en: "The line running down its side can store sunlight. It shines vividly at night.",
		fr: "La ligne qui fait le tour de son corps emmagasine\nl'énergie solaire et brille intensément la nuit.",
		es: "La línea que le recorre el costado puede almacenar\nluz solar. Brilla con mucha fuerza por la noche.",
		it: "La linea che contorna il suo corpo immagazzina la luce\nsolare. Di notte si illumina di una luce splendente.",
		de: "Die Linie an seiner Seite kann Sonnenlicht\nspeichern. Nachts leuchtet es sehr intensiv.",
		'pt-br': "A linha na lateral de seu corpo armazena luz solar\ne brilha intensamente à noite.",
		ko: "몸 옆쪽에 있는 줄에\n태양 빛을 모아 둘 수 있다.\n밤이 되면 아름답게 빛난다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Elegant Swim",
			fr: "Nage Élégante",
			es: "Natación Elegante",
			it: "Stilnuoto",
			de: "Elegantes Schwimmen",
			'pt-br': "Nado Elegante",
			ko: "우아하게 헤엄치기"
		},

		damage: 10,
		cost: ["Water"],

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			it: "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			de: "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			ko: "동전을 1번 던져서 앞면이 나오면 상대의 다음 차례에 이 포켓몬은 기술의 데미지나 효과를 받지 않는다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga", "palkia"]
}

export default card
