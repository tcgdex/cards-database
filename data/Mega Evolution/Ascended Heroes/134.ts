import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Scraggy",
		fr: "Baggiguane",
		es: "Scraggy",
		'es-mx': "Scraggy",
		de: "Zurrokex",
		it: "Scraggy",
		pt: "Scraggy"
	},

	illustrator: "Shimaris Yukichi",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [559],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Knock Off",
			fr: "Sabotage",
			es: "Desarme",
			'es-mx': "Desarme",
			de: "Abschlag",
			it: "Privazione",
			pt: "Derrubar"
		},

		effect: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
			es: "Descarta 1 carta aleatoria de la mano de tu rival.",
			'es-mx': "Descarta 1 carta aleatoria de la mano de tu rival.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
			it: "Scarta una carta a caso dalla mano del tuo avversario.",
			pt: "Descarte uma carta aleatória da mão do seu oponente."
		},

		damage: 20
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869745,
			tcgplayer: 675946
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869745,
			tcgplayer: 675946
		}
	},
	{
		type: "reverse",
		foil: "quickball",
		thirdParty: {
			cardmarket: 870349,
			tcgplayer: 676959
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870350,
			tcgplayer: 677099
		}
	},
],
}

export default card