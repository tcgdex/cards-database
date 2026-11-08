import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Diggersby",
		'fr-fr': "Excavarenne",
		'es-es': "Diggersby",
		'it-it': "Diggersby",
		'pt-br': "Diggersby",
		'de-de': "Grebbit"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		660,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Bunnelby",
		'fr-fr': "Sapereau",
		'es-es': "Bunnelby",
		'it-it': "Bunnelby",
		'pt-br': "Bunnelby",
		'de-de': "Scoppel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Pickup",
				'fr-fr': "Ramassage",
				'es-es': "Recogida",
				'it-it': "Raccolta",
				'pt-br': "Pegar",
				'de-de': "Mitnahme"
			},
			effect: {
				'en-us': "Put 2 Item cards from your discard pile into your hand.",
				'fr-fr': "Ajoutez 2 cartes Objet de votre pile de défausse à votre main.",
				'es-es': "Pon 2 cartas de Objeto de tu pila de descartes en tu mano.",
				'it-it': "Prendi due carte Strumento dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
				'pt-br': "Coloque 2 cards de Item da sua pilha de descarte em sua mão.",
				'de-de': "Nimm 2 Itemkarten von deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dig",
				'fr-fr': "Tunnel",
				'es-es': "Excavar",
				'it-it': "Fossa",
				'pt-br': "Cavar",
				'de-de': "Schaufler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cara, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				'it-it': "Lancia una moneta. Se esce testa, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				'pt-br': "Jogue uma moeda. Se sair cara, impedirá todos os efeitos de ataques causados a este Pokémon, inclusive danos, durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wirf 1 Münze. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "With their powerful ears, they can heft boulders of a ton or more with ease. They can be a big help at construction sites.",
	},

	thirdParty: {
		cardmarket: 281449,
		tcgplayer: 84816
	}
}

export default card
