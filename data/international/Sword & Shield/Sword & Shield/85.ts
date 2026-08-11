import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Gengar",
		'fr-fr': "Ectoplasma",
		'es-es': "Gengar",
		'it-it': "Gengar",
		'pt-br': "Gengar",
		'de-de': "Gengar"
	},

	illustrator: "Eri Yamaki",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'es-es': "Haunter",
		'it-it': "Haunter",
		'pt-br': "Haunter",
		'de-de': "Alpollo"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Life Shaker",
				'fr-fr': "Chamboule Vie",
				'es-es': "Sacudida Vital",
				'it-it': "Scossone Vitale",
				'pt-br': "Sacudida Vital",
				'de-de': "Lebensstreuer"
			},
			effect: {
				'en-us': "As often as you like during your turn, you may move 1 damage counter from 1 of your Psychic Pokémon to another of your Psychic Pokémon.",
				'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer un marqueur de dégâts de l'un de vos Pokémon Psychic vers un autre de vos Pokémon Psychic.",
				'es-es': "Todas las veces que quieras durante tu turno, puedes mover 1 contador de daño de 1 de tus Pokémon Psychic a otro de tus Pokémon Psychic.",
				'it-it': "Durante il tuo turno, puoi spostare un segnalino danno da uno a un altro dei tuoi Pokémon Psychic tutte le volte che vuoi.",
				'pt-br': "Quantas vezes desejar durante o seu turno, você poderá mover 1 contador de dano de 1 dos seus Pokémon Psychic para outro Pokémon Psychic seu.",
				'de-de': "Beliebig oft während deines Zuges kannst du 1 Schadensmarke von 1 deiner Psychic-Pokémon auf 1 anderes deiner Psychic-Pokémon verschieben."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
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
				'en-us': "Your opponent's Active Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Dormido.",
				'it-it': "Il Pokémon attivo del tuo avversario viene addormentato.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Adormecido.",
				'de-de': "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 90,

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
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	description: {
		'en-us': "On the night of a full moon, if shadows move on their own and laugh, it must be Gengar's doing."
	},

	dexId: [94],

	thirdParty: {
		cardmarket: 436549,
		tcgplayer: 208393
	}
}

export default card
