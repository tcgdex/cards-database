import { Card } from "../../../interfaces"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [812],
	set: Set,

	name: {
		fr: "Gorythmic",
		de: "Gortrom",
		es: "Rillaboom",
		pt: "Rillaboom",
		it: "Rillaboom",
		en: "Rillaboom"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	evolveFrom: {
		fr: "Badabouin",
		de: "Chimstix",
		es: "Thwackey",
		pt: "Thwackey",
		it: "Thwackey",
		en: "Thwackey"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			fr: "Regain Sylvestre",
			de: "Holzsauger",
			es: "Drenaje del Bosque",
			pt: "Dreno de Madeira",
			it: "Assorbilegno",
			en: "Wood Drain"
		},

		effect: {
			fr: "Soignez 30 dégâts de ce Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			en: "Heal 30 damage from this Pokémon."
		},

		damage: 60
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			fr: "Frappes Effrénées",
			de: "Tobender Wiederholungsschlag",
			es: "Golpe Furioso Incesante",
			pt: "Golpes Ferozes Múltiplos",
			it: "Colpo Raffica Furente",
			en: "Raging Repeated Strike"
		},

		effect: {
			fr: "Défaussez autant d'Énergies que vous le voulez de vos Pokémon. Cette attaque inflige 30 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			de: "Lege beliebig viele Energien von deinen Pokémon auf deinen Ablagestapel. Diese Attacke fügt für jede auf diese Weise abgelegte Karte 30 Schadenspunkte mehr zu.",
			es: "Descarta cualquier cantidad de Energías de tus Pokémon. Este ataque hace 30 puntos de daño más por cada carta que hayas descartado de esta manera.",
			pt: "Descarte qualquer quantidade de Energia dos seus Pokémon. Este ataque causa 30 pontos de dano a mais para cada carta descartada desta forma.",
			it: "Scarta tutte le Energie che vuoi dai tuoi Pokémon. Questo attacco infligge 30 danni in più per ogni carta che hai scartato in questo modo.",
			en: "Discard any amount of Energy from your Pokémon. This attack does 30 more damage for each card you discarded in this way."
		},

		damage: "120+"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card