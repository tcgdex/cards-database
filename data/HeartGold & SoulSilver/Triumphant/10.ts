import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
		de: "Kryppuk"
	},

	illustrator: "Shizurow",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		442,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Spooky Whirlpool",
				fr: "Tourbillon d’esprits",
				de: "Schauriger Whirlpool"
			},
			effect: {
				en: "Once during your turn, when you put Spiritomb from your hand onto your Bench, you may use this power. Your opponent shuffles his or her hand into his or her deck and draws 6 cards.",
				fr: "Une seule fois pendant votre tour, lorsque vous placez Spiritomb de votre main sur votre Banc, vous pouvez utiliser ce Poké-Power. Votre adversaire mélange sa main avec son deck, puis pioche 6 cartes.",
				de: "Einmal während deines Zuges kannst du, wenn du Kryppuk von deiner Hand auf deine Bank legst, diese Poké-Power benutzen. Dein Gegner mischt seine Handkarten in sein Deck und zieht 6 Karten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Color Tag",
				fr: "Panel de couleurs",
				de: "Farbmarkierung"
			},
			effect: {
				en: "Choose Grass, Fire, Water, Lightning, Psychic, Fighting, Darkness, Metal, or Colorless type. Put 1 damage counter on each Pokémon your opponent has in play of the type you chose.",
				fr: "Choisissez le type GrassFireWaterLightningPsychicFightingDarknessMetal ou Colorless. Placez un marqueur de dégât sur chacun des Pokémon que votre adversaire a en jeu et qui correspond au type choisi.",
				de: "Wähle einen Typ: , , , , , , ,  oder . Lege auf jedes Pokémon des gewählten Typs, das dein Gegner im Spiel hat, 1 Schadensmarke."
			},

		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It was formed by uniting 108 spirits. It has been bound to the Odd Keystone to keep it from doing any mischief."
	},

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	}
}

export default card
