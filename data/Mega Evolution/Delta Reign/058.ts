import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Spinarak",
		fr: "Mimigal"
	},

	illustrator: "Apios",
	rarity: "Common",
	category: "Pokemon",
	dexId: [167],
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Poison Sting",
			fr: "Dard-Venin"
		},

		cost: ["Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
		}
	}, {
		name: {
			en: "Bug Out",
			fr: "Horde d'Insectes"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Reveal the bottom 7 cards of your deck, and this attack does 50 damage for each Pokémon you find there that has the Bug Out attack. Then, shuffle any revealed Pokémon back into your deck. Discard the other cards.",
			fr: "Montrez les 7 cartes du dessous de votre deck. Cette attaque inflige 50 dégâts pour chaque Pokémon que vous y trouvez ayant l'attaque Horde d'Insectes. Mélangez ensuite les Pokémon montrés avec votre deck. Défaussez les autres cartes."
		},

		damage: "50×"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	description: {
		en: "It spins a web using fine yet durable thread. It then waits patiently for prey to be trapped.",
		fr: "Il tisse une toile en utilisant un fil fin mais solide, puis attend tranquillement sa proie."
	},

	variants: [
		{ type: "normal" },
		{ type: "reverse" }
	],
}

export default card
