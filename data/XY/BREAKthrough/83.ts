import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Hippopotas",
		fr: "Hippopotas",
		es: "Hippopotas",
		it: "Hippopotas",
		pt: "Hippopotas",
		de: "Hippopotas"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		449,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Nose Jet",
				fr: "Jet d'Nez",
				es: "Propulsión Nasal",
				it: "Nasogetto",
				pt: "Jato de Nariz",
				de: "Nasenströmung"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c'est pile, son attaque ne fait rien.",
				es: "Si el Pokémon Defensor intenta atacar durante el próximo turno de tu rival, este lanza 1 moneda. Si sale cruz, ese ataque no hace nada.",
				it: "Se durante il prossimo turno del tuo avversario il Pokémon difensore prova ad attaccare, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non ha effetto.",
				pt: "Se o Pokémon Defensor tentar atacar durante a próxima vez de jogar do seu oponente, seu oponente jogará uma moeda. Se sair coroa, o ataque não fará nada.",
				de: "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 286329
	}
}

export default card
