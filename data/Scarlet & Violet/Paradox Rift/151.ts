import { Card } from "../../../interfaces"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [327],
	set: Set,

	name: {
		en: "Spinda",
		fr: "Spinda",
		es: "Spinda",
		it: "Spinda",
		pt: "Spinda",
		de: "Pandir"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Tangled Feet",
			fr: "Pieds Confus",
			es: "Tumbos",
			it: "Intricopiedi",
			pt: "Pés Confusos",
			de: "Taumelschritt"
		},

		effect: {
			en: "If this Pokémon is Confused and is damaged by an attack, flip a coin. If heads, prevent that damage.",
			fr: "Si ce Pokémon est Confus et qu'il subit les dégâts d'une attaque, lancez une pièce. Si c'est face, évitez ces dégâts.",
			es: "Si este Pokémon está Confundido y resulta dañado por un ataque, lanza 1 moneda. Si sale cara, se evita ese daño.",
			it: "Se questo Pokémon è confuso e viene danneggiato da un attacco, lancia una moneta. Se esce testa, previeni quei danni.",
			pt: "Se este Pokémon estiver Confuso e for danificado por um ataque, jogue uma moeda. Se sair cara, previna aquele dano.",
			de: "Wenn dieses Pokémon verwirrt ist und durch eine Attacke Schaden erhält, wirf 1 Münze. Verhindere bei Kopf jenen Schaden."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Teetering Steps",
			fr: "Pas Chancelants",
			es: "Pisadas Tambaleantes",
			it: "Strampapassi",
			pt: "Passos Cambaleantes",
			de: "Schwankende Schritte"
		},

		effect: {
			en: "This Pokémon is now Confused.",
			fr: "Ce Pokémon est maintenant Confus.",
			es: "Este Pokémon pasa a estar Confundido.",
			it: "Questo Pokémon viene confuso.",
			pt: "Este Pokémon agora está Confuso.",
			de: "Dieses Pokémon ist jetzt verwirrt."
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card