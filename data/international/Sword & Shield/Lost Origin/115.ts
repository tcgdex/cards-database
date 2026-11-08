import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [430],
	set: Set,

	name: {
		'en-us': "Honchkrow",
		'fr-fr': "Corboss",
		'es-es': "Honchkrow",
		'it-it': "Honchkrow",
		'pt-br': "Honchkrow",
		'de-de': "Kramshef"
	},

	illustrator: "Shiburingaru",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Murkrow",
		'fr-fr': "Cornèbre",
		'es-es': "Murkrow",
		'it-it': "Murkrow",
		'pt-br': "Murkrow",
		'de-de': "Kramurx"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Peck",
			'fr-fr': "Picpic",
			'es-es': "Picotazo",
			'it-it': "Beccata",
			'pt-br': "Bicada",
			'de-de': "Pikser"
		},

		damage: 20
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			'en-us': "Night Cyclone",
			'fr-fr': "Cyclone Nocturne",
			'es-es': "Ciclón Nocturno",
			'it-it': "Ciclone Notturno",
			'pt-br': "Ciclone Noturno",
			'de-de': "Nachtsturm"
		},

		effect: {
			'en-us': "Move all Energy from this Pokémon to your Benched Pokémon in any way you like.",
			'fr-fr': "Déplacez toute les Énergies de ce Pokémon vers vos Pokémon de Banc comme il vous plaît.",
			'es-es': "Mueve todas las Energías de este Pokémon a tus Pokémon en Banca de la manera que desees.",
			'it-it': "Sposta tutte le Energie da questo Pokémon a quelli nella tua panchina nel modo che preferisci.",
			'pt-br': "Mova todas as Energias deste Pokémon para os seus Pokémon no Banco como desejar.",
			'de-de': "Verschiebe alle Energien von diesem Pokémon beliebig auf die Pokémon auf deiner Bank."
		},

		damage: 160
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674128,
				tcgplayer: 284013
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674128,
				tcgplayer: 284013
			}
		},
	],
}

export default card
