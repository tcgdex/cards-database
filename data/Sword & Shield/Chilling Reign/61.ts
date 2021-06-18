import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Gardevoir",
		fr: "Gardevoir"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Shining Arcana",
			fr: "Arcane Brillant"
		},

		effect: {
			en: "Once during your turn, you may look at the top 2 cards of your deck and attach any number of basic Energy cards you find there to your Pokémon in any way you like. Put the other cards into your hand.",
			fr: "Une fois pendant votre tour, vous pouvez regarder les 2 cartes du dessus de votre deck puis attacher le nombre voulu de cartes Énergie de base que vous y trouvez à vos Pokémon, comme il vous plaît. Ajoutez les autres cartes à votre main."
		}
	}],

	attacks: [{
		name: {
			en: "Brainwave",
			fr: "Onde Cérébrale"
		},

		effect: {
			en: "This attack does 30 more damage for each Psychic Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Psychic attachée à ce Pokémon."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card