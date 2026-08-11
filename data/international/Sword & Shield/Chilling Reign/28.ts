import { Card } from 'models/database/card'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [815],
	set: Set,

	name: {
		'en-us': "Cinderace",
		'fr-fr': "Pyrobut",
		'es-es': "Cinderace",
		'it-it': "Cinderace",
		'pt-br': "Cinderace",
		'de-de': "Liberlo"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Raboot",
		'fr-fr': "Lapyro",
		'es-es': "Raboot",
		'it-it': "Raboot",
		'pt-br': "Raboot",
		'de-de': "Kickerlo"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Crisis Power",
			'fr-fr': "Puissance In Extremis",
			'es-es': "Poder en Crisis",
			'it-it': "Potere Critico",
			'pt-br': "Poder Emergencial",
			'de-de': "Krisenkraft"
		},

		effect: {
			'en-us': "This Pokémon's attacks do 30 more damage to your opponent's Active Pokémon for each Prize card your opponent has taken (before applying Weakness and Resistance).",
			'fr-fr': "Les attaques de ce Pokémon infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire pour chaque carte Récompense que votre adversaire a récupérée (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Los ataques de este Pokémon hacen 30 puntos de daño más al Pokémon Activo de tu rival por cada carta de Premio que haya cogido tu rival (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Gli attacchi di questo Pokémon infliggono 30 danni in più al Pokémon attivo del tuo avversario per ogni carta Premio che ha preso, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Os ataques deste Pokémon causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente para cada carta de Prêmio que seu oponente pegou (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Die Attacken dieses Pokémon fügen dem Aktiven Pokémon deines Gegners für jede von deinem Gegner genommene Preiskarte 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Fireball Shot",
			'fr-fr': "Tir Boule de Feu",
			'es-es': "Balonazo de Fuego",
			'it-it': "Colpo Palladifuoco",
			'pt-br': "Bicada de Bola de Fogo",
			'de-de': "Feuerballschuss"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 150,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage2",

	description: {
		'en-us': "It's skilled at both offense and defense, and it gets pumped up when cheered on. But if it starts showboating, it could put itself in a tough spot."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 567108,
				tcgplayer: 241681
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 567108,
				tcgplayer: 241681
			}
		},
	],
}

export default card
