import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [560],
	set: Set,

	name: {
		'en-us': "Scrafty",
		'fr-fr': "Baggaïd",
		'es-es': "Scrafty",
		'it-it': "Scrafty",
		'pt-br': "Scrafty",
		'de-de': "Irokex"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Scraggy",
		'fr-fr': "Baggiguane",
		'es-es': "Scraggy",
		'it-it': "Scraggy",
		'pt-br': "Scraggy",
		'de-de': "Zurrokex"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Lambaste",
			'fr-fr': "Étrillage",
			'es-es': "Vapuleo",
			'it-it': "Strigliata",
			'pt-br': "Desancar",
			'de-de': "Zurechtweisen"
		},

		effect: {
			'en-us': "If the Defending Pokémon is a Basic Pokémon, it can't attack during your opponent's next turn.",
			'fr-fr': "Si le Pokémon Défenseur est un Pokémon de base, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			'es-es': "Si el Pokémon Defensor es un Pokémon Básico, no puede atacar durante el próximo turno de tu rival.",
			'it-it': "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Base.",
			'pt-br': "Se o Pokémon Defensor for um Pokémon Básico, ele não poderá atacar durante o próximo turno do seu oponente.",
			'de-de': "Wenn das Verteidigende Pokémon ein Basis-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
		},

		damage: 30
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Headbang",
			'fr-fr': "Frappe de Tête",
			'es-es': "Cabecear",
			'it-it': "Scuotitesta",
			'pt-br': "Baque de Cabeça",
			'de-de': "Headbangen"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 751599,
				tcgplayer: 534423,
				cardtrader: 274245
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 751599,
				tcgplayer: 534423,
				cardtrader: 274245
			}
		},
	],

	illustrator: "Mousho",

	description: {
		'en-us': "While mostly known for having the temperament of an aggressive ruffian, this Pokémon takes very good care of its family, friends, and territory.",
	},

}

export default card
