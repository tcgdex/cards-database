import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	stage: "VMAX",

	name: {
		en: "Eevee VMAX",
		fr: "Évoli VMAX",
		de: "Evoli VMAX",
		es: "Eevee VMAX",
		pt: "Eevee VMAX",
		it: "Eevee VMAX"
	},

	rarity: "None",
	dexId: [133],
	hp: 300,
	types: ["Colorless"],

	evolveFrom: {
		en: "Eevee V",
		fr: "Évoli-V",
		de: "Evoli-V",
		es: "Eevee V",
		pt: "Eevee V",
		it: "Eevee-V"
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "G-Max Cuddle",
			fr: "Câlin G-Max",
			de: "Giga-Gekuschel",
			es: "Gigaternura",
			pt: "Ternura G-Max",
			it: "Gigabbraccio"
		},

		effect: {
			en: "During your opponent's next turn, if the Defending Pokémon tries to attack, your opponent flips a coin. If tails, that attack doesn't happen.",
			fr: "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d'attaquer, votre adversaire lance une pièce. Si c'est pile, l'attaque n'est pas lancée.",
			de: "Wenn das Verteidigende Pokémon während des nächsten Zuges deines Gegners versucht anzugreifen, wirft dein Gegner 1 Münze. Bei Zahl wird jene Attacke nicht ausgeführt.",
			es: "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta atacar, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se hace.",
			pt: "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar atacar, seu oponente jogará 1 moeda. Se sair coroa, aquele ataque não acontecerá.",
			it: "Se durante il prossimo turno del tuo avversario il Pokémon difensore prova ad attaccare, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non ha luogo."
		},

		damage: 150
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 540656
	}
}

export default card
