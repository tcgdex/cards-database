import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "N's Vanillish",
		'fr-fr': "Sorboul de N",
		'es-es': "Vanillish de N",
		'es-mx': "Vanillish de N",
		'de-de': "Ns Gelatroppo",
		'it-it': "Vanillish di N",
		'pt-br': "Vanillish do N"
	},

	evolveFrom: {
		'en-us': "N's Vanillite",
		'fr-fr': "Sorbébé de N",
		'es-es': "Vanillite de N",
		'es-mx': "Vanillite de N",
		'de-de': "Ns Gelatini",
		'it-it': "Vanillite di N",
		'pt-br': "Vanillite do N",
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Flop",
			'fr-fr': "Flop",
			'es-es': "Vuelta",
			'es-mx': "Desplome",
			'de-de': "Plumps",
			'it-it': "Tonfo",
			'pt-br': "Baque"
		},

		damage: 20
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Sheer Cold",
			'fr-fr': "Glaciation",
			'es-es': "Frío Polar",
			'es-mx': "Frío Extremo",
			'de-de': "Eiseskälte",
			'it-it': "Purogelo",
			'pt-br': "Frio Extremo"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't use attacks.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas utiliser d'attaques.",
			'es-es': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede usar ataques.",
			'es-mx': "Durante el próximo turno de tu rival, el Pokémon Defensor no puede usar ataques.",
			'de-de': "Während des nächsten Zuges deines Gegners kann das Verteidigende Pokémon keine Attacken einsetzen.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può usare attacchi.",
			'pt-br': "Durante o próximo turno do seu oponente, o Pokémon Defensor não poderá usar ataques."
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "I",

	description: {
		'en-us': "They cool down the surrounding air and create ice particles, which they use to freeze their foes.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869661,
			tcgplayer: 675862
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870216,
			tcgplayer: 676892
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870215,
			tcgplayer: 677032
		}
	},
],
}

export default card