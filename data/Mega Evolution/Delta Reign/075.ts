import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Kommo-o",
		fr: "Ékaïser"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [784],
	hp: 160,
	types: ["Dragon"],
	stage: "Stage2",

	evolveFrom: {
		en: "Hakamo-o",
		fr: "Écaïd"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Beat Scales",
			fr: "Écailles Entrechoquées"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Look at the top 6 cards of your deck and attach any number of Basic Energy cards you find there to your {N} Pokémon in any way you like. Shuffle the other cards back into your deck.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Regardez les 6 cartes du dessus de votre deck, puis attachez le nombre voulu de cartes Énergie de base que vous y trouvez à vos Pokémon {N}, comme il vous plaît. Mélangez les autres cartes avec votre deck."
		}
	}],

	attacks: [{
		name: {
			en: "Hammer In",
			fr: "Enfoncement"
		},

		cost: ["Lightning", "Fighting", "Colorless"],

		damage: 170
	}],

	retreat: 2,
	regulationMark: "J",

	description: {
		en: "It bashes its scales to test its opponents' mettle. The sound of struck Kommo-o scales frightens weaker foes and sends them running.",
		fr: "Il met à l'épreuve la bravoure de ses adversaires en entrechoquant ses écailles. Ce son suffit à faire déguerpir les plus faibles."
	},

	variants: [
		{ type: "holo" },
		{ type: "reverse" }
	],
}

export default card
