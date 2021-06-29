import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Gengar",
		fr: "Ectoplasma",
		es: "Gengar",
		it: "Gengar",
		pt: "Gengar",
		de: "Gengar"
	},

	illustrator: "Eri Yamaki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
	},

	stage: "Stage2",

	abilities: [
		{
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
				en: "As often as you like during your turn, you may move 1 damage counter from 1 of your Psychic Pokémon to another of your Psychic Pokémon.",
				fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez déplacer un marqueur de dégâts de l’un de vos Pokémon Psychic vers un autre de vos Pokémon Psychic.",
				es: "Todas las veces que quieras durante tu turno, puedes mover 1 contador de daño de 1 de tus Pokémon Psychic a otro de tus Pokémon Psychic.",
				it: "Durante il tuo turno, puoi spostare un segnalino danno da uno a un altro dei tuoi Pokémon Psychic tutte le volte che vuoi.",
				pt: "Quantas vezes desejar durante o seu turno, você poderá mover 1 contador de dano de 1 dos seus Pokémon Psychic para outro Pokémon Psychic seu.",
				de: "Beliebig oft während deines Zuges kannst du 1 Schadensmarke von 1 deiner Psychic-Pokémon auf 1 anderes deiner Psychic-Pokémon verschieben."
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
				en: "Hypnoblast",
				fr: "Hypnoblast",
				es: "Hipnorrayo",
				it: "Ipnobomba",
				pt: "Borrifada Hipnótica",
				de: "Hypnoschuss"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
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
	regulationMark: "D"
}

export default card
