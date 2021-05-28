import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Éthernatos VMAX",
		en: "Eternatus VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 340,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Éthernatos-V",
		en: "Eternatus V"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Zone Éternelle",
			en: "Eternal Zone"
		},

		effect: {
			fr: "Si tous vos Pokémon en jeu sont de type Darkness, vous pouvez avoir jusqu’à 8 Pokémon sur votre Banc et vous ne pouvez pas mettre de Pokémon non Darkness en jeu. (Si ce talent arrête de fonctionner, défaussez des Pokémon de votre Banc jusqu’à en avoir 5.)",
			en: "If all of your Pokémon in play are Darkness type, you can have up to 8 Pokémon on your Bench, and you can’t put non-Darkness Pokémon into play. (If this Ability stops working, discard Pokémon from your Bench until you have 5.)"
		}
	}],

	attacks: [{
		name: {
			fr: "Effroi Final",
			en: "Dread End"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts pour chacun de vos Pokémon Darkness en jeu.",
			en: "This attack does 30 damage for each of your Darkness Pokémon in play."
		},

		damage: "30×",
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card