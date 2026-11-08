import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Gardevoir",
		'fr-fr': "Gardevoir"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [282],
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Kirlia"
	},

	description: {
		'en-us': "To protect its Trainer, it will expend all its psychic\npower to create a small black hole.",
		'fr-fr': "Prêt à tout pour protéger son Dresseur, il peut aller jusqu'à épuiser sa force mentale pour créer un mini trou noir."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Psy Shadow",
			'fr-fr': "Ombre Psy"
		},

		effect: {
			'en-us': "Once during your turn, you may take a {P} Energy from your Energy Zone and attach it to the {P} Pokémon in the Active Spot.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez prendre une Énergie {P} de votre zone Énergie et l'attacher au Pokémon  sur le Poste Actif."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Psyshot",
			'fr-fr': "Piqûre Psy"
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