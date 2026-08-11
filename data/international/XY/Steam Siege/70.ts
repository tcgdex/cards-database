import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Bastiodon",
		'fr-fr': "Bastiodon",
		'es-es': "Bastiodon",
		'it-it': "Bastiodon",
		'pt-br': "Bastiodon",
		'de-de': "Bollterus"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		411,
	],

	hp: 150,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Shieldon",
		'fr-fr': "Dinoclier",
		'es-es': "Shieldon",
		'it-it': "Shieldon",
		'pt-br': "Shieldon",
		'de-de': "Schilterus"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Counter Head",
				'fr-fr': "Tête Riposte",
				'es-es': "Contraataque de Cabeza",
				'it-it': "Controtestata",
				'pt-br': "Contra-ataque de cabeça",
				'de-de': "Konterkopf"
			},
			effect: {
				'en-us': "During your opponent's next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put damage counters on the Attacking Pokémon equal to the damage done to this Pokémon.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d'une attaque (même si ce Pokémon est mis K.O.), placez des marqueurs de dégâts sur le Pokémon Attaquant équivalents au nombre de dégâts infligés à ce Pokémon.",
				'es-es': "Durante el próximo turno de tu rival, si este Pokémon resulta dañado por un ataque (incluso si este Pokémon queda Fuera de Combate), pon un número de contadores de daño en el Pokémon Atacante igual al daño infligido a este Pokémon.",
				'it-it': "Durante il prossimo turno del tuo avversario, se questo Pokémon è danneggiato da un attacco, anche se viene messo KO, metti un numero di segnalini danno sul Pokémon attaccante pari ai danni inflitti a questo Pokémon.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, se este Pokémon for danificado por um ataque (mesmo se esse Pokémon for Nocauteado), coloque contadores de danos no Pokémon Atacante equivalente aos danos causados a este Pokémon.",
				'de-de': "Wenn dieses Pokémon während des nächsten Zuges deines Gegners durch einen Angriff Schaden erhält (auch wenn dieses Pokémon dadurch kampfunfähig wird), lege der Höhe des zugefügten Schadens entsprechend Schadensmarken auf das Angreifende Pokémon."
			},

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fortress of Rage",
				'fr-fr': "Forteresse de Rage",
				'es-es': "Fortaleza de Furia",
				'it-it': "Fortezza Ira",
				'pt-br': "Forte da Fúria",
				'de-de': "Festung des Zorns"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each of your Benched Pokémon that has any damage counters on it.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire ayant au moins 1 marqueur de dégâts.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada uno de tus Pokémon en Banca que tenga algún contador de daño sobre él.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni Pokémon nella tua panchina che abbia dei segnalini danno.",
				'pt-br': "Este ataque causa 10 de danos adicionais para cada Pokémon no seu Banco que já possui contadores de danos.",
				'de-de': "Dieser Angriff fügt 10 weitere Schadenspunkte mal der Anzahl der Pokémon auf deiner Bank zu, auf denen bereits mindestens 1 Schadensmarke liegt."
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Any frontal attack is repulsed. It is a docile Pokémon that feeds on grass and berries.",
	},

	thirdParty: {
		cardmarket: 291636,
		tcgplayer: 121199
	}
}

export default card
