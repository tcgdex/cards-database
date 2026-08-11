import { Card } from "models/database/card"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Unown",
		'fr-fr': "Zarbi",
		'es-es': "Unown",
		'it-it': "Unown",
		'de-de': "Icognito",
		'pt-br': "Unown",
		'ko-kr': "안농"
	},

	illustrator: "IKEDA Saki",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [201],
	hp: 60,
	types: ["Psychic"],

	description: {
		'en-us': "Its flat, thin body is always stuck on walls. Its shape appears to have some meaning.",
		'fr-fr': "Son corps plat et fin est toujours collé aux murs.\nOn pense que sa forme a une signification.",
		'es-es': "Su cuerpo fino y plano aparece siempre en los\nmuros. Su forma parece tener algún significado.",
		'it-it': "Il corpo piatto e sottile sta sempre attaccato ai muri.\nPare che la forma abbia un preciso significato.",
		'de-de': "Sein flacher, dünner Körper hängt immer an Wänden.\nSeine Form scheint eine Bedeutung zu haben.",
		'pt-br': "Seu corpo delgado e plano fica sempre colado\nnas paredes. Sua forma parece ter algum propósito.",
		'ko-kr': "몸 자체는 굉장히 얇고\n항상 벽에 들러붙어 있다.\n모습에는 뭔가 의미가 있는 듯하다."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "CHECK",
			'fr-fr': "CHECK",
			'es-es': "COMPROBACIÓN",
			'it-it': "CONTROLLO",
			'de-de': "CHECK",
			'pt-br': "CHECAR",
			'ko-kr': "CHECK 체크"
		},

		effect: {
			'en-us': "Once during your turn, you may choose either player. Look at the top card of that player's deck.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez choisir l'un des joueurs. Regardez une carte du dessus du deck de ce joueur.",
			'es-es': "Una vez durante tu turno, puedes elegir a cualquier jugador. Mira la primera carta de la baraja de ese jugador.",
			'it-it': "Una sola volta durante il tuo turno, puoi scegliere uno dei giocatori. Guarda la prima carta del mazzo di quel giocatore.",
			'de-de': "Einmal während deines Zuges kannst du einen Spieler auswählen. Schau dir die oberste Karte des Decks dieses Spielers an.",
			'pt-br': "Uma vez durante o seu turno, você poderá escolher um dos jogadores. Olhe 1 carta de cima do baralho daquele jogador.",
			'ko-kr': "자신의 차례에 1번 사용할 수 있다. 자신 또는 상대 중 하나를 선택해서 선택된 플레이어의 덱을 위에서부터 1장 보고 원래대로 되돌린다."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Hidden Power",
			'fr-fr': "Puissance Cachée",
			'es-es': "Poder Oculto",
			'it-it': "Introforza",
			'de-de': "Kraftreserve",
			'pt-br': "Poder Oculto",
			'ko-kr': "잠재파워"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card
