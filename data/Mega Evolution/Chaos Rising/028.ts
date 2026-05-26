import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Flaaffy",
		fr: "Lainergie",
		es: "Flaaffy",
		'es-mx': "Flaaffy",
		de: "Waaty",
		it: "Flaaffy",
		pt: "Flaaffy"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [180],
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Mareep"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Disconnect",
			fr: "Déconnexion",
			es: "Desconectar",
			'es-mx': "Desconectar",
			de: "Unterbrechen",
			it: "Disconnessione",
			pt: "Desconexão"
		},

		cost: ["Lightning", "Colorless"],
		damage: 40,

		effect: {
			en: "During your opponent's next turn, they can't play any Item cards from their hand.",
			fr: "Pendant son prochain tour, votre adversaire ne peut pas jouer de cartes Objet de sa main.",
			es: "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			'es-mx': "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			de: "Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen.",
			it: "Durante il suo prossimo turno, il tuo avversario non può giocare le carte Strumento che ha in mano.",
			pt: "Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Item da mão dele."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693487,
		cardmarket: 886420
	}
}

export default card