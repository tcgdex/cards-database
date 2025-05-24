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
		fr: "Spectrum",
		de: "Alpollo",
		es: "Haunter",
		pt: "Haunter",
		it: "Haunter"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Life Shaker",
			fr: "Chamboule Vie",
			es: "Sacudida Vital",
			it: "Scossone Vitale",
			pt: "Sacudida Vital",
			de: "Lebensstreuer"
		},

		effect: {
			en: "As often as you like during your turn, you may move 1 damage counter from 1 of your {P} Pokémon to another of your {P} Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer un marqueur de dégâts de l'un de vos Pokémon {P} vers un autre de vos Pokémon {P}.",
			es: "Todas las veces que quieras durante tu turno, puedes mover 1 contador de daño de 1 de tus Pokémon {P} a otro de tus Pokémon {P}.",
			it: "Durante il tuo turno, puoi spostare un segnalino danno da uno a un altro dei tuoi Pokémon {P} tutte le volte che vuoi.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá mover 1 contador de dano de 1 dos seus Pokémon {P} para outro Pokémon {P} seu.",
			de: "Beliebig oft während deines Zuges kannst du 1 Schadensmarke von 1 deiner {P}-Pokémon auf 1 anderes deiner {P}-Pokémon verschieben."
		}
	}],

	attacks: [{
		name: {
			en: "Hypnoblast",
			fr: "Hypnoblast",
			es: "Hipnorrayo",
			it: "Ipnobomba",
			pt: "Borrifada Hipnótica",
			de: "Hypnoschuss"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
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
