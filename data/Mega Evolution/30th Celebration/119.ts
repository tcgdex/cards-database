import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Snorlax",
		fr: "Ronflex",
		de: "Relaxo",
		es: "Snorlax",
		it: "Snorlax",
		'es-mx': "Snorlax"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Good Sleep",
			fr: "Doux Dodo",
			de: "Guter Schlaf",
			es: "Sueño de los Dormilones",
			it: "Sogni d'Oro",
			'es-mx': "Sueño de los Dormilones"
		},

		effect: {
			en: "If this Pokémon remains Asleep during Pokémon Checkup, heal all damage from this Pokémon.",
			fr: "Si ce Pokémon reste Endormi pendant le Contrôle Pokémon, soignez tous les dégâts de ce Pokémon.",
			de: "Wenn dieses Pokémon beim Pokémon-Check weiterhin schläft, heile allen Schaden bei diesem Pokémon.",
			es: "Si este Pokémon permanece Dormido durante el Chequeo Pokémon, cura todos los puntos de daño a este Pokémon.",
			it: "Se questo Pokémon resta addormentato durante il controllo Pokémon, curalo da tutti i danni.",
			'es-mx': "Si este Pokémon permanece Dormido durante el Chequeo Pokémon, cura todos los puntos de daño a este Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Collapse",
			fr: "Effondrement",
			de: "Kollaps",
			es: "Colapso",
			it: "Collassare",
			'es-mx': "Colapso"
		},

		effect: {
			en: "This Pokémon is now Asleep.",
			fr: "Ce Pokémon est maintenant Endormi.",
			de: "Dieses Pokémon schläft jetzt.",
			es: "Este Pokémon pasa a estar Dormido.",
			it: "Questo Pokémon viene addormentato.",
			'es-mx': "Este Pokémon ahora está Dormido."
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4
}

export default card