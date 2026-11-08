import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [404],

	name: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'es-es': "Luxio",
		'es-mx': "Luxio",
		'de-de': "Luxio",
		'it-it': "Luxio",
		'pt-br': "Luxio"
	},

	evolveFrom: {
		'en-us': "Shinx",
		'fr-fr': "Lixy",
		'es-es': "Shinx",
		'es-mx': "Shinx",
		'de-de': "Sheinux",
		'it-it': "Shinx",
		'pt-br': "Shinx",
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
			'en-us': "Fighting Roar",
			'fr-fr': "Rugissement Combatif",
			'es-es': "Rugido de Lucha",
			'es-mx': "Rugido Tenaz",
			'de-de': "Kampflustiges Gebrüll",
			'it-it': "Ruggito Combattente",
			'pt-br': "Rugido de Luta"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon is a Pokémon ex, this Pokémon can evolve during your first turn or the turn you play it.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon-ex, ce Pokémon peut évoluer pendant votre premier tour ou pendant le tour où vous le jouez.",
			'es-es': "Si el Pokémon Activo de tu rival es un Pokémon ex, este Pokémon puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego.",
			'es-mx': "Si el Pokémon Activo de tu rival es un Pokémon ex, este Pokémon puede evolucionar durante tu primer turno o durante el turno en que lo pongas en juego.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners ein Pokémon-ex ist, kann sich dieses Pokémon während deines ersten Zuges oder während des Zuges, in dem du es spielst, entwickeln.",
			'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon-ex, questo Pokémon può evolversi durante il tuo primo turno o il turno in cui lo giochi.",
			'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon ex, este Pokémon poderá evoluir durante o seu primeiro turno ou durante o turno em que for colocado em jogo."
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Static Shock",
			'fr-fr': "Choc Statique",
			'es-es': "Impacto Estático",
			'es-mx': "Impacto Estático",
			'de-de': "Statischer Schock",
			'it-it': "Shock Statico",
			'pt-br': "Choque de Estática"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684410,
				cardmarket: 877440
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684410,
				cardmarket: 877440
			}
		}
	],

}

export default card
