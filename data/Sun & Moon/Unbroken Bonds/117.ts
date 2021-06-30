import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Greninja",
		fr: "Amphinobi",
		es: "Greninja",
		it: "Greninja",
		pt: "Greninja",
		de: "Quajutsu"
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
		en: "Frogadier",
		fr: "Croâporal",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bring Down",
				fr: "Réduire à Rien",
				es: "Derrocar",
				it: "Colpo di Grazia",
				pt: "Trazer Abaixo",
				de: "Ausschalten"
			},
			effect: {
				en: "The Pokémon that has the least HP remaining, except for this Pokémon, is Knocked Out. (If multiple Pokémon are tied, choose one.)",
				fr: "Le Pokémon qui a le moins de PV restants, à l’exception de ce Pokémon, est mis K.O. (Si plusieurs Pokémon sont à égalité, choisissez-en un.)",
				es: "El Pokémon al que le queden menos PS, excepto este Pokémon, queda Fuera de Combate. (Si hay varios Pokémon empatados, elige 1).",
				it: "Il Pokémon con meno PS rimanenti, a eccezione di questo Pokémon, viene messo KO. In caso di parità, scegline uno.",
				pt: "O Pokémon que tiver o menor PS restante, exceto por este Pokémon, será Nocauteado (se mais de um Pokémon tiver o menor PS restante, escolha um deles).",
				de: "Das Pokémon mit den wenigsten verbleibenden KP, außer diesem Pokémon, ist kampfunfähig. (Wenn mehrere Pokémon die gleiche Anzahl von KP haben, wähle 1.)"
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Mist Slash",
				fr: "Tranche-Brume",
				es: "Golpe Niebla",
				it: "Squarcianebbia",
				pt: "Golpe de Névoa",
				de: "Schleierschlitzer"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Weakness, Resistance, or any other effects on your opponent’s Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de este ataque no se ve afectado por Debilidad, Resistencia o cualquier otro efecto en el Pokémon Activo de tu rival.",
				it: "I danni di questo attacco non sono influenzati dalla debolezza, dalla resistenza o da qualsiasi altro effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "O dano deste ataque não é afetado por Fraqueza, Resistência ou quaisquer outros efeitos no Pokémon Ativo do seu oponente.",
				de: "Der Schaden dieser Attacke wird durch Schwäche, Resistenz oder alle anderen Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
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

	retreat: 0
}

export default card
