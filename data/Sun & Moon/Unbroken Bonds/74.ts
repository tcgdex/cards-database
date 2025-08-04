import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Weezing",
		fr: "Smogogo",
		es: "Weezing",
		it: "Weezing",
		pt: "Weezing",
		de: "Smogmog"
	},

	illustrator: "OOYAMA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		110,
	],

	hp: 120,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Detention Gas",
				fr: "Gaz Captif",
				es: "Gas Castigador",
				it: "Trappola Gassosa",
				pt: "Gás Detentor",
				de: "Hinderndes Gas"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, put 1 damage counter on each of your opponent’s Basic Pokémon between turns.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, placez un marqueur de dégâts sur chacun des Pokémon de base de votre adversaire entre chaque tour.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, pon 1 contador de daño en cada uno de los Pokémon Básicos de tu rival entre turnos.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, tra un turno e l’altro, metti un segnalino danno su ciascuno dei Pokémon Base del tuo avversario.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, coloque 1 contador de dano em cada um dos Pokémon Básicos do seu oponente entre as vezes de jogar.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, lege zwischen den Zügen 1 Schadensmarke auf jedes Basis-Pokémon deines Gegners."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Splattering Sludge",
				fr: "Boue Éclaboussante",
				es: "Residuos Esparcidos",
				it: "Spruzzata di Fango",
				pt: "Respingo de Lodo",
				de: "Schlammspritzer"
			},
			effect: {
				en: "This attack does 20 damage to each of your opponent’s Benched Pokémon that has any damage counters on it. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire ayant au moins un marqueur de dégâts. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño a cada uno de los Pokémon en Banca de tu rival que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a ciascun Pokémon nella panchina del tuo avversario che abbia dei segnalini danno. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 20 pontos de dano a cada um dos Pokémon no Banco do seu oponente que tiver algum contador de dano nele (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt jedem Pokémon auf der Bank deines Gegners, auf dem mindestens 1 Schadensmarke liegt, 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 372362,
		tcgplayer: 189174
	}
}

export default card
