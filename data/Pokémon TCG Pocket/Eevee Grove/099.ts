import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Gardevoir",
		fr: "Gardevoir"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Kirlia"
	},

	description: {
		en: "To protect its Trainer, it will expend all its psychic\npower to create a small black hole.",
		fr: "Prêt à tout pour protéger son Dresseur, il peut aller jusqu'à épuiser sa force mentale pour créer un mini trou noir."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Psy Shadow",
			fr: "Ombre Psy"
		},

		effect: {
			en: "Once during your turn, you may take a {P} Energy from your Energy Zone and attach it to the {P} Pokémon in the Active Spot.",
			fr: "Une fois pendant votre tour, vous pouvez prendre une Énergie {P} de votre zone Énergie et l'attacher au Pokémon  sur le Poste Actif."
		}
	}],

	attacks: [{
		name: {
			en: "Psyshot",
			fr: "Piqûre Psy"
		},

		damage: 60,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card