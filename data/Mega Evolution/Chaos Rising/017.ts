import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886409,
				tcgplayer: 693528
			}
		},
	],

	name: {
		en: "Octillery",
		fr: "Octillery",
		es: "Octillery",
		'es-mx': "Octillery",
		de: "Octillery",
		it: "Octillery",
		pt: "Octillery"
	},

	illustrator: "matazo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [224],
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Remoraid"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Jet of Ink",
			fr: "Jet d'Encre",
			es: "Chorro de Tinta",
			'es-mx': "Chorro de Tinta",
			de: "Hochdrucktinte",
			it: "Getto d'Inchiostro",
			pt: "Jato de Tinta"
		},

		cost: ["Water"],
		damage: 30,

		effect: {
			en: "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips 2 coins. If either of them is tails, that attack doesn't happen.",
			fr: "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d'utiliser une attaque, votre adversaire lance 2 pièces. Si au moins un côté pile est obtenu, l'attaque n'est pas lancée.",
			es: "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta usar un ataque, tu rival lanza 2 monedas. Si sale alguna cruz, ese ataque no se lleva a cabo.",
			'es-mx': "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta usar un ataque, tu rival lanza 2 monedas. Si sale alguna cruz, ese ataque no se realiza.",
			de: "Wenn das Verteidigende Pokémon während des nächsten Zuges deines Gegners versucht, eine Attacke einzusetzen, wirft dein Gegner 2 Münzen. Zeigt mindestens 1 Zahl, wird jene Attacke nicht ausgeführt.",
			it: "Durante il prossimo turno del tuo avversario, se il Pokémon difensore prova a usare un attacco, il tuo avversario lancia due volte una moneta. Se esce almeno una volta croce, quell'attacco non ha luogo.",
			pt: "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar usar um ataque, seu oponente jogará 2 moedas. Se qualquer uma delas sair coroa, aquele ataque não acontecerá."
		}
	}, {
		name: {
			en: "Tantrum",
			fr: "Mauvaise Humeur",
			es: "Rabieta",
			'es-mx': "Rabieta",
			de: "Rappel",
			it: "Collera",
			pt: "Petulância"
		},

		cost: ["Water", "Colorless"],
		damage: 120,

		effect: {
			en: "This Pokémon is now Confused.",
			fr: "Ce Pokémon est maintenant Confus.",
			es: "Este Pokémon pasa a estar Confundido.",
			'es-mx': "Este Pokémon ahora está Confundido.",
			de: "Dieses Pokémon ist jetzt verwirrt.",
			it: "Questo Pokémon viene confuso.",
			pt: "Este Pokémon agora está Confuso."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card