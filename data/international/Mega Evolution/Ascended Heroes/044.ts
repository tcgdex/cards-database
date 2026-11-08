import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
		'es-es': "Sneasel",
		'es-mx': "Sneasel",
		'de-de': "Sniebel",
		'it-it': "Sneasel",
		'pt-br': "Sneasel"
	},

	illustrator: "Krgc",
	rarity: "Common",
	category: "Pokemon",
	dexId: [215],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Cut",
			'fr-fr': "Coupe",
			'es-es': "Corte",
			'es-mx': "Corte",
			'de-de': "Zerschneider",
			'it-it': "Taglio",
			'pt-br': "Cortar"
		},

		damage: 10
	}, {
		cost: ["Water", "Water"],

		name: {
			'en-us': "Beset",
			'fr-fr': "Piégeage",
			'es-es': "Acorralar",
			'es-mx': "Acorralar",
			'de-de': "Einengen",
			'it-it': "Importunare",
			'pt-br': "Atazanar"
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

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "This is a smart and sneaky Pokémon. A pair may work together to steal eggs by having one lure the parents away.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869655,
			tcgplayer: 675856
		}
	},
	{
		type: "reverse",
		foil: "duskball",
		thirdParty: {
			cardmarket: 870208,
			tcgplayer: 676888
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870207,
			tcgplayer: 677028
		}
	},
],
}

export default card
