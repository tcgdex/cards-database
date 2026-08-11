import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Greninja",
		'fr-fr': "Amphinobi",
		'es-es': "Greninja",
		'it-it': "Greninja",
		'pt-br': "Greninja",
		'de-de': "Quajutsu"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		658,
	],

	hp: 130,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Frogadier",
		'fr-fr': "Croâporal",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bring Down",
				'fr-fr': "Réduire à Rien",
				'es-es': "Derrocar",
				'it-it': "Colpo di Grazia",
				'pt-br': "Trazer Abaixo",
				'de-de': "Ausschalten"
			},
			effect: {
				'en-us': "The Pokémon that has the least HP remaining, except for this Pokémon, is Knocked Out. (If multiple Pokémon are tied, choose one.)",
				'fr-fr': "Le Pokémon qui a le moins de PV restants, à l’exception de ce Pokémon, est mis K.O. (Si plusieurs Pokémon sont à égalité, choisissez-en un.)",
				'es-es': "El Pokémon al que le queden menos PS, excepto este Pokémon, queda Fuera de Combate. (Si hay varios Pokémon empatados, elige 1).",
				'it-it': "Il Pokémon con meno PS rimanenti, a eccezione di questo Pokémon, viene messo KO. In caso di parità, scegline uno.",
				'pt-br': "O Pokémon que tiver o menor PS restante, exceto por este Pokémon, será Nocauteado (se mais de um Pokémon tiver o menor PS restante, escolha um deles).",
				'de-de': "Das Pokémon mit den wenigsten verbleibenden KP, außer diesem Pokémon, ist kampfunfähig. (Wenn mehrere Pokémon die gleiche Anzahl von KP haben, wähle 1.)"
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Mist Slash",
				'fr-fr': "Tranche-Brume",
				'es-es': "Golpe Niebla",
				'it-it': "Squarcianebbia",
				'pt-br': "Golpe de Névoa",
				'de-de': "Schleierschlitzer"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Weakness, Resistance, or any other effects on your opponent’s Active Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
				'es-es': "El daño de este ataque no se ve afectado por Debilidad, Resistencia o cualquier otro efecto en el Pokémon Activo de tu rival.",
				'it-it': "I danni di questo attacco non sono influenzati dalla debolezza, dalla resistenza o da qualsiasi altro effetto presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "O dano deste ataque não é afetado por Fraqueza, Resistência ou quaisquer outros efeitos no Pokémon Ativo do seu oponente.",
				'de-de': "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder alle anderen Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "It creates throwing stars out of compressed water. When it spins them and throws them at high speed, these stars can split metal in two.",
	},

	thirdParty: {
		cardmarket: 372407,
		tcgplayer: 189217
	}
}

export default card
