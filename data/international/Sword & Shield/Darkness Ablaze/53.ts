import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Dracovish",
		'fr-fr': "Hydragon",
		'es-es': "Dracovish",
		'it-it': "Dracovish",
		'pt-br': "Dracovish",
		'de-de': "Pescragon"
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
		'en-us': "Rare Fossil",
		'fr-fr': "Fossile Rare",
		'es-es': "Fósil Raro",
		'it-it': "Fossile Raro",
		'pt-br': "Fóssil Raro",
		'de-de': "Seltenes Fossil"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Primal Law",
				'fr-fr': "Loi Primordiale",
				'es-es': "Ley Primigenia",
				'it-it': "Legge Primordiale",
				'pt-br': "Lei Primitiva",
				'de-de': "Urzeitgesetz"
			},
			effect: {
				'en-us': "As long as this Pokémon is in the Active Spot, your opponent can't play any Pokémon from their hand to evolve their Pokémon.",
				'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer ses Pokémon.",
				'es-es': "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ningún Pokémon de su mano para hacer evolucionar a sus Pokémon.",
				'it-it': "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può giocare i Pokémon che ha in mano per far evolvere i suoi Pokémon.",
				'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, seu oponente não poderá jogar nenhum Pokémon da própria mão para evoluir os Pokémon dele(a).",
				'de-de': "Solange dieses Pokémon in der Aktiven Position ist, kann dein Gegner keine Pokémon aus seiner Hand spielen, um seine Pokémon zu entwickeln."
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
				'en-us': "Hammer In",
				'fr-fr': "Enfoncement",
				'es-es': "Martillear",
				'it-it': "Martello",
				'pt-br': "Martelada",
				'de-de': "Einhämmern"
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


	stage: "Stage1",

	description: {
		'en-us': "Powerful legs and jaws made it the apex predator of its time. Its own overhunting of its prey was what drove it to extinction."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483139,
				tcgplayer: 219382
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483139,
				tcgplayer: 219382
			}
		},
	],
}

export default card
