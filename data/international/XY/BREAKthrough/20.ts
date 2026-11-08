import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Typhlosion",
		'fr-fr': "Typhlosion",
		'es-es': "Typhlosion",
		'it-it': "Typhlosion",
		'pt-br': "Typhlosion",
		'de-de': "Tornupto"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		157,
	],

	hp: 150,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Quilava",
		'fr-fr': "Feurisson",
		'es-es': "Quilava",
		'it-it': "Quilava",
		'pt-br': "Quilava",
		'de-de': "Igelavar"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Massive Eruption",
				'fr-fr': "Éruption Massive",
				'es-es': "Estallido Masivo",
				'it-it': "Supereruzione",
				'pt-br': "Erupção Massiva",
				'de-de': "Gewaltige Eruption"
			},
			effect: {
				'en-us': "Discard the top 5 cards of your deck. This attack does 80 damage times the number of Energy cards you discarded.",
				'fr-fr': "Défaussez les 5 cartes du dessus de votre deck. Cette attaque inflige 80 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
				'es-es': "Descarta las 5 primeras cartas de tu baraja. Este ataque hace 80 puntos de daño por cada carta de Energía que hayas descartado.",
				'it-it': "Scarta le prime cinque carte del tuo mazzo. Questo attacco infligge 80 danni per ogni carta Energia che hai scartato.",
				'pt-br': "Descarte os 5 cards de cima do seu baralho. Este ataque causa 80 de danos vezes o número de cards de Energia descartados.",
				'de-de': "Lege die obersten 5 Karten deines Decks auf deinen Ablagestapel. Dieser Angriff fügt 80 Schadenspunkte mal der Anzahl abgelegter Energiekarten zu."
			},
			damage: "80×",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flare Destroy",
				'fr-fr': "Éclatodestruction",
				'es-es': "Llama de Destrucción",
				'it-it': "Distruggifiamma",
				'pt-br': "Destruição Explosiva",
				'de-de': "Flammenhacker"
			},
			effect: {
				'en-us': "Discard an Energy attached to this Pokémon. Then, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Défaussez une Énergie attachée à ce Pokémon. Ensuite, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
				'es-es': "Descarta 1 Energía unida a este Pokémon. Después, descarta 1 Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Scarta un'Energia assegnata a questo Pokémon. Poi, scarta un'Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Descarte uma Energia ligada a este Pokémon. Em seguida, descarte uma Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel. Lege anschließend 1 an das Aktive Pokémon deines Gegners angelegte Energie auf den Ablagestapel deines Gegners."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It has a secret, devastating move. It rubs its blazing fur together to cause huge explosions.",
	},

	thirdParty: {
		cardmarket: 286266,
		tcgplayer: 107139
	}
}

export default card
