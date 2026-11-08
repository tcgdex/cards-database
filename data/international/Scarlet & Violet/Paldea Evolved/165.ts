import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [822],
	set: Set,

	name: {
		'fr-fr': "Bleuseille",
		'en-us': "Corvisquire",
		'es-es': "Corvisquire",
		'it-it': "Corvisquire",
		'pt-br': "Corvisquire",
		'de-de': "Kranoviz"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	evolveFrom: {
		'fr-fr': "Minisange",
		'en-us': "Rookidee",
		'es-es': "Rookidee",
		'it-it': "Rookidee",
		'pt-br': "Rookidee",
		'de-de': "Meikro"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Glissement",
			'en-us': "Glide",
			'es-es': "Planeo",
			'it-it': "Aliante",
			'pt-br': "Planeio",
			'de-de': "Gleiten"
		},

		damage: 20
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Serre",
			'en-us': "Clutch",
			'es-es': "Embrague",
			'it-it': "Grinfie",
			'pt-br': "Agarramento",
			'de-de': "Greifer"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas battre en retraite.",
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede retirarse.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può ritirarsi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá recuar.",
			'de-de': "Während des nächsten Zuges deines Gegners kann sich das Verteidigende Pokémon nicht zurückziehen."
		},

		damage: 70
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
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715640,
				tcgplayer: 497584,
				cardtrader: 248820
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715640,
				tcgplayer: 497584,
				cardtrader: 248820
			}
		},
	],

	illustrator: "sui",

	description: {
		'en-us': "It's said that the reason behind Corvisquire's high level of intelligence is the large size of its brain relative to those of other bird Pokémon.",
	},
}

export default card
