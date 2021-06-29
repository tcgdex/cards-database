import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Cinderace",
		fr: "Pyrobut",
		es: "Cinderace",
		it: "Cinderace",
		pt: "Cinderace",
		de: "Liberlo"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		en: "Raboot",
		fr: "Lapyro"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Crisis Power",
			fr: "Puissance In Extremis",
			es: "Poder en Crisis",
			it: "Potere Critico",
			pt: "Poder Emergencial",
			de: "Krisenkraft"
		},

		effect: {
			en: "This Pokémon’s attacks do 30 more damage to your opponent’s Active Pokémon for each Prize card your opponent has taken (before applying Weakness and Resistance).",
			fr: "Les attaques de ce Pokémon infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire pour chaque carte Récompense que votre adversaire a récupérée (avant application de la Faiblesse et de la Résistance).",
			es: "Los ataques de este Pokémon hacen 30 puntos de daño más al Pokémon Activo de tu rival por cada carta de Premio que haya cogido tu rival (antes de aplicar Debilidad y Resistencia).",
			it: "Gli attacchi di questo Pokémon infliggono 30 danni in più al Pokémon attivo del tuo avversario per ogni carta Premio che ha preso, prima di aver applicato debolezza e resistenza.",
			pt: "Os ataques deste Pokémon causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente para cada carta de Prêmio que seu oponente pegou (antes de aplicar Fraqueza e Resistência).",
			de: "Die Attacken dieses Pokémon fügen dem Aktiven Pokémon deines Gegners für jede von deinem Gegner genommene Preiskarte 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		name: {
			en: "Fireball Shot",
			fr: "Tir Boule de Feu",
			es: "Balonazo de Fuego",
			it: "Colpo Palladifuoco",
			pt: "Bicada de Bola de Fogo",
			de: "Feuerballschuss"
		},

		effect: {
			en: "During your next turn, this Pokémon can’t attack.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			es: "Durante tu próximo turno, este Pokémon no puede atacar.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 150,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card