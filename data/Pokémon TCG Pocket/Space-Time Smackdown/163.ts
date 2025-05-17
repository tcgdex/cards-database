import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Shinx",
		fr: "Lixy",
		es: "Shinx",
		it: "Shinx",
		de: "Sheinux",
		'pt-br': "Shinx",
		ko: "꼬링크"
	},

	illustrator: "Yuu Nishida",
	rarity: "One Star",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "The extension and contraction of its muscles generates electricity. It glows when in trouble.",
		fr: "Ses muscles génèrent un courant électrique lorsqu'ils\ntravaillent. Son corps s'illumine en cas de danger.",
		es: "La extensión y contracción de sus músculos\ngenera electricidad. Brilla cuando está en peligro.",
		it: "Quando si muove, le contrazioni dei suoi muscoli producono\nelettricità. Se si sente minacciato, il suo corpo si illumina.",
		de: "Mit jeder Bewegung erzeugt es durch das Strecken\nund Zusammenziehen seiner Muskeln Elektrizität.\nSteckt es in der Klemme, leuchtet es.",
		'pt-br': "A expansão e contração de seus músculos\ngera eletricidade. Ele brilha quando está em perigo.",
		ko: "몸을 움직일 때마다 근육이 늘어났다\n줄어들었다 하여 전기가 발생한다.\n궁지에 몰리면 몸이 빛난다."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Hide",
			fr: "Cachette",
			es: "Ocultarse",
			it: "Nascondino",
			de: "Verstecken",
			'pt-br': "Esconder",
			ko: "숨기"
		},

		cost: ["Lightning"],

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
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["dialga"]
}

export default card
