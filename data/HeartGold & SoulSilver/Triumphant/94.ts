import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Gengar",
		fr: "Ectoplasma",
		de: "Gengar"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		94,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Catastrophe",
				fr: "Catastrophe",
				de: "Katastrophe"
			},
			effect: {
				en: "As long as Gengar is your Active Pokémon, if any of your opponent’s Pokémon would be Knocked Out, put that Pokémon in the Lost Zone instead of discarding it. (Discard all cards attached to that Pokémon.)",
				fr: "Tant qu’Ectoplasma est votre Pokémon Actif, si l’un des Pokémon de votre adversaire est mis K.O., placez ce Pokémon dans la Zone Perdue au lieu de le défausser. (Défaussez toutes les cartes attachées à ce Pokémon.)",
				de: "Solange Gengar dein Aktives Pokémon ist, lege alle Pokémon deines Gegners, die kampfunfähig gemacht würden, nicht auf den Ablagestapel, sondern ins Nirgendwo. (Lege alle an dieses Pokémon angelegten Karten auf den jeweiligen Ablagestapel)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hurl into Darkness",
				fr: "Jet dans les Ténèbres",
				de: "Finsterniswurf"
			},
			effect: {
				en: "Look at your opponent’s hand and choose a number of Pokémon you find there up to the number of Psychic Energy attached to Gengar. Put the Pokémon you chose in the Lost Zone.",
				fr: "Regardez la main de votre adversaire et choisissez-y autant de Pokémon qu’il existe de cartes Énergie Psychic attachées à Ectoplasma. Placez les Pokémon que vous avez choisis dans la Zone Perdue.",
				de: "Schau dir die Handkarten deines Gegners an und wähle eine Anzahl Pokémon-Karten, die du dort findest, die höchstens der Anzahl der an Gengar angeleten -Energien entspricht. Lege die gewählten Pokémon-Karten ins Nirgendwo."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Cursed Drop",
				fr: "Chute maudite",
				de: "Verfluchter Fall"
			},
			effect: {
				en: "Put 4 damage counters on your opponent’s Pokémon in any way you like.",
				fr: "Placez 4 marqueurs de dégât sur les Pokémon de votre adversaire, comme bon vous semble.",
				de: "Lege 4 Schadensmarken in beliebiger Verteilung auf die Pokémon deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 0,
	suffix: "Prime",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card
