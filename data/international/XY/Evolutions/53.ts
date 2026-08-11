import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Mew",
		'fr-fr': "Mew",
		'es-es': "Mew",
		'it-it': "Mew",
		'pt-br': "Mew",
		'de-de': "Mew"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		151,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Neutral Shield",
				'fr-fr': "Bouclier Neutre",
				'es-es': "Escudo Neutral",
				'it-it': "Scudo Neutralizzante",
				'pt-br': "Escudo Neutro",
				'de-de': "Neutralisierendes Schild"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Evolution Pokémon.",
				'fr-fr': "Évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon Évolutifs de votre adversaire.",
				'es-es': "Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por los Pokémon Evolución de tu rival.",
				'it-it': "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon dai Pokémon Evoluzione del tuo avversario.",
				'pt-br': "Previne todos os efeitos de ataques, inclusive danos, causados a este Pokémon pelo Pokémon de Evolução do seu oponente.",
				'de-de': "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon durch Entwicklungs-Pokémon deines Gegners zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psy Bolt",
				'fr-fr': "Choc Mental",
				'es-es': "Rayo Psi",
				'it-it': "Psico",
				'pt-br': "Raio Psíquico",
				'de-de': "Konfusion"
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

		}
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
	},

	thirdParty: {
		cardmarket: 450038,
		tcgplayer: 124066
	}
}

export default card
