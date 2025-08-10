import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [929],
	set: Set,

	name: {
		en: "Dolliv",
		fr: "Olivado",
		es: "Dolliv",
		it: "Dolliv",
		pt: "Dolliv",
		de: "Olivinio"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Smoliv"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Slap",
			fr: "Gifle",
			es: "Bofetón",
			it: "Sberla",
			pt: "Tapa",
			de: "Hieb"
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Apply Oil",
			fr: "Application Huileuse",
			es: "Aplicar Aceite",
			it: "Applicolio",
			pt: "Colocar Azeite",
			de: "Einölen"
		},

		effect: {
			en: "During your opponent's next turn, if the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack doesn't happen.",
			fr: "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d'attaquer, votre adversaire lance une pièce. Si c'est pile, l'attaque n'est pas lancée.",
			es: "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta atacar, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se lleva a cabo.",
			it: "Durante il prossimo turno del tuo avversario, se il Pokémon difensore prova ad attaccare, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non ha luogo.",
			pt: "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar atacar, seu oponente jogará uma moeda. Se sair coroa, aquele ataque não acontecerá.",
			de: "Wenn das Verteidigende Pokémon während des nächsten Zuges deines Gegners versucht anzugreifen, wirft dein Gegner 1 Münze. Bei Zahl wird jene Attacke nicht ausgeführt."
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Mina Nakai"
}

export default card