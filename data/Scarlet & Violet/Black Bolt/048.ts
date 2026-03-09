import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	dexId: [533],
	set: Set,

	name: {
		en: "Gurdurr",
		fr: "Ouvrifier",
		de: "Strepoli",
		it: "Gurdurr",
		pt: "Gurdurr",
		es: "Gurdurr",
		'es-mx': "Gurdurr"
	},

	illustrator: "Shinya Mizuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	evolveFrom: {
		en: "Timburr",
		fr: "Charpenti",
		de: "Praktibalk",
		it: "Timburr",
		pt: "Timburr",
		es: "Timburr",
		'es-mx': "Timburr"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Low Kick",
			fr: "Balayage",
			de: "Fußkick",
			it: "Colpo Basso",
			pt: "Rasteira",
			es: "Patada Baja",
			'es-mx': "Patada Baja"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Hammer Arm",
			fr: "Marto-Poing",
			de: "Hammerarm",
			it: "Martelpugno",
			pt: "Braço de Martelo",
			es: "Machada",
			'es-mx': "Brazo Martillo"
		},

		effect: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
			de: "Lege die oberste Karte des Decks deines Gegners auf seinen Ablagestapel.",
			it: "Scarta la prima carta del mazzo del tuo avversario.",
			pt: "Descarte a carta de cima do baralho do seu oponente.",
			es: "Descarta la primera carta de la baraja de tu rival.",
			'es-mx': "Descarta la primera carta del mazo de tu rival."
		},

		damage: 60
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 836005
	}
}

export default card