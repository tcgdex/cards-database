import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Clefable",
		'fr-fr': "Mélodelfe",
		'es-es': "Clefable",
		'es-mx': "Clefable",
		'de-de': "Pixi",
		'it-it': "Clefable",
		'pt-br': "Clefable"
	},

	evolveFrom: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
		'es-es': "Clefairy",
		'es-mx': "Clefairy",
		'de-de': "Piepi",
		'it-it': "Clefairy",
		'pt-br': "Clefairy",
	},

	illustrator: "satoma",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [36],
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Metronome",
			'fr-fr': "Métronome",
			'es-es': "Metrónomo",
			'es-mx': "Metrónomo",
			'de-de': "Metronom",
			'it-it': "Metronomo",
			'pt-br': "Metrônomo"
		},

		effect: {
			'en-us': "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
			'fr-fr': "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
			'es-es': "Elige uno de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
			'es-mx': "Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo como este ataque.",
			'de-de': "Wähle 1 Attacke des Aktiven Pokémon deines Gegners und setze sie als diese Attacke ein.",
			'it-it': "Scegli un attacco del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
			'pt-br': "Escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque."
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			'en-us': "Magical Shot",
			'fr-fr': "Coup Magique",
			'es-es': "Disparo Mágico",
			'es-mx': "Disparo Mágico",
			'de-de': "Magischer Schuss",
			'it-it': "Magicolpo",
			'pt-br': "Tiro Mágico"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "It has an acute sense of hearing. It can easily hear a pin being dropped nearly 1,100 yards away.",
	},

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869686,
			tcgplayer: 675887
		}
	},
	{
		type: "reverse",
		foil: "loveball",
		thirdParty: {
			cardmarket: 870254,
			tcgplayer: 676911
		}
	},
	{
		type: "reverse",
		foil: "energy",
		thirdParty: {
			cardmarket: 870253,
			tcgplayer: 677051
		}
	},
],
}

export default card
