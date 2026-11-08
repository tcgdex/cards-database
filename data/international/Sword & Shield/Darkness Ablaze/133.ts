import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [115],

	name: {
		'en-us': "Kangaskhan",
		'fr-fr': "Kangourex",
		'es-es': "Kangaskhan",
		'it-it': "Kangaskhan",
		'pt-br': "Kangaskhan",
		'de-de': "Kangama"
	},

	illustrator: "kawayoo",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rally Back",
				'fr-fr': "Répercussions",
				'es-es': "Apoyo Vengativo",
				'it-it': "Radunata Rinforzi",
				'pt-br': "Responder à Altura",
				'de-de': "Aufholjagd"
			},
			effect: {
				'en-us': "If any of your Pokémon were Knocked Out by damage from an attack from your opponent's Pokémon during their last turn, this attack does 90 more damage.",
				'fr-fr': "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque d'un Pokémon de votre adversaire pendant son dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque de los Pokémon de tu rival durante su último turno, este ataque hace 90 puntos de daño más.",
				'it-it': "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco di un Pokémon del tuo avversario durante il suo ultimo turno, questo attacco infligge 90 danni in più.",
				'pt-br': "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque dos Pokémon do seu oponente durante o último turno dele(a), este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke der Pokémon deines Gegners kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncement",
				'es-es': "Martillear",
				'it-it': "Martello",
				'pt-br': "Martelada",
				'de-de': "Einhämmern"
			},

			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "You shouldn't get close to the child when it's playing outside its mother's pouch. Its mother is always nearby watching over it."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483544,
				tcgplayer: 219328
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483544,
				tcgplayer: 219328
			}
		},
	],
}

export default card
