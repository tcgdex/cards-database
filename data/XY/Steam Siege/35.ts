import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Clawitzer BREAK",
		fr: "Gamblast TURBO",
		es: "Clawitzer TURBO",
		it: "Clawitzer TURBO",
		pt: "Clawitzer TURBO",
		de: "Wummer-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		693,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Clawitzer",
		fr: "Gamblast",
		es: "Clawitzer",
		it: "Clawitzer",
		pt: "Clawitzer",
		de: "Wummer"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lock-On",
				fr: "Verrouillage",
				es: "Fijar Blanco",
				it: "Localizza",
				pt: "Mirar",
				de: "Zielschuss"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn. During your next turn, any damage done to that Pokémon by attacks is increased by 120 (after applying Weakness and Resistance).",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire. Pendant votre prochain tour, tous les dégâts infligés au Pokémon par des attaques sont augmentés de 120 (après application de la Faiblesse et de la Résistance).",
				es: "El Pokémon Defensor no puede retirarse durante el próximo turno de tu rival. Durante tu próximo turno, cualquier daño hecho a ese Pokémon por ataques aumenta en 120 (después de aplicar Debilidad y Resistencia).",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi. Durante il tuo prossimo turno, i danni inflitti a quel Pokémon dagli attacchi sono aumentati di 120, dopo aver applicato debolezza e resistenza.",
				pt: "O Pokémon Defensor não poderá recuar durante a próxima vez de jogar do seu oponente. Durante sua próxima vez de jogar, qualquer dano causado àquele Pokémon por ataques será aumentado em 120 (após a aplicação de Fraqueza e Resistência).",
				de: "Das Verteidigende Pokémon kann sich während des nächsten Zuges deines Gegners nicht zurückziehen. Während deines nächsten Zuges wird Schaden, der jenem Pokémon durch Angriffe zugefügt wird, um 120 Schadenspunkte erhöht (nachdem Schwäche und Resistenz verrechnet wurden)."
			},

		}
	],

	retreat: 0
}

export default card
