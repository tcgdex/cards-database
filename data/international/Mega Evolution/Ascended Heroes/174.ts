import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Larry's Braviary",
		'fr-fr': "Gueriaigle d'Okuba",
		'es-es': "Braviary de Laureano",
		'es-mx': "Braviary de Laureano",
		'de-de': "Aokis Washakwil",
		'it-it': "Braviary di Ubaldo",
		'pt-br': "Braviary do Lauro"
	},

	evolveFrom: {
		'en-us': "Larry's Rufflet",
		'fr-fr': "Furaiglon d'Okuba",
		'es-es': "Rufflet de Laureano",
		'es-mx': "Rufflet de Laureano",
		'de-de': "Aokis Geronimatz",
		'it-it': "Rufflet di Ubaldo",
		'pt-br': "Rufflet do Lauro",
	},

	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Clutch",
			'fr-fr': "Serre",
			'es-es': "Embrague",
			'es-mx': "Enganchar",
			'de-de': "Greifer",
			'it-it': "Grinfie",
			'pt-br': "Agarramento"
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

		damage: 50
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Brave Bird",
			'fr-fr': "Rapace",
			'es-es': "Pájaro Osado",
			'es-mx': "Ave Brava",
			'de-de': "Sturzflug",
			'it-it': "Baldeali",
			'pt-br': "Pássaro Bravo"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'es-mx': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo."
		},

		damage: 120
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
	regulationMark: "J",

	description: {
		'en-us': "For the sake of its friends, this brave warrior of the sky will not stop battling, even if injured.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869785,
			tcgplayer: 675986
		}
	},
	{
		type: "reverse",
		foil: "pokeball",
		thirdParty: {
			cardmarket: 870406,
			tcgplayer: 676987
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870405,
			tcgplayer: 677127
		}
	},
],
}

export default card