import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'es-es': "Gastly",
		'it-it': "Gastly",
		'pt-br': "Gastly",
		'de-de': "Nebulak"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		92,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Little Grudge",
				'fr-fr': "Petite Rancune",
				'es-es': "Pequeña Rabieta",
				'it-it': "Broncetto",
				'pt-br': "Pequeno Rancor",
				'de-de': "Kleiner Groll"
			},
			effect: {
				'en-us': "During your opponent's next turn, if this Pokémon is Knocked Out by damage from an attack, discard an Energy attached to the Attacking Pokémon.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon est mis K.O. par les dégâts d'une attaque, défaussez une Énergie attachée au Pokémon Attaquant.",
				'es-es': "Durante el próximo turno de tu rival, si este Pokémon queda Fuera de Combate por el daño de un ataque, descarta 1 Energía unida al Pokémon Atacante.",
				'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon viene messo KO dai danni inflitti da un attacco, scarta un'Energia assegnata al Pokémon attaccante.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, se este Pokémon for Nocauteado por danos causados por um ataque, descarte uma Energia ligada ao Pokémon Atacante.",
				'de-de': "Wenn dieses Pokémon während des nächsten Zuges deines Gegners durch Schaden eines Angriffs kampfunfähig wird, lege 1 an das Angreifende Pokémon angelegte Energie auf den Ablagestapel deines Gegners."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Nightmare",
				'fr-fr': "Cauchemar",
				'es-es': "Pesadilla",
				'it-it': "Incubo",
				'pt-br': "Pesadelo",
				'de-de': "Nachtmahr"
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Adormecido.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" schläft das Aktive Pokémon deines Gegners jetzt."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
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
		'en-us': "A being that exists as a thin gas. It can topple an Indian elephant by enveloping the prey in two seconds.",
	},

	thirdParty: {
		cardmarket: 293402,
		tcgplayer: 124061
	}
}

export default card
