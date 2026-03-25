import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Jigglypuff",
		fr: "Rondoudou",
		es: "Jigglypuff",
		it: "Jigglypuff",
		pt: "Jigglypuff",
		de: "Pummeluff"
	},

	illustrator: "Saya Tsuruta",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [39],

	hp: 60,

	types: ["Psychic"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Sing",
				fr: "Berceuse",
				es: "Canto",
				it: "Canto",
				pt: "Cantar",
				de: "Gesang"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				en: "Balloon Tackle",
				fr: "Charge Ballon",
				es: "Placaje Globo",
				it: "Pallocarica",
				pt: "Investida Balão",
				de: "Ballontackle"
			},
			damage: 30,
		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card

