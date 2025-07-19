import { Card } from "../../../interfaces"
import Set from "../Black Bolt"

const card: Card = {
	set: Set,

	name: {
		en: "Cubchoo",
		fr: "Polarhume",
		de: "Petznief",
		it: "Cubchoo",
		pt: "Cubchoo",
		es: "Cubchoo",
		'es-mx': "Cubchoo"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Snotted Up",
			fr: "Nez Pris",
			de: "Rotznäsig",
			it: "Ricoperto di Muco",
			pt: "Melequento",
			es: "Moco Loco",
			'es-mx': "Moco Flojo"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't use attacks.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas utiliser d'attaques.",
			de: "Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon keine Attacken einsetzen.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può usare attacchi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá usar ataques.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede usar ataques.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede usar ataques."
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card