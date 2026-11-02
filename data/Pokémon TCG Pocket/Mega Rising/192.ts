import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Exploud",
		fr: "Brouhabam"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [295],
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		en: "Loudred",
		fr: "Ramboum"
	},

	description: {
		en: "This Pokémon can do more than just shout. To\ncommunicate with others of its kind, it'll emit all\nsorts of sounds from the holes in its body."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Booming Roar",
			fr: "Explosion de Bruit"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, they can't play any Item cards from their hand.",
			fr: "Pendant le prochain tour de votre adversaire, il ne peut pas jouer de cartes Objet de sa main."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-gyarados"]
}

export default card