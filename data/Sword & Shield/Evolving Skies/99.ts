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
		en: "Scrafty",
		fr: "Baggaïd",
		es: "Scrafty",
		it: "Scrafty",
		pt: "Scrafty",
		de: "Irokex"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",
	illustrator: "Yukiko Baba",

	attacks: [{
		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Headbutt",
			de: "Kopfnuss"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Shakedown",
			fr: "Dépouiller",
			es: "Conmocionar",
			it: "Scossone",
			pt: "Shakedown",
			de: "Abschütteln"
		},

		effect: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
			es: "Descarta 1 carta aleatoria de la mano de tu rival.",
			it: "Scarta una carta a caso dalla mano del tuo avversario.",
			pt: "Discard a random card from your opponent's hand.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel."
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,

	evolveFrom: {
		en: "Scraggy",
		fr: "Baggiguane",
		es: "Scraggy",
		it: "Scraggy",
		pt: "Scraggy",
		de: "Zurrokex"
	},

	description: {
		en: "While mostly known for having the temperament of an aggressive ruffian, this Pokémon takes very good care of its family, friends, and territory."
	},

	dexId: [560],
	regulationMark: "E",

	thirdParty: {
		cardmarket: 574147
	}
}

export default card
