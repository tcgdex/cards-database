import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Shiftry",
		'fr-fr': "Tengalice",
		'es-es': "Shiftry",
		'it-it': "Shiftry",
		'pt-br': "Shiftry",
		'de-de': "Tengulist"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],
	stage: "Stage2",
	illustrator: "Masakazu Fukuda",

	attacks: [{
		name: {
			'en-us': "Shiftadieu",
			'fr-fr': "Tengadieu",
			'es-es': "Shiftadiós",
			'it-it': "Shiftaddio",
			'pt-br': "Shiftadieu",
			'de-de': "Tengadieu"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon has any damage counters on it, put it and all attached cards into your opponent's hand.",
			'fr-fr': "Si au moins un marqueur de dégâts est placé sur le Pokémon Actif de votre adversaire, placez ce Pokémon-là et toutes les cartes attachées dans la main de votre adversaire.",
			'es-es': "Si el Pokémon Activo de tu rival tiene algún contador de daño sobre él, pon ese Pokémon y todas las cartas unidas a él en la mano de tu rival.",
			'it-it': "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, aggiungilo alla mano del tuo avversario insieme a tutte le carte a esso assegnate.",
			'pt-br': "If your opponent's Active Pokémon has any damage counters on it, put it and all attached cards into your opponent's hand.",
			'de-de': "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, gib deinem Gegner es und alle angelegten Karten auf seine Hand."
		},

		cost: ["Darkness"]
	}, {
		name: {
			'en-us': "Nipping Cyclone",
			'fr-fr': "Cyclone Mordant",
			'es-es': "Ciclón Helado",
			'it-it': "Ciclone Pungente",
			'pt-br': "Nipping Cyclone",
			'de-de': "Beißender Sturm"
		},

		effect: {
			'en-us': "Discard a random card from your opponent's hand.",
			'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
			'es-es': "Descarta 1 carta aleatoria de la mano de tu rival.",
			'it-it': "Scarta una carta a caso dalla mano del tuo avversario.",
			'pt-br': "Discard a random card from your opponent's hand.",
			'de-de': "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		},

		damage: 130,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,

	evolveFrom: {
		'en-us': "Nuzleaf",
		'fr-fr': "Pifeuil",
		'es-es': "Nuzleaf",
		'it-it': "Nuzleaf",
		'pt-br': "Nuzleaf",
		'de-de': "Blanas"
	},

	description: {
		'en-us': "It lives quietly in the deep forest. It is said to create chilly winter winds with the fans it holds."
	},

	dexId: [275],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574145,
				tcgplayer: 246894
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574145,
				tcgplayer: 246894
			}
		},
	],
}

export default card
