import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Milotic ex",
		fr: "Milobellus-ex",
		es: "Milotic ex",
		it: "Milotic-ex",
		pt: "Milotic ex",
		de: "Milotic-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sparkling Scales",
			fr: "Écailles Étincelantes",
			es: "Escamas Centelleantes",
			it: "Scaglie Scintillanti",
			pt: "Escamas Cintilantes",
			de: "Funkelnde Schuppen"
		},

		effect: {
			en: "Prevent all damage from and effects of attacks from your opponent's Tera Pokémon done to this Pokémon.",
			fr: "Évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon par les Pokémon Téracristal de votre adversaire.",
			es: "Se evitan todo el daño y todos los efectos de los ataques de los Pokémon Teracristal de tu rival infligidos a este Pokémon.",
			it: "Previeni sia i danni che gli effetti degli attacchi dei Pokémon Teracristal del tuo avversario inflitti a questo Pokémon.",
			pt: "Previna todo o dano e os efeitos de ataques dos Pokémon Tera do seu oponente causados a este Pokémon.",
			de: "Verhindere allen Schaden durch und alle Effekte von Attacken von Terakristall-Pokémon deines Gegners, die diesem Pokémon zugefügt werden."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Hypno Splash",
			fr: "Hypnoplouf",
			es: "Salpicadura Hipnótica",
			it: "Ipnospruzzo",
			pt: "Explosão Hipnótica",
			de: "Hypnospritzer"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		normal: false,
		reverse: false
	},

	illustrator: "Kuroimori",

	thirdParty: {
		cardmarket: 794308
	}
}

export default card
