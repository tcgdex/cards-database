import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Dolliv",
		fr: "Olivado",
		de: "Olivinio",
		it: "Dolliv",
		es: "Dolliv",
		pt: "Dolliv"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Slap",
			fr: "Gifle",
			de: "Hieb",
			it: "Sberla",
			es: "Bofetón",
			pt: "Tapa"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Apply Oil",
			fr: "Application Huileuse",
			de: "Einölen",
			it: "Applicolio",
			es: "Aplicar Aceite",
			pt: "Colocar Azeite"
		},

		effect: {
			en: "During your opponent's next turn, if the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack doesn't happen.",
			fr: "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d'attaquer, votre adversaire lance une pièce. Si c'est pile, l'attaque n'est pas lancée.",
			de: "Wenn das Verteidigende Pokémon während des nächsten Zuges deines Gegners versucht anzugreifen, wirft dein Gegner 1 Münze. Bei Zahl wird jene Attacke nicht ausgeführt.",
			it: "Durante il prossimo turno del tuo avversario, se il Pokémon difensore prova ad attaccare, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non ha luogo.",
			es: "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta atacar, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se lleva a cabo.",
			pt: "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar atacar, seu oponente jogará uma moeda. Se sair coroa, aquele ataque não acontecerá."
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card