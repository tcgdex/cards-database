import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Azumarill",
		fr: "Azumarill",
		es: "Azumarill",
		it: "Azumarill",
		pt: "Azumarill",
		de: "Azumarill"
	},

	illustrator: "miki kudo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		184,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Marill",
		fr: "Marill",
		de: "Marill"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Thick Fat",
				fr: "Isograisse",
				es: "Sebo",
				it: "Grassospesso",
				pt: "Gordura Espessa",
				de: "Speckschicht"
			},
			effect: {
				en: "Any damage done to this Pokémon by attacks from your opponent’s Fire or Water Pokémon is reduced by 30 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à ce Pokémon par des attaques des Pokémon Fire ou Water de votre adversaire sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
				es: "Cualquier daño infligido a este Pokémon por ataques de los Pokémon Fire o Water de tu rival se reduce en 30 (después de aplicar Debilidad y Resistencia).",
				it: "I danni inflitti a questo Pokémon dagli attacchi dei Pokémon Fire o Water del tuo avversario sono ridotti di 30, dopo aver applicato debolezza e resistenza.",
				pt: "Qualquer dano feito a este Pokémon por ataques de Pokémon Fire ou Water do seu oponente será reduzido em 30 (após a aplicação de Fraqueza e Resistência).",
				de: "Diesem Pokémon werden durch Attacken der {R}- oder {W}-Pokémon deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Waterfall",
				fr: "Cascade",
				es: "Cascada",
				it: "Cascata",
				pt: "Cachoeira",
				de: "Kaskade"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "Its long ears are superb sensors. It can distinguish the movements of living things on riverbeds.",
		de: "Seine langen Ohren sind hervorragende Sensoren. Mit ihnen kann es Bewegungen im Fluss wahrnehmen."
	},

	thirdParty: {
		cardmarket: 299440,
		tcgplayer: 138515
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
