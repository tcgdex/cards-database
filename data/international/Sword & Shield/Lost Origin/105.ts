import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [645],
	set: Set,

	name: {
		'en-us': "Landorus",
		'fr-fr': "Démétéros",
		'es-es': "Landorus",
		'it-it': "Landorus",
		'pt-br': "Landorus",
		'de-de': "Demeteros"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Slap Push",
			'fr-fr': "Grande Claque",
			'es-es': "Empujón con Bofetón",
			'it-it': "Spintonata",
			'pt-br': "Tapa Empurrão",
			'de-de': "Stoß"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Smashing Edge",
			'fr-fr': "Tranchant Fracassant",
			'es-es': "Filo Devastador",
			'it-it': "Schiaccialama",
			'pt-br': "Gume Esmagador",
			'de-de': "Schmetterklinge"
		},

		effect: {
			'en-us': "Discard 2 Energy from this Pokémon.",
			'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			'es-es': "Descarta 2 Energías de este Pokémon.",
			'it-it': "Scarta due Energie da questo Pokémon.",
			'pt-br': "Descarte 2 Energias deste Pokémon.",
			'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 130
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674118,
				tcgplayer: 283999
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674118,
				tcgplayer: 283999
			}
		},
	],
}

export default card
