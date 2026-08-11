import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [815],
	set: Set,

	name: {
		'fr-fr': "Pyrobut",
		'de-de': "Liberlo",
		'es-es': "Cinderace",
		'pt-br': "Cinderace",
		'it-it': "Cinderace",
		'en-us': "Cinderace"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		'fr-fr': "Lapyro",
		'de-de': "Kickerlo",
		'es-es': "Raboot",
		'pt-br': "Raboot",
		'it-it': "Raboot",
		'en-us': "Raboot"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Puissance In Extremis",
			'de-de': "Krisenkraft",
			'es-es': "Poder en Crisis",
			'pt-br': "Poder Emergencial",
			'it-it': "Potere Critico",
			'en-us': "Crisis Power"
		},

		effect: {
			'fr-fr': "Les attaques de ce Pokémon infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire pour chaque carte Récompense que votre adversaire a récupérée (avant application de la Faiblesse et de la Résistance).",
			'de-de': "Die Attacken dieses Pokémon fügen dem Aktiven Pokémon deines Gegners für jede von deinem Gegner genommene Preiskarte 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			'es-es': "Los ataques de este Pokémon hacen 30 puntos de daño más al Pokémon Activo de tu rival por cada carta de Premio que haya cogido tu rival (antes de aplicar Debilidad y Resistencia).",
			'pt-br': "Os ataques deste Pokémon causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente para cada carta de Prêmio que seu oponente pegou (antes de aplicar Fraqueza e Resistência).",
			'it-it': "Gli attacchi di questo Pokémon infliggono 30 danni in più al Pokémon attivo del tuo avversario per ogni carta Premio che ha preso, prima di aver applicato debolezza e resistenza.",
			'en-us': "This Pokémon's attacks do 30 more damage to your opponent's Active Pokémon for each Prize card your opponent has taken (before applying Weakness and Resistance)."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			'fr-fr': "Tir Boule de Feu",
			'de-de': "Feuerballschuss",
			'es-es': "Balonazo de Fuego",
			'pt-br': "Bicada de Bola de Fogo",
			'it-it': "Colpo Palladifuoco",
			'en-us': "Fireball Shot"
		},

		effect: {
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'en-us': "During your next turn, this Pokémon can't attack."
		},

		damage: 150
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",

	description: {
		'en-us': "It's skilled at both offense and defense, and it gets pumped up when cheered on. But if it starts showboating, it could put itself in a tough spot.",
	},

	thirdParty: {
		cardmarket: 566760
	}
}

export default card
