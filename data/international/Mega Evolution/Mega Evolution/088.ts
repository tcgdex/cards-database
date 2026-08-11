import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Yveltal",
		'fr-fr': "Yveltal",
		'de-de': "Yveltal",
		'it-it': "Yveltal",
		'es-es': "Yveltal",
		'pt-br': "Yveltal",
		'es-mx': "Yveltal"
	},

	illustrator: "akagi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [717],

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Clutch",
			'fr-fr': "Serre",
			'de-de': "Greifer",
			'it-it': "Grinfie",
			'es-es': "Embrague",
			'pt-br': "Agarramento",
			'es-mx': "Enganchar"
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

		damage: 20
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Dark Feather",
			'fr-fr': "Plume Ténébreuse",
			'de-de': "Dunkelfeder",
			'it-it': "Piuma Oscura",
			'es-es': "Pluma Oscura",
			'pt-br': "Pena Sombria",
			'es-mx': "Pluma Oscura"
		},

		damage: 110
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
	retreat: 0,
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851159,
				tcgplayer: 654427
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851159,
				tcgplayer: 654427
			}
		},
		{
			type: "holo",
			stamp: ["gamestop"],
			thirdParty: {
				cardmarket: 851265,
			}
		},
		{
			type: "holo",
			stamp: ["eb-games"],
			thirdParty: {
				cardmarket: 851266,
			}
		},
		{
			type: "holo",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 854291,
			}
		},
	],
}

export default card
