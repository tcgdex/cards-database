import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Aegislash",
		fr: "Exagide"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Metal"],

	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Stance Change",
			fr: "Déclic Tactique"
		},

		effect: {
			en: "Once during your turn, you may switch this Pokémon with an Aegislash in your hand. Any attached cards, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez échanger ce Pokémon contre un Exagide de votre main. Les cartes attachées, les marqueurs de dégâts, les États Spéciaux, le nombre de tours en jeu et tous les autres effets restent sur le nouveau Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Gigaton Bash",
			fr: "Ruée Gigatonne"
		},

		effect: {
			en: "During your opponent’s next turn, prevent all damage done to this Pokémon by attacks from Pokémon VMAX.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon-VMAX."
		},

		damage: 70,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card