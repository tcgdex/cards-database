import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Luxio",
		fr: "Luxio",
		es: "Luxio",
		'es-mx': "Luxio",
		de: "Luxio",
		it: "Luxio",
		pt: "Luxio"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fighting Roar",
			fr: "Rugissement Combatif",
			es: "Rugido de Lucha",
			'es-mx': "Rugido Tenaz",
			de: "Kampflustiges Gebrüll",
			it: "Ruggito Combattente",
			pt: "Rugido de Luta"
		},

		effect: {
			en: "If your opponent's Active Pokémon is a Pokémon ex, this Pokémon can evolve during your first turn or the turn you play it.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, ce Pokémon peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
			es: "Si el Pokémon Activo de tu rival es un Pokémon ex, este Pokémon puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon ex, este Pokémon puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego.",
			de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, kann sich dieses Pokémon während deines ersten Zuges oder während des Zuges, in dem du es spielst, entwickeln.",
			it: "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo Pokémon può evolversi durante il tuo primo turno o il turno in cui lo giochi.",
			pt: "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este Pokémon poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Static Shock",
			fr: "Choc Statique",
			es: "Impacto Estático",
			'es-mx': "Impacto Estático",
			de: "Statischer Schock",
			it: "Shock Statico",
			pt: "Choque de Estática"
		},

		damage: 40
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684410,
		cardmarket: 877440
	}
}

export default card