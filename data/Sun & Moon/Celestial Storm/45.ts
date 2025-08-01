import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Regice",
		fr: "Regice",
		es: "Regice",
		it: "Regice",
		pt: "Regice",
		de: "Regice"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		378,
	],

	hp: 120,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Icy Barrier",
				fr: "Barrière Glaciale",
				es: "Barrera Hielo",
				it: "Criobarriera",
				pt: "Barreira Gélida",
				de: "Eisige Barriere"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent can’t play any Stadium cards from their hand.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Stade de sa main.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, tu rival no puede jugar ninguna carta de Estadio de su mano.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, il tuo avversario non può giocare le carte Stadio che ha in mano.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, seu oponente não poderá jogar nenhuma carta de Estádio da própria mão.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, kann dein Gegner keine Stadionkarten von seiner Hand spielen."
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
				en: "Icy Wind",
				fr: "Vent Glace",
				es: "Viento Hielo",
				it: "Ventogelato",
				pt: "Vento Congelante",
				de: "Eissturm"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
				es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
				it: "Il Pokémon attivo del tuo avversario viene addormentato.",
				pt: "O Pokémon Ativo do seu oponente agora está Adormecido.",
				de: "Das Aktive Pokémon deines Gegners schläft jetzt."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 361292
	}
}

export default card
