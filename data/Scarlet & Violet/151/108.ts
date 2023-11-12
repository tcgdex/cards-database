import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Excelangue",
		en: "Lickitung",
		es: "Lickitung",
		it: "Lickitung",
		pt: "Lickitung",
		de: "Schlurp"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			fr: "Langue Ligotante",
			en: "Tongue-Tied",
			es: "Traba-Lengua",
			it: "Legalingua",
			pt: "Nó de Língua",
			de: "Zungenzügel"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas attaquer.",
			en: "During your opponent's next turn, the Defending Pokémon can't attack.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede atacar.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá atacar.",
			de: "Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon nicht angreifen."
		},

		damage: 70
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card