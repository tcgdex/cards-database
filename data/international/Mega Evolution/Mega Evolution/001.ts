import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bulbasaur",
		'fr-fr': "Bulbizarre",
		'de-de': "Bisasam",
		'it-it': "Bulbasaur",
		'es-es': "Bulbasaur",
		'pt-br': "Bulbasaur",
		'es-mx': "Bulbasaur"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",
	dexId: [1],

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Bind Down",
			'fr-fr': "Astreinte",
			'de-de': "Anbinden",
			'it-it': "Legafermo",
			'es-es': "Amarrar",
			'pt-br': "Aprisionamento",
			'es-mx': "Amarrar"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851072,
				tcgplayer: 654340
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851072,
				tcgplayer: 654340
			}
		},
		{
			type: "reverse",
			foil: "league",
			stamp: ["30th-pokeday"],
			thirdParty: {
				cardmarket: 871308,
			}
		},
	],
}

export default card
