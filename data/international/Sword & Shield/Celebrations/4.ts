import { Card } from 'models/database/card'
import Set from '../Celebrations'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Palkia",
		'fr-fr': "Palkia",
		'es-es': "Palkia",
		'it-it': "Palkia",
		'pt-br': "Palkia",
		'de-de': "Palkia"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",
	illustrator: "5ban Graphics",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Absolute Space",
			'fr-fr': "Espace Absolu",
			'es-es': "Espacio Absoluto",
			'it-it': "Spazio Assoluto",
			'pt-br': "Espaço Absoluto",
			'de-de': "Absoluter Raum"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, your opponent can't play any Stadium cards from their hand.",
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de cartes Stade de sa main.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ninguna carta de Estadio de su mano.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può giocare le carte Stadio che ha in mano.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, seu oponente não poderá jogar nenhuma carta de Estádio da própria mão.",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, kann dein Gegner keine Stadionkarten aus seiner Hand spielen."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Overdrive Smash",
			'fr-fr': "Boost Atomisant",
			'es-es': "Sacudida Superdirecta",
			'it-it': "Devastacolpo",
			'pt-br': "Golpe Exaustivo",
			'de-de': "Turbosmash"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon's Overdrive Smash attack does 80 more damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant votre prochain tour, l'attaque Boost Atomisant de ce Pokémon inflige 80 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante tu próximo turno, el ataque Sacudida Superdirecta de este Pokémon hace 80 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
			'it-it': "Durante il tuo prossimo turno, l'attacco Devastacolpo di questo Pokémon infligge 80 danni in più, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o seu próximo turno, o ataque Golpe Exaustivo deste Pokémon causará 80 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
			'de-de': "Während deines nächsten Zuges fügt die Attacke Turbosmash dieses Pokémon 80 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
		},

		damage: "80+",
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",

	description: {
		'en-us': "It has the ability to distort space. It is described as a deity in Sinnoh-region mythology."
	},

	dexId: [484],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576749,
				tcgplayer: 250302
			}
		},
	],
}

export default card
