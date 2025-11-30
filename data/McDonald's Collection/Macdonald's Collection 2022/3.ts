import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2022'

const card: Card = {
	name: {
		en: "Gossifleur",
		fr: "Tournicoton",
		es: "Gossifleur",
		it: "Gossifleur",
		pt: "Gossifleur",
		de: "Cottini"
	},

	illustrator: "Mizue",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [829],

	hp: 50,

	types: ["Grass"],

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
			cost: ["Grass"],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'Herbe",
				es: "Hoja Afilada",
				it: "Foglielama",
				pt: "Folha Navalha",
				de: "Rasierblatt"
			},
			damage: 10,
		},
	],

	weaknesses: [
		{
			type: "Fire",
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

