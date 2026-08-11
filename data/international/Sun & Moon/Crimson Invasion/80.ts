import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Altaria",
		'fr-fr': "Altaria",
		'es-es': "Altaria",
		'it-it': "Altaria",
		'pt-br': "Altaria",
		'de-de': "Altaria"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		334,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Swablu",
		'fr-fr': "Tylton",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Draco Melody",
				'fr-fr': "Mélodie Draconienne",
				'es-es': "Melodía Draco",
				'it-it': "Dragomelodia",
				'pt-br': "Melodia de Dragão",
				'de-de': "Dracomelodie"
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for a Dragon Pokémon and put it onto your Bench. Then, shuffle your deck.",
				'fr-fr': "Lancez une pièce. Si c’est face, cherchez un Pokémon Dragon dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 Pokémon Dragon y ponlo en tu Banca. Después, baraja las cartas de tu baraja.",
				'it-it': "Lancia una moneta. Se esce testa, cerca nel tuo mazzo un Pokémon Dragon e mettilo in panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Jogue 1 moeda. Se sair cara, procure por 1 Pokémon Dragon no seu baralho e coloque-o no seu Banco. Em seguida, embaralhe o seu baralho.",
				'de-de': "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Dragon-Pokémon und lege es auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Cotton Guard",
				'fr-fr': "Cotogarde",
				'es-es': "Rizo Algodón",
				'it-it': "Cotonscudo",
				'pt-br': "Proteção de Algodão",
				'de-de': "Watteschild"
			},
			effect: {
				'en-us': "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It flies gracefully through the sky. Its melodic humming makes you feel like you're in a dream.",
	},

	thirdParty: {
		cardmarket: 311927,
		tcgplayer: 149106
	}
}

export default card
