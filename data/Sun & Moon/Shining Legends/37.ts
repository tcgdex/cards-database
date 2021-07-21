import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Arbok",
		fr: "Arbok",
		es: "Arbok",
		it: "Arbok",
		pt: "Arbok",
		de: "Arbok"
	},
	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		24,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Ekans",
		fr: "Abo",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Intimidating Pattern",
				fr: "Style Intimidant",
				es: "Textura Intimidadora",
				it: "Disegno Spaventoso",
				pt: "Padrão Intimidador",
				de: "Einschüchterndes Muster"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent’s Active Pokémon’s attacks do 30 less damage (before applying Weakness and Resistance).",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, les attaques du Pokémon Actif de votre adversaire infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
				es: "Mientras este Pokémon sea tu Pokémon Activo, los ataques del Pokémon Activo de tu rival hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, gli attacchi del Pokémon attivo del tuo avversario infliggono 30 in meno, prima di aver applicato debolezza e resistenza.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, os ataques do Pokémon Ativo do seu oponente causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, fügen die Attacken des Aktiven Pokémon deines Gegners 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Venomous Fang",
				fr: "Croc-Poison",
				es: "Colmillo Nocivo",
				it: "Dentevelenoso",
				pt: "Dente Venenoso",
				de: "Gifthauer"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet."
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
