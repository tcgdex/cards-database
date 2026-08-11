import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [327],
	set: Set,

	name: {
		'en-us': "Spinda",
		'fr-fr': "Spinda",
		'es-es': "Spinda",
		'it-it': "Spinda",
		'pt-br': "Spinda",
		'de-de': "Pandir"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Tangled Feet",
			'fr-fr': "Pieds Confus",
			'es-es': "Tumbos",
			'it-it': "Intricopiedi",
			'pt-br': "Pés Confusos",
			'de-de': "Taumelschritt"
		},

		effect: {
			'en-us': "If this Pokémon is Confused and is damaged by an attack, flip a coin. If heads, prevent that damage.",
			'fr-fr': "Si ce Pokémon est Confus et qu'il subit les dégâts d'une attaque, lancez une pièce. Si c'est face, évitez ces dégâts.",
			'es-es': "Si este Pokémon está Confundido y resulta dañado por un ataque, lanza 1 moneda. Si sale cara, se evita ese daño.",
			'it-it': "Se questo Pokémon è confuso e viene danneggiato da un attacco, lancia una moneta. Se esce testa, previeni quei danni.",
			'pt-br': "Se este Pokémon estiver Confuso e for danificado por um ataque, jogue uma moeda. Se sair cara, previna aquele dano.",
			'de-de': "Wenn dieses Pokémon verwirrt ist und durch eine Attacke Schaden erhält, wirf 1 Münze. Verhindere bei Kopf jenen Schaden."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Teetering Steps",
			'fr-fr': "Pas Chancelants",
			'es-es': "Pisadas Tambaleantes",
			'it-it': "Strampapassi",
			'pt-br': "Passos Cambaleantes",
			'de-de': "Schwankende Schritte"
		},

		effect: {
			'en-us': "This Pokémon is now Confused.",
			'fr-fr': "Ce Pokémon est maintenant Confus.",
			'es-es': "Este Pokémon pasa a estar Confundido.",
			'it-it': "Questo Pokémon viene confuso.",
			'pt-br': "Este Pokémon agora está Confuso.",
			'de-de': "Dieses Pokémon ist jetzt verwirrt."
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Each Spinda's spot pattern is different. With its stumbling movements, it evades opponents' attacks brilliantly!",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740691,
				tcgplayer: 523832,
				cardtrader: 265274
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740691,
				tcgplayer: 523832,
				cardtrader: 265274
			}
		},
	],

	illustrator: "Masakazu Fukuda",

	
}

export default card
