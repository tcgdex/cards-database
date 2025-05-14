import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Cramorant",
		fr: "Nigosier",
		es: "Cramorant",
		it: "Cramorant",
		de: "Urgl",
		'pt-br': "Cramorant",
		ko: "윽우지"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		en: "It's so strong that it can knock out some opponents in a single hit, but it also may forget what it's battling midfight.",
		fr: "Il est assez puissant pour terrasser un\nennemi d'un seul coup, mais il est tellement\nnigaud qu'il oublie contre qui il se bat.",
		es: "Su colosal potencia le permite machacar al rival\nde un solo golpe, aunque su carácter despistado\nlo lleva a olvidarse de su presencia.",
		it: "È così potente che può sconfiggere l'avversario\nin un colpo solo, ma è talmente smemorato\nche si dimentica perfino con chi stava lottando.",
		de: "Es ist so stark, dass es seine Gegner mit einem\nAngriff vernichten könnte, aber zerstreut wie es\nist, vergisst es öfters, wen es gerade bekämpft.",
		'pt-br': "É tão forte que consegue derrubar alguns oponentes com um único golpe,\nmas às vezes se esquece de que está batalhando bem no meio da luta.",
		ko: "상대를 일격에 쓰러뜨릴 정도로\n파워풀하지만 건망증이 심해서\n싸우고 있는 상대를 잊어버린다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Dive",
			fr: "Plongée",
			es: "Buceo",
			it: "Sub",
			de: "Taucher",
			'pt-br': "Mergulho",
			ko: "다이빙"
		},

		damage: 60,
		cost: ["Water", "Water", "Colorless"],

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
	rarity: "One Diamond"
}

export default card
