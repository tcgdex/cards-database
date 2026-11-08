import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [350],
	set: Set,

	name: {
		'en-us': "Milotic ex",
		'fr-fr': "Milobellus-ex",
		'es-es': "Milotic ex",
		'it-it': "Milotic-ex",
		'pt-br': "Milotic ex",
		'de-de': "Milotic-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Feebas",
		'fr-fr': "Barpau",
		'es-es': "Feebas",
		'it-it': "Feebas",
		'pt-br': "Feebas",
		'de-de': "Barschwa"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sparkling Scales",
			'fr-fr': "Écailles Étincelantes",
			'es-es': "Escamas Centelleantes",
			'it-it': "Scaglie Scintillanti",
			'pt-br': "Escamas Cintilantes",
			'de-de': "Funkelnde Schuppen"
		},

		effect: {
			'en-us': "Prevent all damage from and effects of attacks from your opponent's Tera Pokémon done to this Pokémon.",
			'fr-fr': "Évitez tous les dégâts et les effets d'attaques infligés à ce Pokémon par les Pokémon Téracristal de votre adversaire.",
			'es-es': "Se evitan todo el daño y todos los efectos de los ataques de los Pokémon Teracristal de tu rival infligidos a este Pokémon.",
			'it-it': "Previeni sia i danni che gli effetti degli attacchi dei Pokémon Teracristal del tuo avversario inflitti a questo Pokémon.",
			'pt-br': "Previna todo o dano e os efeitos de ataques dos Pokémon Tera do seu oponente causados a este Pokémon.",
			'de-de': "Verhindere allen Schaden durch und alle Effekte von Attacken von Terakristall-Pokémon deines Gegners, die diesem Pokémon zugefügt werden."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Hypno Splash",
			'fr-fr': "Hypnoplouf",
			'es-es': "Salpicadura Hipnótica",
			'it-it': "Ipnospruzzo",
			'pt-br': "Explosão Hipnótica",
			'de-de': "Hypnospritzer"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Asleep.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
			'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794308,
				tcgplayer: 590004
			}
		},
	],

	suffix: "ex",
	illustrator: "hncl",
	
}

export default card
