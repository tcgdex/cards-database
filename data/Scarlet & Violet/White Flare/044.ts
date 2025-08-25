import { Card } from "../../../interfaces"
import Set from "../White Flare"

const card: Card = {
	dexId: [592],
	set: Set,

	name: {
		en: "Frillish",
		fr: "Viskuse",
		de: "Quabbel",
		it: "Frillish",
		pt: "Frillish",
		es: "Frillish",
		'es-mx': "Frillish"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Oceanic Gloom",
			fr: "Noirceur Océanique",
			de: "Meeresdunkel",
			it: "Tenebra Oceanica",
			pt: "Trevas Oceânicas",
			es: "Penumbra Oceánica",
			'es-mx': "Penumbra Oceánica"
		},

		effect: {
			en: "During your opponent's next turn, they can't play any Item cards from their hand.",
			fr: "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main.",
			de: "Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen.",
			it: "Durante il suo prossimo turno, il tuo avversario non può giocare le carte Strumento che ha in mano.",
			pt: "Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Item da mão dele.",
			es: "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			'es-mx': "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano."
		},

		damage: 20
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		cardmarket: 835982
	}
}

export default card