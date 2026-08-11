import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Krookodile",
		'fr-fr': "Crocorible",
		'es-es': "Krookodile",
		'es-mx': "Krookodile",
		'de-de': "Rabigator",
		'it-it': "Krookodile",
		'pt-br': "Krookodile"
	},

	evolveFrom: {
		'en-us': "Krokorok",
		'fr-fr': "Escroco",
		'es-es': "Krokorok",
		'es-mx': "Krokorok",
		'de-de': "Rokkaiman",
		'it-it': "Krokorok",
		'pt-br': "Krokorok",
	},

	rarity: "Uncommon",
	category: "Pokemon",

	dexId: [553],
	hp: 170,
	types: ["Darkness"],
	stage: "Stage2",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Vengeful Fang",
			'fr-fr': "Croc Vindicatif",
			'es-es': "Colmillo Vengativo",
			'es-mx': "Colmillo Vengativo",
			'de-de': "Rächende Reißer",
			'it-it': "Zanna Vendicativa",
			'pt-br': "Presa Vingativa"
		},

		effect: {
			'en-us': "If any of your Pokémon were Knocked Out by damage from an attack during your opponent's last turn, this attack does 160 more damage.",
			'fr-fr': "Si au moins l'un de vos Pokémon a été mis K.O. par les dégâts d'une attaque pendant le dernier tour de votre adversaire, cette attaque inflige 160 dégâts supplémentaires.",
			'es-es': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 160 puntos de daño más.",
			'es-mx': "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque durante el último turno de tu rival, este ataque hace 160 puntos de daño más.",
			'de-de': "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 160 Schadenspunkte mehr zu.",
			'it-it': "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco durante l'ultimo turno del tuo avversario, questo attacco infligge 160 danni in più.",
			'pt-br': "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque durante o último turno do seu oponente, este ataque causará 160 pontos de dano a mais."
		},

		damage: "60+"
	}, {
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Hammer In",
			'fr-fr': "Enfoncement",
			'es-es': "Martillear",
			'es-mx': "Martillar",
			'de-de': "Einhämmern",
			'it-it': "Martello",
			'pt-br': "Martelada"
		},

		damage: 160
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	description: {
		'en-us': "After clamping down with its powerful jaws, it twists its body around to rip its prey in half.",
	},

	illustrator: "Ryuta Fuse",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857641,
				tcgplayer: 662174,
				cardtrader: 356850
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857641,
				tcgplayer: 662174,
				cardtrader: 356850
			}
		},
	],	
}

export default card
