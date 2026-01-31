import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Budew",
		fr: "Rozbouton",
		es: "Budew",
		'es-mx': "Budew",
		de: "Knospi",
		it: "Budew",
		pt: "Budew"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Grass"],
	stage: "Basic",
	dexId: [406],

	attacks: [{
		name: {
			en: "Itchy Pollen",
			fr: "Pollen Démangeant",
			es: "Polen Picazón",
			'es-mx': "Polen Picazón",
			de: "Juckende Pollen",
			it: "Polline Urticante",
			pt: "Comichão de Pólen"
		},

		effect: {
			en: "During your opponent's next turn, they can't play any Item cards from their hand.",
			fr: "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main.",
			es: "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			'es-mx': "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			de: "Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen.",
			it: "Durante il suo prossimo turno, il tuo avversario non può giocare le carte Strumento che ha in mano.",
			pt: "Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Item da mão dele."
		},

		damage: 10
	}],

	retreat: 0,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 675828,
		cardmarket: 869627
	}
}

export default card