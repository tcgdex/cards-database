import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Slaking",
		'fr-fr': "Monaflèmit",
		'es-es': "Slaking",
		'it-it': "Slaking",
		'pt-br': "Slaking",
		'de-de': "Letarking"
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Colorless"],
	stage: "Stage2",
	illustrator: "Mitsuhiro Arita",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Act Freely",
			'fr-fr': "Libre Comme l'Air",
			'es-es': "A tu Antojo",
			'it-it': "Senza Freni",
			'pt-br': "Act Freely",
			'de-de': "Freie Stücke"
		},

		effect: {
			'en-us': "If a Stadium is in play, this Pokémon can't attack.",
			'fr-fr': "Si un Stade est en jeu, ce Pokémon ne peut pas attaquer.",
			'es-es': "Si hay un Estadio en juego, este Pokémon no puede atacar.",
			'it-it': "Se c'è in gioco una carta Stadio, questo Pokémon non può attaccare.",
			'pt-br': "If a Stadium is in play, this Pokémon can't attack.",
			'de-de': "Wenn eine Stadionkarte im Spiel ist, kann dieses Pokémon nicht angreifen."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Rout",
			'fr-fr': "Débâcle",
			'es-es': "Esparcir",
			'it-it': "Stanamento",
			'pt-br': "Rout",
			'de-de': "Verheerung"
		},

		effect: {
			'en-us': "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chacun des Pokémon de Banc de votre adversaire.",
			'es-es': "Este ataque hace 30 puntos de daño más por cada uno de los Pokémon en Banca de tu rival.",
			'it-it': "Questo attacco infligge 30 danni in più per ogni Pokémon nella panchina del tuo avversario.",
			'pt-br': "This attack does 30 more damage for each of your opponent's Benched Pokémon.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf der Bank deines Gegners 30 Schadenspunkte mehr zu."
		},

		damage: "120+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	dexId: [289],

	evolveFrom: {
		'en-us': "Vigoroth",
		'fr-fr': "Vigoroth",
		'es-es': "Vigoroth",
		'it-it': "Vigoroth",
		'pt-br': "Vigoroth",
		'de-de': "Muntier"
	},

	description: {
		'en-us': "It is the world's most slothful Pokémon. However, it can exert horrifying power by releasing pent-up energy all at once."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 574187,
				tcgplayer: 246861
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574187,
				tcgplayer: 246861
			}
		},
	],
}

export default card
