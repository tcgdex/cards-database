import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Pelipper",
		'fr-fr': "Bekipan",
		'es-es': "Pelipper",
		'it-it': "Pelipper",
		'pt-br': "Pelipper",
		'de-de': "Pelipper"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		279,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Wingull",
		'fr-fr': "Goélise",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Courier",
				'fr-fr': "Coursier",
				'es-es': "Mensajería",
				'it-it': "Corriere",
				'pt-br': "Correio",
				'de-de': "Kurier"
			},
			effect: {
				'en-us': "Put 1 of your Benched Pokémon and all cards attached to it into your hand.",
				'fr-fr': "Placez l’un de vos Pokémon de Banc et toutes les cartes qui lui sont attachées dans votre main.",
				'es-es': "Pon 1 de tus Pokémon en Banca y todas las cartas unidas a él en tu mano.",
				'it-it': "Riprendi in mano uno dei tuoi Pokémon in panchina e tutte le carte a esso assegnate.",
				'pt-br': "Coloque 1 dos seus Pokémon no Banco e todas as cartas ligadas a ele na sua mão.",
				'de-de': "Nimm 1 deiner Pokémon auf deiner Bank und alle an es angelegten Karten auf deine Hand."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fly",
				'fr-fr': "Vol",
				'es-es': "Vuelo",
				'it-it': "Volo",
				'pt-br': "Voar",
				'de-de': "Fliegen"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent’s next turn.",
				'fr-fr': "Lancez une pièce. Si c’est pile, cette attaque ne fait rien. Si c’est face, évitez tous les effets d’attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada. Si sale cara, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto. Se esce testa, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				'pt-br': "Jogue 1 moeda. Se sair coroa, este ataque não fará nada. Se sair cara, prevenirá todos os efeitos de ataques, incluindo dano, causados a este Pokémon durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen. Verhindere bei Kopf während des nächsten Zuges deines Gegners alle Effekte von Attacken, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},
			damage: 60,

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
		'en-us': "Gathering food is the work of young males. They store food in their capacious beaks and carry it back to others waiting in the nest.",
	},

	thirdParty: {
		cardmarket: 295348,
		tcgplayer: 126909
	}
}

export default card
