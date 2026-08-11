import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Flying Pikachu",
		'fr-fr': "Pikachu Volant",
		'es-es': "Pikachu Vuelo",
		'it-it': "Pikachu Volo",
		'pt-br': "Pikachu Voador",
		'de-de': "Fliegendes Pikachu"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Thunder Shock",
				'fr-fr': "Éclair",
				'es-es': "Impactrueno",
				'it-it': "Tuonoshock",
				'pt-br': "Trovoada de Choques",
				'de-de': "Donnerschock"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
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
				'en-us': "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
				'es-es': "Lanza 1 moneda. Si sale cruz, este ataque no hace nada. Si sale cara, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non ha effetto. Se esce testa, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon durante il prossimo turno del tuo avversario.",
				'pt-br': "Jogue uma moeda. Se sair coroa, esse ataque não fará nada. Se sair cara, todos os efeitos dos ataques causados a este Pokémon serão prevenidos, inclusive danos, durante a próxima vez de jogar do seu oponente.",
				'de-de': "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon zugefügt werden."
			},
			damage: 30,

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
		'en-us': "By learning how to fly, Pikachu overcame its weakness to Fighting Pokémon.",
	},

	thirdParty: {
		cardmarket: 293472,
		tcgplayer: 124123
	}
}

export default card
