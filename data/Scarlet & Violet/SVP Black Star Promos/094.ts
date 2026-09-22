import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [939],
	set: Set,

	name: {
		en: "Bellibolt",
		es: "Bellibolt",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	evolveFrom: {
		en: "Tadbulb",
		es: "Tadbulb",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Thunder Wave",
			es: "Onda Trueno",
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Two-Bump Bolt",
			es: "Doble Panzazo Eléctrico",
		},

		effect: {
			en: "You may discard up to 2 {L} Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
			es: "Puedes descartar hasta 2 Energías {L} de este Pokémon. Este ataque hace 80 puntos de daño más por cada carta que hayas descartado de esta manera.",
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",
	illustrator: "Mizue",
	description: {
		en: "When this Pokémon expands and contracts its wobbly body, the belly-button dynamo in its stomach produces a huge amount of electricity.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 751815,
				tcgplayer: 544194
			},
		}
	],
}

export default card
