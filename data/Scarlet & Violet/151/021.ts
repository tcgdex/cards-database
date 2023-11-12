import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Piafabec",
		en: "Spearow",
		es: "Spearow",
		it: "Spearow",
		pt: "Spearow",
		de: "Habitak"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Avantage Évolutif",
			en: "Evolutionary Advantage",
			es: "Ventaja Evolutiva",
			it: "Vantaggio Evolutivo",
			pt: "Vantagem Evolucionária",
			de: "Entwicklungsvorteil"
		},

		effect: {
			fr: "Si vous jouez en second, ce Pokémon peut évoluer pendant votre premier tour.",
			en: "If you go second, this Pokémon can evolve during your first turn.",
			es: "Si sales en segundo lugar, este Pokémon puede evolucionar durante tu primer turno.",
			it: "Se inizi per secondo, questo Pokémon può evolversi durante il tuo primo turno.",
			pt: "Se você for o segundo a jogar, este Pokémon poderá evoluir durante o seu primeiro turno.",
			de: "Wenn du als Zweiter am Zug bist, kann sich dieses Pokémon während deines ersten Zuges entwickeln."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Plongée Rapide",
			en: "Speed Dive",
			es: "Picado Rápido",
			it: "Immersione Rapida",
			pt: "Mergulho Veloz",
			de: "Tempohechtsprung"
		},

		damage: 10
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card