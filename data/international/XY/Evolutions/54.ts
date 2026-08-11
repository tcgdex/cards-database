import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Sandshrew",
		'fr-fr': "Sabelette",
		'es-es': "Sandshrew",
		'it-it': "Sandshrew",
		'pt-br': "Sandshrew",
		'de-de': "Sandan"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		27,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Sand Attack",
				'fr-fr': "Jet de Sable",
				'es-es': "Ataque Arena",
				'it-it': "Turbosabbia",
				'pt-br': "Ataque de Areia",
				'de-de': "Sandwirbel"
			},
			effect: {
				'en-us': "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c'est pile, son attaque ne fait rien.",
				'es-es': "Si el Pokémon Defensor intenta atacar durante el próximo turno de tu rival, este lanza 1 moneda. Si sale cruz, ese ataque no hace nada.",
				'it-it': "Se durante il prossimo turno del tuo avversario il Pokémon difensore prova ad attaccare, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non ha effetto.",
				'pt-br': "Se o Pokémon Defensor tentar atacar durante a próxima vez de jogar do seu oponente, seu oponente jogará uma moeda. Se sair coroa, aquele ataque não fará nada.",
				'de-de': "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners angreift, wirft dein Gegner 1 Münze. Bei \"Zahl\" hat jener Angriff keine Auswirkungen."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It burrows and lives underground. If threatened, it curls itself up into a ball for protection.",
	},

	thirdParty: {
		cardmarket: 293408,
		tcgplayer: 124067
	}
}

export default card
