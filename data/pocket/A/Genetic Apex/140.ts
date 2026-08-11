import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dugtrio",
		'fr-fr': "Triopikeur",
		'es-es': "Dugtrio",
		'it-it': "Dugtrio",
		'de-de': "Digdri",
		'pt-br': "Dugtrio",
		'ko-kr': "닥트리오"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",

	dexId: [51],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Diglett"
	},

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Dig",
			'fr-fr': "Tunnel",
			'es-es': "Excavar",
			'it-it': "Fossa",
			'de-de': "Schaufler",
			'pt-br': "Cavar",
			'ko-kr': "구멍파기"
		},

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent’s next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
			'fr-fr': "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon.",
			'es-es': "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, evita todo el daño y todos los efectos de los ataques infligidos a este Pokémon.",
			'it-it': "Lancia una moneta. Se esce testa, durante il prossimo turno del tuo avversario, previeni sia i danni che gli effetti degli attacchi inflitti a questo Pokémon.",
			'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners allen Schaden durch und alle Effekte von Attacken, die diesem Pokémon zugefügt werden.",
			'pt-br': "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, previna todo o dano e os efeitos de ataques causados a este Pokémon.",
			'ko-kr': "동전을 1번 던져서 앞면이 나오면 상대의 다음 차례에 이 포켓몬은 기술의 데미지나 효과를 받지 않는다."
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		'en-us': "Its three heads bob separately up and down to loosen the soil nearby, making it easier for it to burrow.",
		'fr-fr': "Ses trois têtes pilonnent le sol pour le rendre\nfriable et ainsi faciliter l'excavation.",
		'es-es': "Sus tres cabezas suben y bajan para remover\nla tierra cercana y facilitar así la excavación.",
		'it-it': "Le tre teste si muovono alternativamente per ammorbidire\nil terreno e renderlo così più facile da scavare.",
		'de-de': "Seine drei Köpfe bewegen sich abwechselnd\nhinauf und hinunter, um das Erdreich um sich\nherum zu lockern und leichter graben zu können.",
		'pt-br': "Suas três cabeças movem-se separadamente\npra cima e pra baixo para amaciarem o solo\nao redor, facilitando a escavação.",
		'ko-kr': "3개의 머리가 교차하며\n움직이는 것은 주변의 흙을\n부드럽게 해 파기 쉽게 하기 위해서다."
	},

	boosters: ["pikachu"]
}

export default card
