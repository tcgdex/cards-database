import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [932],
	set: Set,

	name: {
		'en-us': "Nacli",
		'fr-fr': "Selutin",
		'es-es': "Nacli",
		'it-it': "Nacli",
		'pt-br': "Nacli",
		'de-de': "Geosali"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Corner",
			'fr-fr': "Coinçage",
			'es-es': "Arrinconar",
			'it-it': "Trappola",
			'pt-br': "Quina",
			'de-de': "Bedrängen"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	description: {
		'en-us': "It was born in a layer of rock salt deep under the earth. This species was particularly treasured in the old days, as they would share precious salt.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740616,
				tcgplayer: 523772,
				cardtrader: 265198
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740616,
				tcgplayer: 523772,
				cardtrader: 265198
			}
		},
	],

	illustrator: "Pani Kobayashi",

	
}

export default card
