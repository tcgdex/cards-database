import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "Its stomach's digestive juices can dissolve any kind of poison. Eating things off the ground doesn't bother it at all."
	},

	name: {
		en: "Snorlax",
		fr: "Ronflex",
		de: "Relaxo",
		es: "Snorlax",
		it: "Snorlax",
		'es-mx': "Snorlax",
		pt: "Snorlax"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	dexId: [143],
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
			'es-mx': "Sueño de los Dormilones",
			pt: "Soninho Bom"
		},

		effect: {
			en: "If this Pokémon remains Asleep during Pokémon Checkup, heal all damage from this Pokémon.",
			fr: "Si ce Pokémon reste Endormi pendant le Contrôle Pokémon, soignez tous les dégâts de ce Pokémon.",
			de: "Wenn dieses Pokémon beim Pokémon-Check weiterhin schläft, heile allen Schaden bei diesem Pokémon.",
			es: "Si este Pokémon permanece Dormido durante el Chequeo Pokémon, cura todos los puntos de daño a este Pokémon.",
			it: "Se questo Pokémon resta addormentato durante il controllo Pokémon, curalo da tutti i danni.",
			'es-mx': "Si este Pokémon permanece Dormido durante el Chequeo Pokémon, cura todos los puntos de daño a este Pokémon.",
			pt: "Se este Pokémon permanecer Adormecido durante o Checape Pokémon, cure todo o dano deste Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Collapse",
			fr: "Effondrement",
			de: "Kollaps",
			es: "Colapso",
			it: "Collassare",
			'es-mx': "Colapso",
			pt: "Colapso"
		},

		effect: {
			en: "This Pokémon is now Asleep.",
			fr: "Ce Pokémon est maintenant Endormi.",
			de: "Dieses Pokémon schläft jetzt.",
			es: "Este Pokémon pasa a estar Dormido.",
			it: "Questo Pokémon viene addormentato.",
			'es-mx': "Este Pokémon ahora está Dormido.",
			pt: "Este Pokémon agora está Adormecido."
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",
	variants: [
		{
			type: "normal",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907726,
				tcgplayer: 716508
			}
		}
	],
}

export default card
