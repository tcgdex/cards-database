import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Dhelmise",
		fr: "Sinistrail",
		es: "Dhelmise",
		de: "Moruda",
		it: "Dhelmise",
		pt: "Dhelmise",
		'es-mx': "Dhelmise"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Bind Down",
			fr: "Astreinte",
			es: "Amarrar",
			de: "Anbinden",
			it: "Legafermo",
			pt: "Aprisionamento",
			'es-mx': "Amarrar"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse."
		},

		damage: 60
	}, {
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"],

		name: {
			en: "Anchor Smash",
			fr: "Ancre Broyeuse",
			es: "Golpe Ancla",
			de: "Schmetteranker",
			it: "Ancora Devastante",
			pt: "Âncora Esmagadora",
			'es-mx': "Anclazo"
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
