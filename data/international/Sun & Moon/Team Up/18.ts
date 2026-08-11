import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Rapidash",
		'fr-fr': "Galopa",
		'es-es': "Rapidash",
		'it-it': "Rapidash",
		'pt-br': "Rapidash",
		'de-de': "Gallopa"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		78,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Searing Flame",
				'fr-fr': "Flammes Calcinantes",
				'es-es': "Llama Abrasadora",
				'it-it': "Fiamme Ustionanti",
				'pt-br': "Chama Cauterizante",
				'de-de': "Sengende Flammen"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene bruciato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Agility",
				'fr-fr': "Hâte",
				'es-es': "Agilidad",
				'it-it': "Agilità",
				'pt-br': "Agilidade",
				'de-de': "Agilität"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent’s next turn.",
				'fr-fr': "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				'pt-br': "Jogue 1 moeda. Se sair cara, prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Very competitive, this Pokémon will chase anything that moves fast in the hopes of racing it.",
	},

	thirdParty: {
		cardmarket: 368950,
		tcgplayer: 183789
	}
}

export default card
