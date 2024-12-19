import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [169],
	set: Set,

	name: {
		en: "Crobat",
		fr: "Nostenfer",
		es: "Crobat",
		it: "Crobat",
		pt: "Crobat",
		de: "Iksbat"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Echoing Madness",
			fr: "Folie Résonnante",
			es: "Locura Resonante",
			it: "Follia Echeggiante",
			pt: "Loucura Ecoante",
			de: "Widerhallender Wahn"
		},

		effect: {
			en: "Choose Item cards or Supporter cards. During your opponent's next turn, they can't play any of the chosen cards from their hand.",
			fr: "Choisissez entre cartes Objet ou cartes Supporter. Pendant son prochain tour, votre adversaire ne peut jouer de sa main aucune des cartes de la catégorie que vous avez choisie.",
			es: "Elige entre cartas de Objeto y cartas de Partidario. Durante el próximo turno de tu rival, este no puede jugar de su mano ninguna carta de la opción elegida.",
			it: "Scegli tra carte Strumento e carte Aiuto. Durante il suo prossimo turno, il tuo avversario non può giocare le carte che hai scelto dalla sua mano.",
			pt: "Escolha entre cartas de Item ou cartas de Apoiador. Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma destas cartas escolhidas da mão dele.",
			de: "Wähle Itemkarten oder Unterstützerkarten. Während des nächsten Zuges deines Gegners kann er keine der gewählten Karten aus seiner Hand spielen."
		},

		damage: 50
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Cutting Wind",
			fr: "Vent Glacial",
			es: "Viento Helado",
			it: "Vento Tagliente",
			pt: "Vento Dilacerante",
			de: "Schneidender Wind"
		},

		damage: 130
	}],

	retreat: 0,
	regulationMark: "G",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Golbat",
		fr: "Nosferalto",
		es: "Golbat",
		it: "Golbat",
		pt: "Golbat",
		de: "Golbat"
	}
}

export default card