import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Gengar",
		fr: "Ectoplasma",
		es: "Gengar",
		it: "Gengar",
		pt: "Gengar",
		de: "Gengar"
	},

	illustrator: "Shibuzoh.",
	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Life Shaker",
			fr: "Chamboule Vie",
			es: "Sacudida Vital",
			it: "Scossone Vitale",
			pt: "Life Shaker",
			de: "Lebensstreuer"
		},

		effect: {
			en: "As often as you like during your turn, you may move 1 damage counter from 1 of your Psychic Pokémon to another of your Psychic Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer un marqueur de dégâts de l'un de vos Pokémon Psychic vers un autre de vos Pokémon Psychic.",
			es: "Todas las veces que quieras durante tu turno, puedes mover 1 contador de daño de 1 de tus Pokémon Psychic a otro de tus Pokémon Psychic.",
			it: "Durante il tuo turno, puoi spostare un segnalino danno da uno a un altro dei tuoi Pokémon Psychic tutte le volte che vuoi.",
			pt: "As often as you like during your turn, you may move 1 damage counter from 1 of your Psychic Pokémon to another of your Psychic Pokémon.",
			de: "Beliebig oft während deines Zuges kannst du 1 Schadensmarke von 1 deiner Psychic-Pokémon auf 1 anderes deiner Psychic-Pokémon verschieben."
		}
	}],

	attacks: [{
		name: {
			en: "Hypnoblast",
			fr: "Hypnoblast",
			es: "Hipnorrayo",
			it: "Ipnobomba",
			pt: "Hypnoblast",
			de: "Hypnoschuss"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "Your opponent's Active Pokémon is now Asleep.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt."
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
		en: "On the night of a full moon, if shadows move on their own and laugh, it must be Gengar's doing."
	},

	stage: "Stage2",
	dexId: [94],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D"
}

export default card
