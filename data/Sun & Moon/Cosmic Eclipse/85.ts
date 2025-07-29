import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Dusknoir",
		fr: "Noctunoir",
		es: "Dusknoir",
		it: "Dusknoir",
		pt: "Dusknoir",
		de: "Zwirrfinst"
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
		en: "Dusclops",
		fr: "Téraclope",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Grim Marking",
				fr: "Symbole Sinistre",
				es: "Marca Nefasta",
				it: "Lugubre Marchio",
				pt: "Marca Nefasta",
				de: "Grimmige Markierung"
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent’s attack, put 4 damage counters on your opponent’s Pokémon in any way you like.",
				fr: "Si ce Pokémon est votre Pokémon Actif et est mis K.O. par les dégâts d’une attaque d’un adversaire, placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
				es: "Si este Pokémon es tu Pokémon Activo y queda Fuera de Combate por el daño de un ataque de tu rival, pon 4 contadores de daño en los Pokémon de tu rival de la manera que desees.",
				it: "Se questo Pokémon è il tuo Pokémon attivo e viene messo KO dai danni inflitti da un attacco del tuo avversario, distribuisci a piacimento quattro segnalini danno sui Pokémon del tuo avversario.",
				pt: "Se este Pokémon for o seu Pokémon Ativo e for Nocauteado pelo dano de um ataque do seu oponente, coloque 4 contadores de dano nos Pokémon do seu oponente como desejar.",
				de: "Wenn dieses Pokémon dein Aktives Pokémon ist und durch Schaden einer Attacke deines Gegners kampfunfähig wird, lege 4 Schadensmarken beliebig auf die Pokémon deines Gegners."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Psych Up",
				fr: "Boost",
				es: "Más Psique",
				it: "Psicamisù",
				pt: "Carga Psíquica",
				de: "Psycho-Plus"
			},
			effect: {
				en: "During your next turn, this Pokémon’s Psych Up attack does 60 more damage (before applying Weakness and Resistance).",
				fr: "Pendant votre prochain tour, l’attaque Boost de ce Pokémon inflige 60 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
				es: "Durante tu próximo turno, el ataque Más Psique de este Pokémon hace 60 puntos de daño más (antes de aplicar Debilidad y Resistencia).",
				it: "Durante il tuo prossimo turno, l’attacco Psicamisù di questo Pokémon infligge 60 danni in più, prima di aver applicato debolezza e resistenza.",
				pt: "Durante a sua próxima vez de jogar, o ataque Carga Psíquica deste Pokémon causará 60 pontos de dano a mais (antes de aplicar Fraqueza e Resistência).",
				de: "Während deines nächsten Zuges fügt die Attacke Psycho-Plus dieses Pokémon 60 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
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

	thirdParty: {
		cardmarket: 408069
	}
}

export default card
