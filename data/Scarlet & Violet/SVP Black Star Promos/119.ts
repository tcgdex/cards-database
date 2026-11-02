import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [848],
	set: Set,

	name: {
		en: "Toxel",
		fr: "Toxizap",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Slight Intrusion",
			fr: "Légère Intrusion",
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts.",
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "Natsumi Yoshida",
	description: {
		en: "It has no problem drinking dirty water. An organ inside Toxel's body filters such water into a poisonous liquid that is harmless to Toxel.",
		fr: "Il peut boire de l'eau sale sans aucun problème grâce à son organe filtrant, qui transforme les liquides en un poison sans danger pour lui.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 769419,
				tcgplayer: 554293
			},
		}
	],
}

export default card
