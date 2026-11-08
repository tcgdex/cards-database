import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [941],
	set: Set,

	name: {
		'en-us': "Kilowattrel",
		'fr-fr': "Fulgulairo",
		'es-es': "Kilowattrel",
		'it-it': "Kilowattrel",
		'pt-br': "Kilowattrel",
		'de-de': "Voltrean"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	evolveFrom: {
		'en-us': "Wattrel",
		'fr-fr': "Zapétrel",
		'es-es': "Wattrel",
		'it-it': "Wattrel",
		'pt-br': "Wattrel",
		'de-de': "Voltrel"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Glide",
			'fr-fr': "Glissement",
			'es-es': "Planeo",
			'it-it': "Aliante",
			'pt-br': "Planeio",
			'de-de': "Gleiten"
		},

		damage: 50
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			'en-us': "Storm Bolt",
			'fr-fr': "Éclair Tempête",
			'es-es': "Rayo Tormentoso",
			'it-it': "Fulmine Tempestoso",
			'pt-br': "Temporal de Raios",
			'de-de': "Unwetterblitz"
		},

		effect: {
			'en-us': "Move all Energy from this Pokémon to your Benched Pokémon in any way you like.",
			'fr-fr': "Déplacez toutes les Énergies de ce Pokémon vers vos Pokémon de Banc comme il vous plaît.",
			'es-es': "Mueve todas las Energías de este Pokémon a tus Pokémon en Banca de la manera que desees.",
			'it-it': "Sposta tutte le Energie da questo Pokémon a quelli nella tua panchina nel modo che preferisci.",
			'pt-br': "Mova todas as Energias deste Pokémon para os seus Pokémon no Banco como desejar.",
			'de-de': "Verschiebe alle Energien von diesem Pokémon beliebig auf die Pokémon auf deiner Bank."
		},

		damage: 160
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
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 794349,
				tcgplayer: 589976
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 794349,
				tcgplayer: 589976
			}
		},
	],

	illustrator: "KEIICHIRO ITO",
	
}

export default card
