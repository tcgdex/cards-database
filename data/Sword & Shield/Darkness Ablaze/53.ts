import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		en: "Dracovish",
		fr: "Hydragon",
		es: "Dracovish",
		it: "Dracovish",
		pt: "Dracovish",
		de: "Pescragon"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [882],
	set: Set,
	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Rare Fossil",
		fr: "Fossile Rare",
		es: "Fósil Raro",
		it: "Fossile Raro",
		pt: "Fóssil Raro",
		de: "Seltenes Fossil"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Primal Law",
				fr: "Loi Primordiale",
				es: "Ley Primigenia",
				it: "Legge Primordiale",
				pt: "Lei Primitiva",
				de: "Urzeitgesetz"
			},
			effect: {
				en: "As long as this Pokémon is in the Active Spot, your opponent can't play any Pokémon from their hand to evolve their Pokémon.",
				fr: "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer ses Pokémon.",
				es: "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ningún Pokémon de su mano para hacer evolucionar a sus Pokémon.",
				it: "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può giocare i Pokémon che ha in mano per far evolvere i suoi Pokémon.",
				pt: "Enquanto este Pokémon estiver no Campo Ativo, seu oponente não poderá jogar nenhum Pokémon da própria mão para evoluir os Pokémon dele(a).",
				de: "Solange dieses Pokémon in der Aktiven Position ist, kann dein Gegner keine Pokémon aus seiner Hand spielen, um seine Pokémon zu entwickeln."
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
				en: "Hammer In",
				fr: "Enfoncement",
				es: "Martillear",
				it: "Martello",
				pt: "Martelada",
				de: "Einhämmern"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Powerful legs and jaws made it the apex predator of its time. Its own overhunting of its prey was what drove it to extinction."
	},

	thirdParty: {
		cardmarket: 483139,
		tcgplayer: 219382
	}
}

export default card
