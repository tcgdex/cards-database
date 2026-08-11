import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [594],
	set: Set,

	name: {
		'en-us': "Alomomola",
		'fr-fr': "Mamanbo",
		'es-es': "Alomomola",
		'it-it': "Alomomola",
		'pt-br': "Alomomola",
		'de-de': "Mamolida"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Surf",
			'fr-fr': "Surf",
			'es-es': "Surf",
			'it-it': "Surf",
			'pt-br': "Surfar",
			'de-de': "Surfer"
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Aqua Slash",
			'fr-fr': "Aqua Slash",
			'es-es': "Cuchillada Acuática",
			'it-it': "Idrosquarcio",
			'pt-br': "Aqua Corte",
			'de-de': "Aquaschlag"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	illustrator: "Shinji Kanda",

	description: {
		'en-us': "It gently holds injured and weak Pokémon in its fins. Its special membrane heals their wounds.",
	},

	thirdParty: {
        cardmarket: 702343,
        tcgplayer: 487894
    }
}

export default card