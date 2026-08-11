import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [686],
	set: Set,

	name: {
		'fr-fr': "Sepiatop",
		'en-us': "Inkay",
		'es-es': "Inkay",
		'it-it': "Inkay",
		'pt-br': "Inkay",
		'de-de': "Iscalar"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'fr-fr': "Câlin",
			'en-us': "Hug",
			'es-es': "Abrazo",
			'it-it': "Abbraccio",
			'pt-br': "Abraço",
			'de-de': "Hug"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "By exposing foes to the blinking of its luminescent spots, Inkay demoralizes them, and then it seizes the chance to flee.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725217,
				tcgplayer: 509901,
				cardtrader: 255822
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725217,
				tcgplayer: 509901,
				cardtrader: 255822
			}
		},
	],

	illustrator: "Kedamahadaitai Yawarakai",

	
}

export default card
