import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Braviary",
		fr: "Gueriaigle",
		es: "Braviary",
		it: "Braviary",
		pt: "Braviary",
		de: "Washakwil"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Stage1",
	illustrator: "SATOSHI NAKAI",

	attacks: [{
		name: {
			en: "Valiant Talons",
			fr: "Serres Vaillantes",
			es: "Garras Aguerridas",
			it: "Artigli della Baldanza",
			pt: "Valiant Talons",
			de: "Kühne Krallen"
		},

		effect: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 60 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 60 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 60 danni in più.",
			pt: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 60 more damage.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
		},

		damage: "30+",
		cost: ["Colorless"]
	}, {
		name: {
			en: "Brave Bird",
			fr: "Rapace",
			es: "Pájaro Osado",
			it: "Baldeali",
			pt: "Brave Bird",
			de: "Sturzflug"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 50 dégâts.",
			es: "Este Pokémon también se hace 50 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 50 danni a se stesso.",
			pt: "This Pokémon also does 50 damage to itself.",
			de: "Dieses Pokémon fügt auch sich selbst 50 Schadenspunkte zu."
		},

		damage: 150,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	dexId: [628],

	evolveFrom: {
		en: "Rufflet",
		fr: "Furaiglon",
		es: "Rufflet",
		it: "Rufflet",
		pt: "Rufflet",
		de: "Geronimatz"
	},

	description: {
		en: "Because this Pokémon is hotheaded and belligerent, it's Corviknight that's taken the role of transportation in Galar."
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 574195,
		tcgplayer: 246877
	}
}

export default card
