import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [430],
	set: Set,

	name: {
		en: "Honchkrow",
		fr: "Corboss",
		es: "Honchkrow",
		it: "Honchkrow",
		pt: "Honchkrow",
		de: "Kramshef"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Murkrow",
		fr: "Cornèbre",
		es: "Murkrow",
		it: "Murkrow",
		pt: "Murkrow",
		de: "Kramurx"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Peck",
			fr: "Picpic",
			es: "Picotazo",
			it: "Beccata",
			pt: "Bicada",
			de: "Pikser"
		},

		damage: 20
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Night Cyclone",
			fr: "Cyclone Nocturne",
			es: "Ciclón Nocturno",
			it: "Ciclone Notturno",
			pt: "Ciclone Noturno",
			de: "Nachtsturm"
		},

		effect: {
			en: "Move all Energy from this Pokémon to your Benched Pokémon in any way you like.",
			fr: "Déplacez toute les Énergies de ce Pokémon vers vos Pokémon de Banc comme il vous plaît.",
			es: "Mueve todas las Energías de este Pokémon a tus Pokémon en Banca de la manera que desees.",
			it: "Sposta tutte le Energie da questo Pokémon a quelli nella tua panchina nel modo che preferisci.",
			pt: "Mova todas as Energias deste Pokémon para os seus Pokémon no Banco como desejar.",
			de: "Verschiebe alle Energien von diesem Pokémon beliebig auf die Pokémon auf deiner Bank."
		},

		damage: 160
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	},

	thirdParty: {
		cardmarket: 674128,
		tcgplayer: 284013
	}
}

export default card