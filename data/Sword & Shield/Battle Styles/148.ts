import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Mimikyu V",
		fr: "Mimiqui V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Psychic"],

	abilities: [{
		type: "Ability",

		name: {
			en: "Dummy Doll",
			fr: "Poupée Mannequin"
		},

		effect: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may prevent all damage done to this Mimikyu V by attacks from your opponent’s Pokémon until the end of your opponent’s next turn.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez éviter tous les dégâts infligés à ce Mimiqui-V par les attaques des Pokémon de votre adversaire jusqu’à la fin du prochain tour de celui-ci."
		}
	}],

	attacks: [{
		name: {
			en: "Jealous Eyes",
			fr: "Regard Envieux"
		},

		effect: {
			en: "Put 3 damage counters on your opponent’s Active Pokémon for each Prize card your opponent has taken.",
			fr: "Placez 3 marqueurs de dégâts sur le Pokémon Actif de votre adversaire pour chaque carte Récompense que votre adversaire a récupérée."
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card