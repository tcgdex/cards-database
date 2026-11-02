import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Rayquaza ex",
		fr: "Méga-Rayquaza-ex"
	},

	illustrator: "takuyoa",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [384],
	hp: 280,
	types: ["Colorless"],

	stage: "Basic",
	suffix: "ex",

	abilities: [{
		type: "Ability",

		name: {
			en: "Ruler's Roar",
			fr: "Rugissement du Souverain"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand onto your Bench, you may use this Ability. Look at the top 4 cards of your deck and attach a Basic Energy card you find there to this Pokémon. Shuffle the other cards and put them on the bottom of your deck.",
			fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez utiliser ce talent. Regardez les 4 cartes du dessus de votre deck, puis attachez une carte Énergie de base que vous y trouvez à ce Pokémon. Mélangez les autres cartes et placez-les en dessous de votre deck."
		}
	}],

	attacks: [{
		name: {
			en: "Storm Emerald",
			fr: "Tempête Émeraude"
		},

		cost: ["Fire", "Lightning", "Colorless"],

		effect: {
			en: "This attack does 50 damage for each {R} Energy and each {L} Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 50 dégâts pour chaque Énergie {R} et chaque Énergie {L} attachée à tous vos Pokémon."
		},

		damage: "50×"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{ type: "holo" }
	],
}

export default card
