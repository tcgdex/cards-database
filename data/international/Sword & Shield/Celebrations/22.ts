import { Card } from 'models/database/card'
import Set from '../Celebrations'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Lugia",
		'fr-fr': "Lugia",
		'es-es': "Lugia",
		'it-it': "Lugia",
		'pt-br': "Lugia",
		'de-de': "Lugia"
	},

	rarity: "Rare",
	category: "Pokemon",
	types: ["Colorless"],
	illustrator: "Kouki Saitou",
	hp: 130,
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Aero Ball",
			'fr-fr': "Aéro Ball",
			'es-es': "Bola Aérea",
			'it-it': "Aerosfera",
			'pt-br': "Aerobola",
			'de-de': "Luftball"
		},

		effect: {
			'en-us': "This attack does 20 damage for each Energy attached to both Active Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque Énergie attachée aux deux Pokémon Actifs.",
			'es-es': "Este ataque hace 20 puntos de daño por cada Energía unida a ambos Pokémon Activos.",
			'it-it': "Questo attacco infligge 20 danni per ogni Energia assegnata a ciascuno dei Pokémon attivi.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada Energia ligada a ambos os Pokémon Ativos.",
			'de-de': "Diese Attacke fügt für jede an beide Aktive Pokémon angelegte Energie 20 Schadenspunkte zu."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'en-us': "Deep Crush",
			'fr-fr': "Écrasement Massif",
			'es-es': "Aplastamiento Profundo",
			'it-it': "Distruzione Profonda",
			'pt-br': "Esmagamento Profundo",
			'de-de': "Tiefenbrecher"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't attack.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede atacar.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá atacar.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
		},

		damage: 160,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",

	description: {
		'en-us': "It is said to be the guardian of the seas. It is rumored to have been seen on the night of a storm."
	},

	dexId: [249],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576767,
				tcgplayer: 250317
			}
		},
	],
}

export default card
