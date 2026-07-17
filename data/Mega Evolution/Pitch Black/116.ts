import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Darkrai ex",
		fr: "Méga-Darkrai-ex",
		es: "Mega-Darkrai ex",
		'es-mx': "Mega-Darkrai ex",
		de: "Mega-Darkrai-ex"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [491],
	hp: 280,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Dusk Raid",
			es: "Incursión Crepuscular",
			'es-mx': "Redada Crepuscular",
			de: "Finsterer Überfall"
		},

		cost: ["Darkness", "Darkness"],

		damage: "110+",

		effect: {
			en: "If any of your Benched Pokémon have any damage counters on them, this attack does 110 more damage.",
			es: "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 110 puntos de daño más.",
			'es-mx': "Si tus Pokémon en Banca tienen algún contador de daño sobre ellos, este ataque hace 110 puntos de daño más.",
			de: "Wenn auf den Pokémon auf deiner Bank mindestens 1 Schadensmarke liegt, fügt diese Attacke 110 Schadenspunkte mehr zu."
		}
	}, {
		name: {
			en: "Abyss Eye",
			es: "Ojo Abismal",
			'es-mx': "Ojo Abismal",
			de: "Abgrundauge"
		},

		cost: ["Darkness", "Darkness", "Darkness"],

		effect: {
			en: "If your opponent's Active Pokémon is affected by any Special Condition, it is now Knocked Out.",
			es: "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, queda Fuera de Combate.",
			'es-mx': "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, queda Fuera de Combate.",
			de: "Wenn das Aktive Pokémon deines Gegners von einem Speziellen Zustand betroffen ist, ist es kampfunfähig."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895901,
				tcgplayer: 704873
			}
		},
	],
}

export default card
