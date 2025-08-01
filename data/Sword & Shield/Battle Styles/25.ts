import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [500],
	set: Set,

	name: {
		en: "Emboar",
		fr: "Roitiflam",
		es: "Emboar",
		it: "Emboar",
		pt: "Emboar",
		de: "Flambirex"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],

	evolveFrom: {
		en: "Pignite",
		fr: "Grotichon",
		es: "Pignite",
		it: "Pignite",
		pt: "Pignite",
		de: "Ferkokel"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Fighting Fury Stance",
			fr: "Position de Furie Combative",
			es: "Posición Furia Luchadora",
			it: "Posa Furialotta",
			pt: "Postura de Luta Furiosa",
			de: "Kampfgeisttaktik"
		},

		effect: {
			en: "Your Single Strike Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de vos Pokémon Poing Final infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			es: "Los ataques de tus Pokémon Golpe Brusco hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
			it: "Gli attacchi dei tuoi Pokémon Colpo Singolo infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
			pt: "Os ataques dos seus Pokémon Golpe Decisivo causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
			de: "Die Attacken deiner Fokussierter-Angriff-Pokémon fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		name: {
			en: "Heat Crash",
			fr: "Tacle Feu",
			es: "Golpe Calor",
			it: "Marchiafuoco",
			pt: "Choque de Calor",
			de: "Brandstempel"
		},

		damage: 130,
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "It has mastered fast and powerful fighting moves. It grows a beard of fire."
	},

	thirdParty: {
		cardmarket: 527635
	}
}

export default card
