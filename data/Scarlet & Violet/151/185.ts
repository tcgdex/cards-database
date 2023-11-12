import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Arbok-ex",
		en: "Arbok ex",
		es: "Arbok ex",
		it: "Arbok-ex",
		pt: "Arbok ex",
		de: "Arbok-ex"
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			fr: "Astreinte",
			en: "Bind Down",
			es: "Amarrar",
			it: "Legafermo",
			pt: "Aprisionamento",
			de: "Anbinden"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 70
	}, {
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			fr: "Crochets Menaçants",
			en: "Menacing Fangs",
			es: "Colmillos Amenazantes",
			it: "Zanne Minacciose",
			pt: "Presas Ameaçadoras",
			de: "Bedrohliche Fänge"
		},

		effect: {
			fr: "Votre adversaire défausse 2 cartes de sa main.",
			en: "Your opponent discards 2 cards from their hand.",
			es: "Tu rival descarta 2 cartas de su mano.",
			it: "Il tuo avversario scarta due carte che ha in mano.",
			pt: "Seu oponente descarta 2 cartas da mão dele.",
			de: "Dein Gegner legt 2 Karten aus seiner Hand auf seinen Ablagestapel."
		},

		damage: 150
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card