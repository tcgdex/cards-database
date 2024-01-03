import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Moumouton",
		en: "Wooloo",
		es: "Wooloo",
		it: "Wooloo",
		pt: "Wooloo",
		de: "Wolly"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	attacks: [{
		name: {
			fr: "Développement",
			en: "Expand",
			es: "Expandir",
			it: "Potenzia",
			pt: "Expandir",
			de: "Ausdehnen"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 10 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			en: "During your opponent's next turn, this Pokémon takes 10 less damage from attacks (after applying Weakness and Resistance).",
			es: "Durante el próximo turno de tu rival, los ataques hacen 10 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
			it: "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 10 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
			pt: "Durante o próximo turno do seu oponente, este Pokémon receberá 10 pontos de dano a menos de ataques (depois de aplicar Fraqueza e Resistência).",
			de: "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 10 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Basic",

	description: {
		en: "If its fleece grows too long, Wooloo won't be able to move. Cloth made with the wool of this Pokémon is surprisingly strong."
	}
}

export default card
