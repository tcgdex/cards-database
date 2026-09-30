import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Delibird",
		fr: "Cadoizo"
	},

	illustrator: "satoma",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [225],
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Energizing Present",
			fr: "Cadeau Énergisant"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may use this Ability. Look at the top 6 cards of your deck, reveal an Energy card you find there, and put it into your hand. Shuffle the other cards and put them on the bottom of your deck.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez utiliser ce talent. Regardez les 6 cartes du dessus de votre deck, montrez une carte Énergie que vous y trouvez, puis ajoutez-la à votre main. Mélangez les autres cartes et placez-les en dessous de votre deck."
		}
	}],

	attacks: [{
		name: {
			en: "Beat",
			fr: "Bataille"
		},

		cost: ["Colorless"],

		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	description: {
		en: "It carries food rolled up in its tail. It has a habit of sharing food with people lost in the mountains.",
		fr: "Il enveloppe sa nourriture dans sa queue pour la transporter et partage volontiers ses victuailles avec les victimes d'accidents en montagne."
	},

	variants: [
		{ type: "normal" },
		{ type: "reverse" }
	],
}

export default card
