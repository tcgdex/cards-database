import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Masquerain",
		fr: "Maskadra"
	},

	illustrator: "Anderson",
	rarity: "Promo",
	category: "Pokemon",
	dexId: [284],
	hp: 110,
	types: ["Grass"],
	stage: "Stage1",

	evolveFrom: {
		en: "Surskit",
		fr: "Arakdo"
	},

	attacks: [{
		name: {
			en: "Frightening Pattern",
			fr: "Motif Effrayant"
		},

		cost: ["Colorless"],

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't use attacks.",
			fr: "Pendant le prochain tour de votre adversaire, le Pokémon Défenseur ne peut pas utiliser d'attaques."
		},

		damage: 30
	}, {
		name: {
			en: "Bug Out",
			fr: "Horde d'Insectes"
		},

		cost: ["Grass"],

		effect: {
			en: "Reveal the bottom 7 cards of your deck, and this attack does 50 damage for each Pokémon you find there that has the Bug Out attack. Then, shuffle any revealed Pokémon back into your deck. Discard the other cards.",
			fr: "Montrez les 7 cartes du dessous de votre deck. Cette attaque inflige 50 dégâts pour chaque Pokémon que vous y trouvez ayant l'attaque Horde d'Insectes. Mélangez ensuite les Pokémon montrés avec votre deck. Défaussez les autres cartes."
		},

		damage: "50×"
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	description: {
		en: "The antennae have distinctive patterns that look like eyes. When it rains, they grow heavy, making flight impossible.",
		fr: "Quand il pleut, ses antennes semblables à des yeux s'imprègnent d'eau et l'empêchent de voler."
	},

	variants: [
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	],
}

export default card
