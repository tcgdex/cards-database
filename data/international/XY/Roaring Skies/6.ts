import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Cascoon",
		'fr-fr': "Blindalys",
		'es-es': "Cascoon",
		'it-it': "Cascoon",
		'pt-br': "Cascoon",
		'de-de': "Panekon"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		268,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Wurmple",
		'fr-fr': "Chenipotte",
		'es-es': "Wurmple",
		'it-it': "Wurmple",
		'pt-br': "Wurmple",
		'de-de': "Waumpel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Poison Sting",
				'fr-fr': "Dard-Venin",
				'es-es': "Picotazo Veneno",
				'it-it': "Velenospina",
				'pt-br': "Ferrão Venenoso",
				'de-de': "Giftstachel"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Iron Defense",
				'fr-fr': "Mur de Fer",
				'es-es': "Defensa Férrea",
				'it-it': "Ferroscudo",
				'pt-br': "Defesa de Ferro",
				'de-de': "Eisenabwehr"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, evita todo el daño infligido a este Pokémon por ataques durante el próximo turno de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, previeni tutti i danni da attacchi inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				'pt-br': "Jogue uma moeda. Se sair cara, impedirá todos os danos causados a este Pokémon por ataques durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" verhindere allen Schaden, der diesem Pokémon während des nächsten Zuges deines Gegners durch Angriffe zugefügt würde."
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It never forgets any attack it endured while in the cocoon. After evolution, it seeks payback.",
	},

	thirdParty: {
		cardmarket: 282674,
		tcgplayer: 98042
	}
}

export default card
