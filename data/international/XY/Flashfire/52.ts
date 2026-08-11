import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Weavile",
		'fr-fr': "Dimoret",
		'es-es': "Weavile",
		'it-it': "Weavile",
		'pt-br': "Weavile",
		'de-de': "Snibunna"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		461,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
		'es-es': "Sneasel",
		'it-it': "Sneasel",
		'pt-br': "Sneasel",
		'de-de': "Sniebel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la Famille",
				'es-es': "Llamar a la Familia",
				'it-it': "Cerca Famiglia",
				'pt-br': "Chamar a Família",
				'de-de': "Familienruf"
			},
			effect: {
				'en-us': "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez jusqu'à 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 Pokémon Básicos y ponlos en tu Banca. Baraja las cartas de tu baraja después.",
				'it-it': "Cerca nel tuo mazzo fino a due Pokémon Base e mettili nella tua panchina. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure em seu baralho até 2 Pokémon Básicos e coloque-os no seu Banco. Em seguida, embaralhe seus cards.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Basis-Pokémon und lege sie auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Claw Rend",
				'fr-fr': "Déchirure",
				'es-es': "Quebrantar",
				'it-it': "Artiglilaceranti",
				'pt-br': "Lacerar",
				'de-de': "Reißer"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon already has any damage counters on it, this attack does 30 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival ya tiene algún contador de daño sobre él, este ataque hace 30 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha dei segnalini danno, questo attacco infligge 30 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente já possuir contadores de danos, esse ataque causará 30 de danos adicionais.",
				'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners bereits mindestens 1 Schadensmarke liegt, fügt dieser Angriff 30 weitere Schadenspunkte zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives in snowy regions. It carves patterns in trees with its claws as a signal to others.",
	},

	thirdParty: {
		cardmarket: 281535,
		tcgplayer: 91185
	}
}

export default card
