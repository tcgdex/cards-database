import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [441],
	set: Set,

	name: {
		'en-us': "Chatot",
		'fr-fr': "Pijako",
		'es-es': "Chatot",
		'it-it': "Chatot",
		'pt-br': "Chatot",
		'de-de': "Plaudagei"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'es-es': "Coleccionar",
			'it-it': "Tassa",
			'pt-br': "Coleta",
			'de-de': "Sammeln"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'es-es': "Roba 1 carta.",
			'it-it': "Pesca una carta.",
			'pt-br': "Compre 1 carta.",
			'de-de': "Ziehe 1 Karte."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Jabber On",
			'fr-fr': "Jacasserie",
			'es-es': "Cotorreo",
			'it-it': "Parla Parla",
			'pt-br': "Tagarela",
			'de-de': "Plappertasche"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "A versatile performer skilled in the imitation of human speech. It is said that older, more experienced Chatot can even understand the meaning of the words they mimic.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658790,
				tcgplayer: 272370
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658790,
				tcgplayer: 272370
			}
		},
	],
}

export default card
