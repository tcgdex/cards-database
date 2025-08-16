import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [812],
	set: Set,

	name: {
		en: "Rillaboom",
		fr: "Gorythmic",
		es: "Rillaboom",
		it: "Rillaboom",
		pt: "Rillaboom",
		de: "Gortrom"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	evolveFrom: {
		en: "Thwackey",
		fr: "Badabouin",
		es: "Thwackey",
		it: "Thwackey",
		pt: "Thwackey",
		de: "Chimstix"
	},

	attacks: [{
		name: {
			en: "Wood Drain",
			fr: "Regain Sylvestre",
			es: "Drenaje del Bosque",
			it: "Assorbilegno",
			pt: "Dreno de Madeira",
			de: "Holzsauger"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon."
		},

		damage: 60,
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			en: "Raging Repeated Strike",
			fr: "Frappes Effrénées",
			es: "Golpe Furioso Incesante",
			it: "Colpo Raffica Furente",
			pt: "Golpes Ferozes Múltiplos",
			de: "Tobender Wiederholungsschlag"
		},

		effect: {
			en: "Discard any amount of Energy from your Pokémon. This attack does 30 more damage for each card you discarded in this way.",
			fr: "Défaussez autant d'Énergies que vous le voulez de vos Pokémon. Cette attaque inflige 30 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			es: "Descarta cualquier cantidad de Energías de tus Pokémon. Este ataque hace 30 puntos de daño más por cada carta que hayas descartado de esta manera.",
			it: "Scarta tutte le Energie che vuoi dai tuoi Pokémon. Questo attacco infligge 30 danni in più per ogni carta che hai scartato in questo modo.",
			pt: "Descarte qualquer quantidade de Energia dos seus Pokémon. Este ataque causa 30 pontos de dano a mais para cada carta descartada desta forma.",
			de: "Lege beliebig viele Energien von deinen Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 30 Schadenspunkte mehr zu."
		},

		damage: "120+",
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "The one with the best drumming techniques becomes the boss of the troop. It has a gentle disposition and values harmony among its group."
	},

	thirdParty: {
		cardmarket: 567098,
		tcgplayer: 241667
	}
}

export default card
