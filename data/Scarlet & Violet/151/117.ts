import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	dexId: [117],
	set: Set,

	name: {
		fr: "Hypocéan",
		en: "Seadra",
		es: "Seadra",
		it: "Seadra",
		pt: "Seadra",
		de: "Seemon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			fr: "Encre Aveuglante",
			en: "Blinding Ink",
			es: "Tinta Cegadora",
			it: "Inchiostro Accecante",
			pt: "Tinta Ofuscante",
			de: "Blendende Tinte"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, si le Pokémon Défenseur essaie d'utiliser une attaque, votre adversaire lance 2 pièces. S'il obtient au moins un côté pile, l'attaque n'est pas lancée.",
			en: "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips 2 coins. If either of them is tails, that attack doesn't happen.",
			es: "Durante el próximo turno de tu rival, si el Pokémon Defensor intenta usar un ataque, tu rival lanza 2 monedas. Si sale cruz en alguna de ellas, ese ataque no se lleva a cabo.",
			it: "Durante il prossimo turno del tuo avversario, se il Pokémon difensore prova a usare un attacco, il tuo avversario lancia due volte una moneta. Se esce almeno una volta croce, quell'attacco non ha luogo.",
			pt: "Durante o próximo turno do seu oponente, se o Pokémon Defensor tentar usar um ataque, seu oponente jogará 2 moedas. Se qualquer uma delas sair coroa, aquele ataque não acontecerá.",
			de: "Wenn das Verteidigende Pokémon während des nächsten Zuges deines Gegners versucht, eine Attacke einzusetzen, wirft dein Gegner 2 Münzen. Zeigt mindestens 1 Zahl, wird jene Attacke nicht ausgeführt."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "aspara"
}

export default card