import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [232],
	set: Set,

	name: {
		'en-us': "Donphan",
		'fr-fr': "Donphan",
		'es-es': "Donphan",
		'it-it': "Donphan",
		'pt-br': "Donphan",
		'de-de': "Donphan"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy",
		'es-es': "Phanpy",
		'it-it': "Phanpy",
		'pt-br': "Phanpy",
		'de-de': "Phanpy"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'en-us': "Overspin",
			'fr-fr': "Extra Vrille",
			'es-es': "Rodar a lo Loco",
			'it-it': "Esagirare",
			'pt-br': "Rodopio Exagerado",
			'de-de': "Rollkoller"
		},

		effect: {
			'en-us': "If this Pokémon evolved during this turn, this attack does nothing.",
			'fr-fr': "Si ce Pokémon a évolué pendant ce tour, cette attaque ne fait rien.",
			'es-es': "Si este Pokémon ha evolucionado durante este turno, este ataque no hace nada.",
			'it-it': "Se questo Pokémon si è evoluto durante questo turno, questo attacco non ha effetto.",
			'pt-br': "Se este Pokémon evoluiu durante este turno, este ataque não fará nada.",
			'de-de': "Wenn sich dieses Pokémon während dieses Zuges entwickelt hat, hat diese Attacke keine Auswirkungen."
		},

		damage: 110
	}, {
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Giant Fangs",
			'fr-fr': "Crocs Géants",
			'es-es': "Colmillos Gigantes",
			'it-it': "Zanne Giganti",
			'pt-br': "Presas Gigantes",
			'de-de': "Riesenbeißer"
		},

		damage: 170
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "The longer and bigger its tusks, the higher its rank in its herd. The tusks take long to grow.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 682139,
				tcgplayer: 451746
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682139,
				tcgplayer: 451746
			}
		},
	],
}

export default card
