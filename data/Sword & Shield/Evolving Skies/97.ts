import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Shiftry",
		fr: "Tengalice",
		es: "Shiftry",
		it: "Shiftry",
		pt: "Shiftry",
		de: "Tengulist"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Darkness"],
	stage: "Stage2",
	illustrator: "Masakazu Fukuda",

	attacks: [{
		name: {
			en: "Shiftadieu",
			fr: "Tengadieu",
			es: "Shiftadiós",
			it: "Shiftaddio",
			pt: "Shiftadieu",
			de: "Tengadieu"
		},

		effect: {
			en: "If your opponent's Active Pokémon has any damage counters on it, put it and all attached cards into your opponent's hand.",
			fr: "Si au moins un marqueur de dégâts est placé sur le Pokémon Actif de votre adversaire, placez ce Pokémon-là et toutes les cartes attachées dans la main de votre adversaire.",
			es: "Si el Pokémon Activo de tu rival tiene algún contador de daño sobre él, pon ese Pokémon y todas las cartas unidas a él en la mano de tu rival.",
			it: "Se il Pokémon attivo del tuo avversario ha già dei segnalini danno, aggiungilo alla mano del tuo avversario insieme a tutte le carte a esso assegnate.",
			pt: "If your opponent's Active Pokémon has any damage counters on it, put it and all attached cards into your opponent's hand.",
			de: "Wenn auf dem Aktiven Pokémon deines Gegners mindestens 1 Schadensmarke liegt, gib deinem Gegner es und alle angelegten Karten auf seine Hand."
		},

		cost: ["Darkness"]
	}, {
		name: {
			en: "Nipping Cyclone",
			fr: "Cyclone Mordant",
			es: "Ciclón Helado",
			it: "Ciclone Pungente",
			pt: "Nipping Cyclone",
			de: "Beißender Sturm"
		},

		effect: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
			es: "Descarta 1 carta aleatoria de la mano de tu rival.",
			it: "Scarta una carta a caso dalla mano del tuo avversario.",
			pt: "Discard a random card from your opponent's hand.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
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
		en: "Nuzleaf",
		fr: "Pifeuil",
		es: "Nuzleaf",
		it: "Nuzleaf",
		pt: "Nuzleaf",
		de: "Blanas"
	},

	description: {
		en: "It lives quietly in the deep forest. It is said to create chilly winter winds with the fans it holds."
	},

	dexId: [275],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574145,
		tcgplayer: 246894
	}
}

export default card
