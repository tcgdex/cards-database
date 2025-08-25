import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Sandile",
		fr: "Mascaïman",
		es: "Sandile",
		it: "Sandile",
		pt: "Sandile",
		de: "Ganovil"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		551,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Intimidating Fang",
				fr: "Croc Intimidant",
				es: "Colmillo Intimidatorio",
				it: "Spaventazanna",
				pt: "Presa Intimidadora",
				de: "Hammerhauer"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent’s Active Pokémon’s attacks do 20 less damage (before applying Weakness and Resistance).",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, les attaques du Pokémon Actif de votre adversaire infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
				es: "Mientras este Pokémon sea tu Pokémon Activo, los ataques del Pokémon Activo de tu rival hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, gli attacchi del Pokémon attivo del tuo avversario infliggono 20 danni in meno, prima di aver applicato debolezza e resistenza.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, os ataques do Pokémon Ativo do seu oponente causarão 20 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, fügen die Attacken des Aktiven Pokémon deines Gegners 20 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Gnaw",
				fr: "Ronge",
				es: "Roer",
				it: "Rosicchiamento",
				pt: "Roída",
				de: "Nagen"
			},

			damage: 10,

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

	retreat: 2,

	thirdParty: {
		cardmarket: 372403,
		tcgplayer: 189213
	}
}

export default card
