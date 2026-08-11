import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Nidoqueen",
		'fr-fr': "Nidoqueen",
		'es-es': "Nidoqueen",
		'it-it': "Nidoqueen",
		'pt-br': "Nidoqueen",
		'de-de': "Nidoqueen"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		31,
	],

	hp: 140,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Nidorina",
		'fr-fr': "Nidorina",
		'es-es': "Nidorina",
		'it-it': "Nidorina",
		'pt-br': "Nidorina",
		'de-de': "Nidorina"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Double Kick",
				'fr-fr': "Double Pied",
				'es-es': "Doble Patada",
				'it-it': "Doppiocalcio",
				'pt-br': "Chute Duplo",
				'de-de': "Doppelkick"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 40 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Esse ataque causa 40 de danos vezes o número de caras.",
				'de-de': "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40×",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Fang",
				'fr-fr': "Crochet Venin",
				'es-es': "Colmillo Veneno",
				'it-it': "Velenodenti",
				'pt-br': "Presa Venenosa",
				'de-de': "Giftzahn"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 2 marqueurs de dégâts au lieu d'un sur le Pokémon ciblé entre chaque tour.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 2 contadores de daño en vez de 1 en ese Pokémon entre turnos.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Tra un turno e l'altro, metti due segnalini danno invece di uno su quel Pokémon.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 2 contadores de danos em vez de 1 nesse Pokémon entre as vezes de jogar.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf das Pokémon."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The body is covered by stiff, needle-like scales. If it becomes excited, the needles bristle outwards.",
	},

	thirdParty: {
		cardmarket: 273599,
		tcgplayer: 95966
	}
}

export default card
