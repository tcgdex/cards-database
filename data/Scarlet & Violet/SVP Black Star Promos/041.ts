import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [194],
	set: Set,

	name: {
		en: "Paldean Wooper",
		fr: "Axoloto de Paldea",
		es: "Wooper de Paldea",
		it: "Wooper di Paldea",
		pt: "Wooper de Paldea",
		de: "Paldea-Felino"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Splattering Poison",
			fr: "Poison Éclaboussant",
			es: "Veneno Salpicante",
			it: "Spruzzata di Veleno",
			pt: "Respingar Veneno",
			de: "Giftgespritze"
		},

		effect: {
			en: "Both Active Pokémon are now Poisoned.",
			fr: "Les deux Pokémon Actifs sont maintenant Empoisonnés.",
			es: "Ambos Pokémon Activos pasan a estar Envenenados.",
			it: "Entrambi i Pokémon attivi vengono avvelenati.",
			pt: "Ambos os Pokémon Ativos agora estão Envenenados.",
			de: "Beide Aktiven Pokémon sind jetzt vergiftet."
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			en: "Tail Whap",
			fr: "Queue Battoir",
			es: "Coletón",
			it: "Codabotta",
			pt: "Surra de Cauda",
			de: "Schweifvertrimmer"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",
	illustrator: "kirisAki"
}

export default card