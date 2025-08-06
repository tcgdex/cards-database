import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Anesaki Dynamic",
	category: "Pokemon",

	description: {
		en: "It's skilled at both offense and defense, and it gets pumped up when cheered on. But if it starts showboating, it could put itself in a tough spot."
	},

	stage: "Stage2",

	name: {
		en: "Cinderace",
		fr: "Pyrobut",
		de: "Liberlo",
		es: "Cinderace",
		pt: "Cinderace",
		it: "Cinderace"
	},

	rarity: "None",
	dexId: [815],
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		en: "Raboot",
		fr: "Lapyro",
		de: "Kickerlo",
		es: "Raboot",
		pt: "Raboot",
		it: "Raboot"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Crisis Power",
			fr: "Puissance In Extremis",
			de: "Krisenkraft",
			es: "Poder en Crisis",
			pt: "Poder Emergencial",
			it: "Potere Critico"
		},

		effect: {
			en: "This Pokémon's attacks do 30 more damage to your opponent's Active Pokémon for each Prize card your opponent has taken (before applying Weakness and Resistance).",
			fr: "Les attaques de ce Pokémon infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire pour chaque carte Récompense que votre adversaire a récupérée (avant application de la Faiblesse et de la Résistance).",
			de: "Die Attacken dieses Pokémon fügen dem Aktiven Pokémon deines Gegners für jede von deinem Gegner genommene Preiskarte 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden).",
			es: "Los ataques de este Pokémon hacen 30 puntos de daño más al Pokémon Activo de tu rival por cada carta de Premio que haya cogido tu rival (antes de aplicar Debilidad y Resistencia).",
			pt: "Os ataques deste Pokémon causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente para cada carta de Prêmio que seu oponente pegou (antes de aplicar Fraqueza e Resistência).",
			it: "Gli attacchi di questo Pokémon infliggono 30 danni in più al Pokémon attivo del tuo avversario per ogni carta Premio che ha preso, prima di aver applicato debolezza e resistenza."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless"],

		name: {
			en: "Fireball Shot",
			fr: "Tir Boule de Feu",
			de: "Feuerballschuss",
			es: "Balonazo de Fuego",
			pt: "Bicada de Bola de Fogo",
			it: "Colpo Palladifuoco"
		},

		effect: {
			en: "During your next turn, this Pokémon can't attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare."
		},

		damage: 150
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "E",

	thirdParty: {
		cardmarket: 450578
	}
}

export default card
