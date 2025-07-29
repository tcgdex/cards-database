import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Arcanine",
		fr: "Arcanin",
		de: "Arkani"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Flame Dash",
				fr: "Ruée enflammée",
				de: "Flammensprint"
			},
			effect: {
				en: "Once during your turn, when you play Arcanine from your hand to evolve 1 of your Benched Pokémon, you may switch Arcanine with 1 of your Active Pokémon. If you do, you may move any number of Energy cards attached to that Pokémon to Arcanine.",
				fr: "Une seule fois lors de votre tour, lorsque vous jouez Arcanin de votre main pour évoluer 1 des Pokémon de votre Banc, vous pouvez échanger Arcanin avec 1 de vos Pokémon Actifs. Déplacez alors autant de cartes Énergie attachées à ce Pokémon que vous voulez sur Arcanin.",
				de: "Einmal während deines Zuges kannst du, wenn du Arkani von deiner Hand spielst, um 1 deiner Pokémon auf der Bank zu entwickeln, 1 deiner Aktiven Pokémon wählen und Arkani gegen das gewählte Pokémon austauschen. Wenn du das machst, kannst du eine beliebige Anzahl am gewählten Pokémon angelegter Energiekarten entfernen und an Arkani anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Inferno Onrush",
				fr: "Torrent d'enfer",
				de: "Inferno-Ansturm"
			},
			effect: {
				en: "Arcanine does 40 damage to itself.",
				fr: "Arcanin s'inflige 40 dégâts.",
				de: "Arkani fügt sich selbst 40 Schadenspunkte zu."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+30"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 277775
	}
}

export default card
