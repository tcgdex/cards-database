import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Sandslash",
		fr: "Sablaireau",
		de: "Sandamer",
		it: "Sandslash",
		es: "Sandslash",
		pt: "Sandslash",
		'es-mx': "Sandslash"
	},

	illustrator: "imoniii",
	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	evolveFrom: {
		en: "Sandshrew",
		fr: "Sabelette",
		de: "Sandan",
		it: "Sandshrew",
		es: "Sandshrew",
		pt: "Sandshrew",
		'es-mx': "Sandshrew"
	},
	stage: "Stage1",
	dexId: [28],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Sand Attack",
			fr: "Jet de Sable",
			de: "Sandwirbel",
			it: "Turbosabbia",
			es: "Ataque Arena",
			pt: "Ataque de Areia",
			'es-mx': "Ataque Arena"
		},

		effect: {
			en: "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips a coin. If tails, that attack doesn't happen.",
			fr: "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d'utiliser une attaque, votre adversaire lance une pièce. Si c'est pile, l'attaque n'est pas lancée.",
			de: "Wenn das Verteidigende Pokémon während des nächsten Zuges deines Gegners versucht, eine Attacke einzusetzen, wirft dein Gegner 1 Münze. Bei Zahl wird jene Attacke nicht ausgeführt.",
			it: "Durante il prossimo turno del tuo avversario, se il Pokémon difensore prova a usare un attacco, il tuo avversario lancia una moneta. Se esce croce, quell'attacco non ha luogo.",
			es: "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta usar un ataque, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se lleva a cabo.",
			pt: "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar usar um ataque, seu oponente jogará uma moeda. Se sair coroa, aquele ataque não acontecerá.",
			'es-mx': "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta usar un ataque, tu rival lanza 1 moneda. Si sale cruz, ese ataque no se realiza."
		},

		damage: 50
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			en: "Mud Shot",
			fr: "Tir de Boue",
			de: "Lehmschuss",
			it: "Colpodifango",
			es: "Disparo Lodo",
			pt: "Tiro de Lama",
			'es-mx': "Disparo de Lodo"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 654408,
		cardmarket: 851140
	}
}

export default card