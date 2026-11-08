import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [961],
	set: Set,

	name: {
		'fr-fr': "Triopikeau",
		'en-us': "Wugtrio",
		'es-es': "Wugtrio",
		'it-it': "Wugtrio",
		'pt-br': "Wugtrio",
		'de-de': "Schligdri"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Taupikeau",
		'en-us': "Wiglett",
		'es-es': "Wiglett",
		'it-it': "Wiglett",
		'pt-br': "Wiglett",
		'de-de': "Schligda"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Piège Enchevêtrant",
			'en-us': "Entwining Entrapment",
			'es-es': "Trampa Entrelazante",
			'it-it': "Avvolgitrappola",
			'pt-br': "Armadilha Entrelaçada",
			'de-de': "Schlingende Verstrickung"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It has a vicious temperament, contrary to what its appearance may suggest. It wraps its long bodies around prey, then drags the prey into its den.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725139,
				tcgplayer: 509810,
				cardtrader: 255619
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725139,
				tcgplayer: 509810,
				cardtrader: 255619
			}
		},
	],

	illustrator: "Akira Komayama",

	
}

export default card
