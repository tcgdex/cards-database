import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Wailord",
		'fr-fr': "Wailord",
		'es-es': "Wailord",
		'it-it': "Wailord",
		'pt-br': "Wailord",
		'de-de': "Wailord"
	},

	illustrator: "OOYAMA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		321,
	],

	hp: 200,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Wailmer",
		'fr-fr': "Wailmer",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Dive",
				'fr-fr': "Plongée",
				'es-es': "Buceo",
				'it-it': "Sub",
				'pt-br': "Mergulho",
				'de-de': "Taucher"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent’s next turn.",
				'fr-fr': "Lancez une pièce. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				'pt-br': "Jogue 1 moeda. Se sair cara, prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wirf 1 Münze. Verhindere bei Kopf während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Open Sea",
				'fr-fr': "Grande Bleue",
				'es-es': "Mar Abierto",
				'it-it': "Mare Aperto",
				'pt-br': "Mar Aberto",
				'de-de': "Offene See"
			},
			effect: {
				'en-us': "Heal 30 damage from each of your Water Pokémon.",
				'fr-fr': "Soignez 30 dégâts à chacun de vos Pokémon Water.",
				'es-es': "Cura 30 puntos de daño a cada uno de tus Pokémon Water.",
				'it-it': "Cura ciascuno dei tuoi Pokémon Water da 30 danni.",
				'pt-br': "Cure 30 pontos de dano de cada um dos seus Pokémon Water.",
				'de-de': "Heile 30 Schadenspunkte bei jedem deiner Water-Pokémon."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Wailord pursue their prey in pods. With their large mouths, they can swallow entire schools of Wishiwashi whole.",
	},

	thirdParty: {
		cardmarket: 297492,
		tcgplayer: 130930
	}
}

export default card
