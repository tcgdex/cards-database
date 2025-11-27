import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [354],
	set: Set,

	name: {
		en: "Banette ex",
		fr: "Branette-ex",
		es: "Banette ex",
		it: "Banette-ex",
		pt: "Banette ex",
		de: "Banette-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],
	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr",
		es: "Shuppet",
		it: "Shuppet",
		pt: "Shuppet",
		de: "Shuppet"
	},


	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Everlasting Darkness",
			fr: "Obscurité Éternelle",
			es: "Oscuridad Eterna",
			it: "Oscurità Perpetua",
			pt: "Escuridão Eterna",
			de: "Ewige Finsternis"
		},

		effect: {
			en: "During your opponent's next turn, they can't play any Item cards from their hand.",
			fr: "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main.",
			es: "Durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			it: "Durante il suo prossimo turno, il tuo avversario non può giocare le carte Strumento che ha in mano.",
			pt: "Durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Item da mão dele.",
			de: "Dein Gegner kann während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen."
		},

		damage: 30
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Poltergeist",
			fr: "Esprit Frappeur",
			es: "Poltergeist",
			it: "Poltergeist",
			pt: "Poltergeist",
			de: "Poltergeist"
		},

		effect: {
			en: "Your opponent reveals their hand. This attack does 60 damage for each Trainer card you find there.",
			fr: "Votre adversaire montre sa main. Cette attaque inflige 60 dégâts pour chaque carte Dresseur que vous y trouvez.",
			es: "Tu rival enseña las cartas de su mano. Este ataque hace 60 puntos de daño por cada carta de Entrenador que encuentres entre ellas.",
			it: "Il tuo avversario mostra le carte che ha in mano. Questo attacco infligge 60 danni per ogni carta Allenatore presente tra quelle carte.",
			pt: "Seu oponente revela a mão dele. Este ataque causa 60 pontos de dano para cada carta de Treinador que encontrar lá.",
			de: "Dein Gegner zeigt dir seine Handkarten. Diese Attacke fügt für jede Trainerkarte, die du dort findest, 60 Schadenspunkte zu."
		},

		damage: "60×"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		reverse: false,
		normal: false
	},

	illustrator: "PLANETA Mochizuki",

	thirdParty: {
		cardmarket: 702384
	}
}

export default card