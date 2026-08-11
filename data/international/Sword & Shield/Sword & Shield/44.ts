import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Kingler",
		'fr-fr': "Krabboss",
		'es-es': "Kingler",
		'it-it': "Kingler",
		'pt-br': "Kingler",
		'de-de': "Kingler"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		99,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Krabby",
		'fr-fr': "Krabby",
		'es-es': "Krabby",
		'it-it': "Krabby",
		'pt-br': "Krabby",
		'de-de': "Krabby"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Heavy Pincers",
				'fr-fr': "Pinces Lourdes",
				'es-es': "Tenazas Pesadas",
				'it-it': "Chele Pesanti",
				'pt-br': "Pinças Pesadas",
				'de-de': "Kräftige Scheren"
			},
			effect: {
				'en-us': "Discard the top card of your opponent's deck.",
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
				'es-es': "Descarta la primera carta de la baraja de tu rival.",
				'it-it': "Scarta la prima carta del mazzo del tuo avversario.",
				'pt-br': "Descarte a carta de cima do baralho do seu oponente.",
				'de-de': "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel."
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Claw Rend",
				'fr-fr': "Déchirure",
				'es-es': "Quebrantar",
				'it-it': "Artiglilaceranti",
				'pt-br': "Lacerar",
				'de-de': "Klauenreißer"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 60 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, questo attacco infligge 60 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente já tiver algum contador de dano nele, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	description: {
		'en-us': "The large and hard pincer has 10,000-horsepower strength. However, being so big, it is unwieldy to move."
	},

	thirdParty: {
		cardmarket: 436374,
		tcgplayer: 208343
	}
}

export default card
