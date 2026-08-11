import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Metagross",
		'fr-fr': "Métalosse",
		'es-es': "Metagross",
		'it-it': "Metagross",
		'pt-br': "Metagross",
		'de-de': "Metagross"
	},

	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		376,
	],

	hp: 170,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Metang",
		'fr-fr': "Métang",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Extend",
				'fr-fr': "Prolongement",
				'es-es': "Extender",
				'it-it': "Estensione",
				'pt-br': "Estender",
				'de-de': "Verlängerung"
			},
			effect: {
				'en-us': "As long as this Pokémon is your Active Pokémon, your turn does not end when you play Steven’s Resolve.",
				'fr-fr': "Tant que ce Pokémon est votre Pokémon Actif, votre tour ne se termine pas lorsque vous jouez Résolution de Pierre.",
				'es-es': "Mientras este Pokémon sea tu Pokémon Activo, tu turno no termina cuando juegues Decisión de Máximo.",
				'it-it': "Fintanto che questo Pokémon è il tuo Pokémon attivo, il tuo turno non finisce quando giochi Grinta di Rocco.",
				'pt-br': "Enquanto este Pokémon for o seu Pokémon Ativo, a sua vez de jogar não acaba quando você joga Resolução do Steven.",
				'de-de': "Solang dieses Pokémon dein Aktives Pokémon ist, endet dein Zug nicht, wenn du Troys Entschluss spielst."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Meteor Mash",
				'fr-fr': "Poing Météore",
				'es-es': "Puño Meteoro",
				'it-it': "Meteorpugno",
				'pt-br': "Meteoro Esmagador",
				'de-de': "Sternenhieb"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon’s Meteor Mash attack does 60 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, l’attaque Poing Météore de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, el ataque Puño Meteoro de este Pokémon hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, l’attacco Meteorpugno di questo Pokémon infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante a sua próxima vez de jogar, o ataque Meteoro Esmagador deste Pokémon causará 60 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges fügt die Attacke Sternenhieb dieses Pokémon 60 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	description: {
		'en-us': "A linkage of two Metang, this Pokémon can perform any calculation in a flash by utilizing parallel processing in its four brains.",
	},

	thirdParty: {
		cardmarket: 360408,
		tcgplayer: 170920
	}
}

export default card
