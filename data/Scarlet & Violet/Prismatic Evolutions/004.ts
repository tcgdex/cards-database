import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Budew",
		fr: "Rozbouton",
		es: "Budew",
		pt: "Budew",
		it: "Budew",
		de: "Knospi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 30,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Itchy Pollen",
			fr: "Pollen Démangeant",
			es: "Polen Picazón",
			pt: "Comichão de Pólen",
			it: "Polline Urticante",
			de: "Juckende Pollen"
		},

		effect: {
			en: "During your opponent's next turn, they can't play any Item cards from their hand.",
			fr: "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main.",
			es: "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			pt: "Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Item da mão dele.",
			it: "Durante il suo prossimo turno, il tuo avversario non può giocare le carte Strumento che ha in mano.",
			de: "Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen."
		},

		damage: 10
	}],

	retreat: 0,
	regulationMark: "H",
	illustrator: "Yoriyuki Ikegami",

	thirdParty: {
		cardmarket: 805393
	}
}

export default card