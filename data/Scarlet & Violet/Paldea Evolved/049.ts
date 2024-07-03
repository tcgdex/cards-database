import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Coiffeton",
		en: "Quaxly",
		es: "Quaxly",
		it: "Quaxly",
		pt: "Quaxly",
		de: "Kwaks"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			fr: "Application de Gel",
			en: "Apply Gel",
			es: "Aplicar Gel",
			it: "Applicagel",
			pt: "Passar Gel",
			de: "Gel auftragen"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d'attaquer, votre adversaire lance une pièce. Si c'est pile, l'attaque n'est pas lancée.",
			en: "During your opponent's next turn, if the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack doesn't happen.",
			es: "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta atacar, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se lleva a cabo.",
			it: "Durante il prossimo turno del tuo avversario, se il Pokémon difensore prova ad attaccare, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non ha luogo.",
			pt: "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar atacar, seu oponente jogará uma moeda. Se sair coroa, aquele ataque não acontecerá.",
			de: "Wenn das Verteidigende Pokémon während des nächsten Zuges deines Gegners versucht anzugreifen, wirft dein Gegner 1 Münze. Bei Zahl wird jene Attacke nicht ausgeführt."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	}
}

export default card