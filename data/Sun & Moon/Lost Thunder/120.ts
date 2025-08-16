import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Umbreon",
		fr: "Noctali",
		es: "Umbreon",
		it: "Umbreon",
		pt: "Umbreon",
		de: "Nachtara"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		197,
	],

	hp: 110,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Retaliate",
				fr: "Vengeance",
				es: "Represalia",
				it: "Nemesi",
				pt: "Retaliação",
				de: "Heimzahlung"
			},
			effect: {
				en: "If any of your Pokémon were Knocked Out by damage from an opponent’s attack during their last turn, this attack does 90 more damage.",
				fr: "Si l’un de vos Pokémon a été mis K.O. par les dégâts d’une attaque de votre adversaire pendant son dernier tour, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si alguno de tus Pokémon quedó Fuera de Combate por el daño de un ataque de tu rival durante su último turno, este ataque hace 90 puntos de daño más.",
				it: "Se uno qualsiasi dei tuoi Pokémon è stato messo KO dai danni inflitti da un attacco del tuo avversario durante il suo ultimo turno, questo attacco infligge 90 danni in più.",
				pt: "Se algum dos seus Pokémon tiver sido Nocauteado pelo dano de um ataque do seu oponente durante a última vez dele(a) jogar, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn mindestens 1 deiner Pokémon während des letzten Zuges deines Gegners durch Schaden einer Attacke kampfunfähig wurde, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Cutter",
				fr: "Tranch’Obscur",
				es: "Cuchilla Oscura",
				it: "Oscurotaglio",
				pt: "Cortador de Escuridão",
				de: "Dunkler Zerschneider"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 365757,
		tcgplayer: 178933
	}
}

export default card
