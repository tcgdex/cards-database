import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Kouki Saitou",
	category: "Pokemon",

	description: {
		en: "Spinning minigears are rotated at high speed and repeatedly fired away. It is dangerous if the gears don’t return."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Metal Sound",
			fr: "Strido-Son"
		},

		effect: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus."
		}
	}, {
		name: {
			en: "Guard Press",
			fr: "Pression de Garde"
		},

		damage: 60,

		effect: {
			en: "During your opponent’s next turn, any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance)."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Klang",
		fr: "Clic"
	},

	rarity: "None",
	hp: 80,
	types: ["Metal"],

	thirdParty: {
		tcgplayer: 86478
	}
}

export default card