import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Snorlax",
		'fr-fr': "Ronflex",
		'es-es': "Snorlax",
		'it-it': "Snorlax",
		'pt-br': "Snorlax",
		'de-de': "Relaxo"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		143,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Toss and Turn",
				'fr-fr': "Retournement",
				'es-es': "Dar Vueltas Dormido",
				'it-it': "Girarsi e Rigirarsi",
				'pt-br': "Dar Voltas Dormindo",
				'de-de': "Herumwälzen"
			},
			effect: {
				'en-us': "This attack can be used even if this Pokémon is Asleep. If it is, this attack does 90 more damage.",
				'fr-fr': "Cette attaque peut être utilisée même si ce Pokémon est Endormi. S'il l'est, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Este ataque se puede usar incluso si este Pokémon está Dormido. Si lo está, este ataque hace 90 puntos de daño más.",
				'it-it': "Questo attacco può essere usato anche se questo Pokémon è addormentato. Se lo è, questo attacco infligge 90 danni in più.",
				'pt-br': "Este ataque pode ser usado mesmo que este Pokémon esteja Adormecido. Se estiver Adormecido, este ataque causará 90 de danos adicionais.",
				'de-de': "Dieser Angriff kann auch eingesetzt werden, wenn dieses Pokémon schläft. Wenn es schläft, fügt dieser Angriff 90 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swallow",
				'fr-fr': "Avale",
				'es-es': "Tragar",
				'it-it': "Introenergia",
				'pt-br': "Engolir",
				'de-de': "Verzehrer"
			},
			effect: {
				'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				'fr-fr': "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
				'es-es': "Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
				'it-it': "Cura questo Pokémon da una quantità di danni pari a quelli inflitti al Pokémon attivo del tuo avversario.",
				'pt-br': "Cure deste Pokémon a mesma quantidade de danos que você causou ao Pokémon Ativo do seu oponente.",
				'de-de': "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
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

	retreat: 4,

	description: {
		'en-us': "Its stomach can digest any kind of food, even if it happens to be moldy or rotten.",
	},

	thirdParty: {
		cardmarket: 289898,
		tcgplayer: 117852
	}
}

export default card
