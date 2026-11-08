import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Dusknoir",
		'fr-fr': "Noctunoir",
		'es-es': "Dusknoir",
		'it-it': "Dusknoir",
		'pt-br': "Dusknoir",
		'de-de': "Zwirrfinst"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		477,
	],

	hp: 160,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Dusclops",
		'fr-fr': "Téraclope",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Grim Marking",
				'fr-fr': "Symbole Sinistre",
				'es-es': "Marca Nefasta",
				'it-it': "Lugubre Marchio",
				'pt-br': "Marca Nefasta",
				'de-de': "Grimmige Markierung"
			},
			effect: {
				'en-us': "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent’s attack, put 4 damage counters on your opponent’s Pokémon in any way you like.",
				'fr-fr': "Si ce Pokémon est votre Pokémon Actif et est mis K.O. par les dégâts d’une attaque d’un adversaire, placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				'es-es': "Si este Pokémon es tu Pokémon Activo y queda Fuera de Combate por el daño de un ataque de tu rival, pon 4 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				'it-it': "Se questo Pokémon è il tuo Pokémon attivo e viene messo KO dai danni inflitti da un attacco del tuo avversario, distribuisci a piacimento quattro segnalini danno sui Pokémon del tuo avversario.",
				'pt-br': "Se este Pokémon for o seu Pokémon Ativo e for Nocauteado pelo dano de um ataque do seu oponente, coloque 4 contadores de dano nos Pokémon do seu oponente como desejar.",
				'de-de': "Wenn dieses Pokémon dein Aktives Pokémon ist und durch Schaden einer Attacke deines Gegners kampfunfähig wird, lege 4 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psych Up",
				'fr-fr': "Boost",
				'es-es': "Más Psique",
				'it-it': "Psicamisù",
				'pt-br': "Carga Psíquica",
				'de-de': "Psycho-Plus"
			},
			effect: {
				'en-us': "During your next turn, this Pokémon’s Psych Up attack does 60 more damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant votre prochain tour, l’attaque Boost de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante tu próximo turno, el ataque Más Psique de este Pokémon hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il tuo prossimo turno, l’attacco Psicamisù di questo Pokémon infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante a sua próxima vez de jogar, o ataque Carga Psíquica deste Pokémon causará 60 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Während deines nächsten Zuges fügt die Attacke Psycho-Plus dieses Pokémon 60 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It is said to take lost spirits into its pliant body and guide them home.",
	},

	thirdParty: {
		cardmarket: 408069,
		tcgplayer: 201928
	}
}

export default card
