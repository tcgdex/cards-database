import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [167],

	name: {
		'en-us': "Spinarak",
		'fr-fr': "Mimigal",
		'es-es': "Spinarak",
		'es-mx': "Spinarak",
		'de-de': "Webarak",
		'it-it': "Spinarak",
		'pt-br': "Spinarak"
	},

	illustrator: "Katsunori Sato",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Gooey Thread",
			'fr-fr': "Fil Gluant",
			'es-es': "Hilo Pegajoso",
			'es-mx': "Hilo Pegajoso",
			'de-de': "Klebriger Faden",
			'it-it': "Tela Appiccicosa",
			'pt-br': "Fio Pegajoso"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar."
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684397,
				cardmarket: 877413
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684397,
				cardmarket: 877413
			}
		}
	],

}

export default card
