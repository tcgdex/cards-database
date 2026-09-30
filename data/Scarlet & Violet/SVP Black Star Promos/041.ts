import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [194],
	set: Set,

	name: {
		en: "Paldean Wooper",
		fr: "Axoloto de Paldea",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Splattering Poison",
			fr: "Poison Éclaboussant",
		},

		effect: {
			en: "Both Active Pokémon are now Poisoned.",
			fr: "Les deux Pokémon Actifs sont maintenant Empoisonnés.",
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Tail Whap",
			fr: "Queue Battoir",
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
	illustrator: "kirisAki",
	description: {
		en: "After losing a territorial struggle, Wooper began living on land. The Pokémon changed over time, developing a poisonous film to protect its body.",
		fr: "Depuis qu'une dispute territoriale l'a contraint à vivre sur la terre ferme, il protège son corps en le recouvrant d'un fluide toxique.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 720943,
				tcgplayer: 512049
			},
		}
	],
}

export default card
