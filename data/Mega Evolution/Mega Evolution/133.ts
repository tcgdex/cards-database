import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Bulbasaur",
		fr: "Bulbizarre",
		de: "Bisasam",
		it: "Bulbasaur",
		es: "Bulbasaur",
		pt: "Bulbasaur",
		'es-mx': "Bulbasaur"
	},

	illustrator: "mashu",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",
	dexId: [1],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Bind Down",
			fr: "Astreinte",
			de: "Anbinden",
			it: "Legafermo",
			es: "Amarrar",
			pt: "Aprisionamento",
			'es-mx': "Amarrar"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			de: "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			es: "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			pt: "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse."
		},

		damage: 10
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"],
		}
	],

	thirdParty: {
		tcgplayer: 654472,
		cardmarket: 851204
	}
}

export default card