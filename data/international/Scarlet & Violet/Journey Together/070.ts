import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [781],
	set: Set,

	name: {
		'en-us': "Dhelmise",
		'fr-fr': "Sinistrail",
		'es-es': "Dhelmise",
		'de-de': "Moruda",
		'it-it': "Dhelmise",
		'pt-br': "Dhelmise",
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
			'en-us': "Bind Down",
			'fr-fr': "Astreinte",
			'es-es': "Amarrar",
			'de-de': "Anbinden",
			'it-it': "Legafermo",
			'pt-br': "Aprisionamento",
			'es-mx': "Amarrar"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse."
		},

		damage: 60
	}, {
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Anchor Smash",
			'fr-fr': "Ancre Broyeuse",
			'es-es': "Golpe Ancla",
			'de-de': "Schmetteranker",
			'it-it': "Ancora Devastante",
			'pt-br': "Âncora Esmagadora",
			'es-mx': "Anclazo"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 3,
	regulationMark: "H",
	illustrator: "Sanosuke Sakuma",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817222,
				tcgplayer: 623497
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817222,
				tcgplayer: 623497
			}
		},
	],
}

export default card
