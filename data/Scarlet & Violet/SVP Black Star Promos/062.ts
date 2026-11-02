import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [854],
	set: Set,

	name: {
		en: "Sinistea",
		fr: "Théffroi",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Cold Tea",
			fr: "Thé Froid",
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "kurumitsu",
	description: {
		en: "The soul of someone who died alone possessed some leftover tea. This Pokémon appears in hotels and houses.",
		fr: "Ce Pokémon naît quand l'âme d'une personne esseulée prend possession des restes de thé noir. Il apparaît dans les hôtels et les maisons.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 729206,
				tcgplayer: 526638
			},
		}
	],
}

export default card
