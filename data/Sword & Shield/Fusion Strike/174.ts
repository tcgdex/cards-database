import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [675],
	set: Set,

	name: {
		en: "Pangoro",
		fr: "Pandarbare",
		es: "Pangoro",
		it: "Pangoro",
		pt: "Pangoro",
		de: "Pandagro"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		en: "Pancham",
		fr: "Pandespiègle",
		es: "Pancham",
		it: "Pancham",
		pt: "Pancham",
		de: "Pam-Pam"
	},

	stage: "Stage1",
	retreat: 4,
	regulationMark: "E",
	illustrator: "HYOGONOSUKE",

	description: {
		en: "Using its leaf, Pangoro can predict the moves of its opponents. It strikes with punches that can turn a dump truck into scrap with just one hit."
	},

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Knocking Hammer",
			fr: "Marteau Frappeur",
			de: "Klopfender Hammer",
			es: "Martillo Impacto",
			pt: "Martelo Detonador",
			it: "Martello Battente"
		},

		damage: 90,

		effect: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			de: "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel.",
			es: "Descarta la primera carta de la baraja de tu rival.",
			pt: "Descarte a carta de cima do baralho do seu oponente.",
			it: "Scarta la prima carta del mazzo del tuo avversario."
		}
	}, {
		cost: ["Darkness", "Darkness", "Darkness", "Colorless"],

		name: {
			en: "Shakedown",
			fr: "Dépouiller",
			de: "Abschütteln",
			es: "Conmocionar",
			pt: "Extorsão",
			it: "Scossone"
		},

		damage: 150,

		effect: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
			de: "Lege 1 zufällige Karte aus der Hand deines Gegners auf seinen Ablagestapel.",
			es: "Descarta 1 carta aleatoria de la mano de tu rival.",
			pt: "Descarte 1 carta aleatória da mão do seu oponente.",
			it: "Scarta una carta a caso dalla mano del tuo avversario."
		}
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582802,
		tcgplayer: 253388
	}
}

export default card