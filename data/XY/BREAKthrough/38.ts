import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Empoleon",
		fr: "Pingoléon",
		es: "Empoleon",
		it: "Empoleon",
		pt: "Empoleon",
		de: "Impoleon"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		395,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Prinplup",
		fr: "Prinplouf",
		es: "Prinplup",
		it: "Prinplup",
		pt: "Prinplup",
		de: "Pliprin"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dignified Fighter",
				fr: "Combattant Estimé",
				es: "Luchador Digno",
				it: "Cavaliere Coraggioso",
				pt: "Lutador Dignificado",
				de: "Würdevoller Kämpfer"
			},
			effect: {
				en: "Each of your Basic Pokémon's attacks does 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				fr: "Les attaques de vos Pokémon de base infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Los ataques de tus Pokémon Básicos hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "Ciascuno degli attacchi dei tuoi Pokémon Base infligge 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Cada um dos ataques dos seus Pokémon Básicos causam 20 de danos adicionais ao Pokémon Ativo do seu oponente (antes da aplicação de Fraqueza e Resistência).",
				de: "Jeder Angriff deiner Basis-Pokémon fügt dem Aktiven Pokémon deines Gegners 20 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Hydro Splash",
				fr: "Hydro-Éclaboussure",
				es: "Hidroestallido",
				it: "Idrosplash",
				pt: "Hidro Borrifada",
				de: "Hydroplatscher"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 286284
	}
}

export default card
