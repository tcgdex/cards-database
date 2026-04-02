import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Hippopotas",
		fr: "Hippopotas",
		es: "Hippopotas",
		'es-mx': "Hippopotas",
		de: "Hippopotas",
		it: "Hippopotas",
		pt: "Hippopotas"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			en: "Sand Attack",
			fr: "Jet de Sable",
			es: "Ataque Arena",
			'es-mx': "Ataque Arena",
			de: "Sandwirbel",
			it: "Turbosabbia",
			pt: "Ataque de Areia"
		},

		effect: {
			en: "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen.",
			fr: "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d'utiliser une attaque, votre adversaire lance une pièce. Si c'est pile, l'attaque n'est pas lancée.",
			es: "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta usar un ataque, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se lleva a cabo.",
			'es-mx': "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta usar un ataque, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se realiza.",
			de: "Wenn das Verteidigende Pokémon während des nächsten Zuges deines Gegners versucht, eine Attacke einzusetzen, wirft dein Gegner 1 Münze. Bei Zahl wird jene Attacke nicht ausgeführt.",
			it: "Durante il prossimo turno del tuo avversario, se il Pokémon difensore prova a usare un attacco, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non ha luogo.",
			pt: "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar usar um ataque, seu oponente jogará uma moeda. Se sair coroa, aquele ataque não acontecerá."
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Bite",
			fr: "Morsure",
			es: "Mordisco",
			'es-mx': "Mordida",
			de: "Biss",
			it: "Morso",
			pt: "Mordida"
		},

		damage: 60
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 684425,
		cardmarket: 877453
	}
}

export default card
