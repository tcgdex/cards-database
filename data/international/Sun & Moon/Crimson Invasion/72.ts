import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Wigglytuff",
		'fr-fr': "Grodoudou",
		'es-es': "Wigglytuff",
		'it-it': "Wigglytuff",
		'pt-br': "Wigglytuff",
		'de-de': "Knuddeluff"
	},

	illustrator: "0313",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		40,
	],

	hp: 120,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hypnoblast",
				'fr-fr': "Hypnoblast",
				'es-es': "Hipnorrayo",
				'it-it': "Ipnobomba",
				'pt-br': "Borrifada Hipnótica",
				'de-de': "Hypnoschuss"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 30,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Punishing Slap",
				'fr-fr': "Frappe Éprouvante",
				'es-es': "Bofetón Castigador",
				'it-it': "Sberla Punitiva",
				'pt-br': "Tapa de Punição",
				'de-de': "Strafende Klatsche"
			},
			effect: {
				'en-us': "If any of your opponent’s Pokémon have any Darkness Energy attached to them, this attack does 60 more damage.",
				'fr-fr': "Si de l’Énergie Darkness est attachée à l’un des Pokémon de votre adversaire, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si alguno de los Pokémon de tu rival tiene alguna Energía Darkness unida a él, este ataque hace 60 puntos de daño más.",
				'it-it': "Se uno qualsiasi dei Pokémon del tuo avversario ha delle Energie Darkness assegnate, questo attacco infligge 60 danni in più.",
				'pt-br': "Se algum dos Pokémon do seu oponente tiver alguma Energia Darkness ligada a ele, este ataque causará 60 pontos de dano a mais.",
				'de-de': "Wenn an die Pokémon deines Gegners mindestens 1 Darkness-Energie angelegt ist, fügt diese Attacke 60 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It sheds its fine fur when the seasons change. The fur is gathered and spun into a luxurious yarn.",
	},

	thirdParty: {
		cardmarket: 311920,
		tcgplayer: 149098
	}
}

export default card
