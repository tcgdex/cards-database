import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gengar",
		'fr-fr': "Ectoplasma",
		'es-es': "Gengar",
		'it-it': "Gengar",
		'pt-br': "Gengar",
		'de-de': "Gengar"
	},

	illustrator: "Shibuzoh.",
	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum",
		'de-de': "Alpollo",
		'es-es': "Haunter",
		'pt-br': "Haunter",
		'it-it': "Haunter"
	},

	abilities: [{
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
			'en-us': "As often as you like during your turn, you may move 1 damage counter from 1 of your {P} Pokémon to another of your {P} Pokémon.",
			'fr-fr': "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer un marqueur de dégâts de l'un de vos Pokémon {P} vers un autre de vos Pokémon {P}.",
			'es-es': "Todas las veces que quieras durante tu turno, puedes mover 1 contador de daño de 1 de tus Pokémon {P} a otro de tus Pokémon {P}.",
			'it-it': "Durante il tuo turno, puoi spostare un segnalino danno da uno a un altro dei tuoi Pokémon {P} tutte le volte che vuoi.",
			'pt-br': "Quantas vezes desejar durante o seu turno, você poderá mover 1 contador de dano de 1 dos seus Pokémon {P} para outro Pokémon {P} seu.",
			'de-de': "Beliebig oft während deines Zuges kannst du 1 Schadensmarke von 1 deiner {P}-Pokémon auf 1 anderes deiner {P}-Pokémon verschieben."
		}
	}],

	attacks: [{
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
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,

	description: {
		'en-us': "On the night of a full moon, if shadows move on their own and laugh, it must be Gengar's doing."
	},

	stage: "Stage2",
	dexId: [94],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 505880
	}
}

export default card
