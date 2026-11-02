import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Delcatty",
		fr: "Delcatty"
	},

	illustrator: "Sekio",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [301],
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		en: "Skitty",
		fr: "Skitty"
	},

	description: {
		en: "It is highly popular among female Trainers for its\nsublime fur. It does not keep a nest.",
		fr: "Les femmes Dresseurs raffolent de sa sublime fourrure. Il ne possède pas de nid."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Search for Friends",
			fr: "En Quête d'Amis"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may put a Supporter card from your discard pile into your hand.",
			fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main pour faire évoluer un de vos Pokémon, vous pouvez placer une carte Supporter de votre pile de défausse dans votre main."
		}
	}],

	attacks: [{
		name: {
			en: "Cat Kick",
			fr: "Coup d'Patte"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card