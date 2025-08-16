import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [49],
	set: Set,

	name: {
		fr: "Aéromite",
		en: "Venomoth",
		es: "Venomoth",
		it: "Venomoth",
		pt: "Venomoth",
		de: "Omot"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			fr: "Poudre de Perplexité",
			en: "Perplexing Powder",
			es: "Polvareda Desconcertante",
			it: "Polvere Sconcertante",
			pt: "Pó Desconcertante",
			de: "Verblüffender Puder"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main.",
			en: "Your opponent's Active Pokémon is now Confused. During your opponent's next turn, they can't play any Item cards from their hand.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido. Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			it: "Il Pokémon attivo del tuo avversario viene confuso. Durante il suo prossimo turno, il tuo avversario non può giocare le carte Strumento che ha in mano.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso. Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Item da mão dele.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt. Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen."
		},

		damage: 30
	}, {
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			fr: "Ailes Vives",
			en: "Speed Wing",
			es: "Ala Veloz",
			it: "Alaveloce",
			pt: "Asa da Velocidade",
			de: "Turboschwinge"
		},

		damage: 90
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Kagemaru Himeno",

	thirdParty: {
		cardmarket: 733644
	}
}

export default card