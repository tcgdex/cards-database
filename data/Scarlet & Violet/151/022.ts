import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [22],
	set: Set,

	name: {
		fr: "Rapasdepic",
		en: "Fearow",
		es: "Fearow",
		it: "Fearow",
		pt: "Fearow",
		de: "Ibitak"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Bec Gobeur",
			en: "Beak Catch",
			es: "Captura Pico",
			it: "Catturbecco",
			pt: "Captura de Bico",
			de: "Schnabelfang"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu'à 3 cartes, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
			en: "Search your deck for up to 3 cards and put them into your hand. Then, shuffle your deck.",
			es: "Busca en tu baraja hasta 3 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
			it: "Cerca nel tuo mazzo fino a tre carte e aggiungile a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
			pt: "Procure por até 3 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
			de: "Durchsuche dein Deck nach bis zu 3 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}, {
		cost: ["Colorless"],

		name: {
			fr: "Plongée Rapide",
			en: "Speed Dive",
			es: "Picado Rápido",
			it: "Immersione Rapida",
			pt: "Mergulho Veloz",
			de: "Tempohechtsprung"
		},

		damage: 50
	}],

	retreat: 0,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Gemi",

	thirdParty: {
		cardmarket: 733617
	}
}

export default card