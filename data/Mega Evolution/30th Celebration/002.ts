import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Exeggutor",
		fr: "Noadkoko d'Alola",
		de: "Alola-Kokowei",
		es: "Exeggutor de Alola",
		it: "Exeggutor di Alola",
		pt: "Exeggutor de Alola",
		'es-mx': "Exeggutor de Alola"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Scale Up",
			fr: "Élongation",
			de: "Hoch hinaus",
			es: "Crecer",
			it: "Ingrandirsi",
			'es-mx': "Crecimiento Exponencial"
		},

		effect: {
			en: "If this Pokémon has 6 or more Grass Energy attached, it gets +250 HP.",
			fr: "Si au moins 6 Énergies Grass sont attachées à ce Pokémon, il a +250 PV.",
			de: "Wenn an dieses Pokémon 6 oder mehr Grass-Energien angelegt sind, erhält es +250 KP.",
			es: "Si este Pokémon tiene 6 Energías Grass o más unidas, obtiene 250 PS más.",
			it: "Se questo Pokémon ha sei o più Energie Grass assegnate, ha 250 PS in più.",
			'es-mx': "Si este Pokémon tiene 6 Energías Grass o más unidas, obtiene 250 PS más."
		}
	}],

	attacks: [{
		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue",
			de: "Megasauger",
			es: "Megaagotar",
			it: "Megassorbimento",
			'es-mx': "Megadrenado"
		},

		effect: {
			en: "Heal 50 damage from this Pokémon.",
			fr: "Soignez 50 dégâts de ce Pokémon.",
			de: "Heile 50 Schadenspunkte bei diesem Pokémon.",
			es: "Cura 50 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 50 danni.",
			'es-mx': "Cura 50 puntos de daño a este Pokémon."
		},

		damage: 150,
		cost: ["Grass", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4
}

export default card