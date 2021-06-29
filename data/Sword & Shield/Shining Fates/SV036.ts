import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Hydragon",
		en: "Dracovish",
		es: "Dracovish",
		it: "Dracovish",
		pt: "Dracovish",
		de: "Pescragon"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		fr: "Fossile Rare",
		en: "Rare Fossil"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Loi Primordiale",
			en: "Primal Law",
			es: "Ley Primigenia",
			it: "Legge Primordiale",
			pt: "Lei Primitiva",
			de: "Urzeitgesetz"
		},

		effect: {
			fr: "Tant que ce Pokémon est sur le Poste Actif, votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer ses Pokémon.",
			en: "As long as this Pokémon is in the Active Spot, your opponent can’t play any Pokémon from their hand to evolve their Pokémon.",
			es: "Mientras este Pokémon esté en el Puesto Activo, tu rival no puede jugar ningún Pokémon de su mano para hacer evolucionar a sus Pokémon.",
			it: "Fintanto che questo Pokémon è in posizione attiva, il tuo avversario non può giocare i Pokémon che ha in mano per far evolvere i suoi Pokémon.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, seu oponente não poderá jogar nenhum Pokémon da própria mão para evoluir os Pokémon dele(a).",
			de: "Solange dieses Pokémon in der Aktiven Position ist, kann dein Gegner keine Pokémon aus seiner Hand spielen, um seine Pokémon zu entwickeln."
		}
	}],

	attacks: [{
		name: {
			fr: "Enfoncement",
			en: "Hammer In",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 120,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card