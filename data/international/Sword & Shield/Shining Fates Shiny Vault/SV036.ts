import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [882],
	set: Set,

	name: {
		'fr-fr': "Hydragon",
		'en-us': "Dracovish",
		'es-es': "Dracovish",
		'it-it': "Dracovish",
		'pt-br': "Dracovish",
		'de-de': "Pescragon"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		'fr-fr': "Fossile Rare",
		'en-us': "Rare Fossil"
	},

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Loi Primordiale",
			'en-us': "Primal Law",
			'es-es': "Ley Primigenia",
			'it-it': "Legge Primordiale",
			'pt-br': "Lei Primitiva",
			'de-de': "Urzeitgesetz"
		},

		effect: {
			'fr-fr': "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer ses Pokémon.",
			'en-us': "As long as this Pokémon is in the Active Spot, your opponent can't play any Pokémon from their hand to evolve their Pokémon.",
			'es-es': "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ningún Pokémon de su mano para hacer evolucionar a sus Pokémon.",
			'it-it': "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può giocare i Pokémon che ha in mano per far evolvere i suoi Pokémon.",
			'pt-br': "Enquanto este Pokémon estiver no Campo Ativo, seu oponente não poderá jogar nenhum Pokémon da própria mão para evoluir os Pokémon dele(a).",
			'de-de': "Solange dieses Pokémon in der Aktiven Position ist, kann dein Gegner keine Pokémon aus seiner Hand spielen, um seine Pokémon zu entwickeln."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Enfoncement",
			'en-us': "Hammer In",
			'es-es': "Martillear",
			'it-it': "Martello",
			'pt-br': "Martelada",
			'de-de': "Einhämmern"
		},

		damage: 120,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

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
				cardmarket: 539568,
				tcgplayer: 232391
			}
		},
	],
}

export default card
