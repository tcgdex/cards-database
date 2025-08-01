import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Stoutland",
		fr: "Mastouffe",
		es: "Stoutland",
		it: "Stoutland",
		pt: "Stoutland",
		de: "Bissbark"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Stage2",
	illustrator: "Naoki Saito",

	abilities: [{
		type: "Ability",

		name: {
			en: "Intimidating Fang",
			fr: "Croc Intimidant",
			es: "Colmillo Intimidatorio",
			it: "Spaventazanna",
			pt: "Intimidating Fang",
			de: "Hammerhauer"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, your opponent's Active Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
			fr: "Tant que ce Pokémon est sur le Poste Actif, les attaques du Pokémon Actif de votre adversaire infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			es: "Mientras este Pokémon esté en el Puesto Activo, los ataques del Pokémon Activo de tu rival hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			it: "Fintanto che questo Pokémon è in posizione attiva, gli attacchi del Pokémon attivo del tuo avversario infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
			pt: "As long as this Pokémon is in the Active Spot, your opponent's Active Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
			de: "Solange dieses Pokémon in der Aktiven Position ist, fügen die Attacken des Aktiven Pokémon deines Gegners 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		name: {
			en: "Knock Away",
			fr: "Asticotage",
			es: "Derribar",
			it: "Scaraventa",
			pt: "Knock Away",
			de: "Zurückschlagen"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 100 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 100 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 100 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 100 danni in più.",
			pt: "Flip a coin. If heads, this attack does 100 more damage.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 100 Schadenspunkte mehr zu."
		},

		damage: "120+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	dexId: [508],

	evolveFrom: {
		en: "Herdier",
		fr: "Ponchien",
		es: "Herdier",
		it: "Herdier",
		pt: "Herdier",
		de: "Terribark"
	},

	description: {
		en: "Its fur is long and thick. A long time ago in cold regions, every household kept a Stoutland."
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 574193
	}
}

export default card
