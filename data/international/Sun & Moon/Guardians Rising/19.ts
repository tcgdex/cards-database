import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Alolan Sandshrew",
		'fr-fr': "Sabelette d’Alola",
		'es-es': "Sandshrew de Alola",
		'it-it': "Sandshrew di Alola",
		'pt-br': "Sandshrew de Alola",
		'de-de': "Alola-Sandan"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		27,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Defense Curl",
				'fr-fr': "Boul’Armure",
				'es-es': "Rizo Defensa",
				'it-it': "Ricciolscudo",
				'pt-br': "Espiral de Defesa",
				'de-de': "Einigler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent’s next turn.",
				'fr-fr': "Lancez une pièce. Si c’est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, evita todo el daño infligido a este Pokémon por ataques durante el próximo turno de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, previeni tutti i danni da attacchi inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				'pt-br': "Jogue 1 moeda. Se sair cara, prevenirá todo o dano causado a este Pokémon por ataques durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wirf 1 Münze. Verhindere bei Kopf allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Attacken zugefügt wird."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ice Ball",
				'fr-fr': "Ball’Glace",
				'es-es': "Bola Hielo",
				'it-it': "Palla Gelo",
				'pt-br': "Bola de Gelo",
				'de-de': "Frostbeule"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives on snowy mountains. Its steel shell is very hard—so much so, it can't roll its body up into a ball.",
	},

	thirdParty: {
		cardmarket: 297483,
		tcgplayer: 130767
	}
}

export default card
