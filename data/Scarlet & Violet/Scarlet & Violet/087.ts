import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Shuppet",
		fr: "Polichombr",
		es: "Shuppet",
		it: "Shuppet",
		pt: "Shuppet",
		de: "Shuppet"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Enveloping Shadow",
			fr: "Ombre Enveloppante",
			es: "Sombra Envolvente",
			it: "Ombra Avvolgente",
			pt: "Sombra Envolvente",
			de: "Einhüllender Schatten"
		},

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, they can't play any Item cards from their hand.",
			fr: "Lancez une pièce. Si c'est face, pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main.",
			es: "Lanza 1 moneda. Si sale cara, durante el próximo turno de tu rival, este no puede jugar ninguna carta de Objeto de su mano.",
			it: "Lancia una moneta. Se esce testa, durante il suo prossimo turno, il tuo avversario non può giocare le carte Strumento che ha in mano.",
			pt: "Jogue uma moeda. Se sair cara, durante o próximo turno do seu oponente, ele não poderá jogar nenhuma carta de Item da mão dele.",
			de: "Wirf 1 Münze. Bei Kopf kann dein Gegner während seines nächsten Zuges keine Itemkarten aus seiner Hand spielen."
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card