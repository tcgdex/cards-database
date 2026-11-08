import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Regice",
		'fr-fr': "Regice",
		'es-es': "Regice",
		'it-it': "Regice",
		'pt-br': "Regice",
		'de-de': "Regice"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		378,
	],

	hp: 120,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ice Beam",
				'fr-fr': "Laser Glace",
				'es-es': "Rayo Hielo",
				'it-it': "Geloraggio",
				'pt-br': "Raio Congelante",
				'de-de': "Eisstrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Resistance Blizzard",
				'fr-fr': "Résistance Blizzard",
				'es-es': "Resistencia Ventisca",
				'it-it': "Crioscudo",
				'pt-br': "Nevasca de Resistência",
				'de-de': "Sturm des Widerstands"
			},
			effect: {
				'en-us': "During your opponent's next turn, prevent all effects of attacks, including damage, done to this Pokémon by Pokémon-EX.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon par des Pokémon-EX.",
				'es-es': "Durante el próximo turno de tu rival, evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por Pokémon-EX.",
				'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon da Pokémon-EX.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, impedirá todos os efeitos dos ataques, inclusive danos, feitos a este Pokémon por Pokémon-EX.",
				'de-de': "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon durch Pokémon-EX während des nächsten Zuges deines Gegners zugefügt werden."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its body is made of ice from the ice age. It controls frigid air of -328 degrees Fahrenheit.",
	},

	thirdParty: {
		cardmarket: 284205,
		tcgplayer: 101445
	}
}

export default card
