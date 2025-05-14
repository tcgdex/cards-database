import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Mr. Mime",
		fr: "M. Mime",
		es: "Mr. Mime",
		it: "Mr. Mime",
		de: "Pantimos",
		'pt-br': "Mr. Mime",
		ko: "마임맨"
	},

	illustrator: "Yukihiro Tada",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	description: {
		en: "The broadness of its hands may be no coincidence—many scientists believe its palms became enlarged specifically for pantomiming.",
		fr: "De nombreux savants pensent que ses mains\nse sont développées pour faire de la pantomime.",
		es: "Muchos estudiosos sostienen que el\ndesarrollo de sus enormes manos se debe\na su afán por practicar la pantomima.",
		it: "Molti studiosi ritengono che abbia sviluppato mani\ncosì grandi perché gli sono utili per la mimica.",
		de: "Viele Forscher glauben, seine Hände hätten nur\ndeshalb so eine beachtliche Größe angenommen,\ndamit es Pantomime praktizieren kann.",
		'pt-br': "Suas mãos talvez não sejam grandes\npor acaso: muitos cientistas acreditam que\nas palmas se alargaram para fazer mímica.",
		ko: "커다란 손바닥은 팬터마임을\n하기 위해 발달했다고\n생각하는 학자도 많다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Barrier Shove",
			fr: "Barrière Déflectrice",
			es: "Empujón Barrera",
			it: "Barriera Respingente",
			de: "Barrierenschubser",
			'pt-br': "Safanão de Barreira",
			ko: "배리어푸시"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"],

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
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card