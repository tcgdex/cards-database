import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Gengar",
		'fr-fr': "Ectoplasma",
		'de-de': "Gengar"
	},

	illustrator: "Takashi Yamaguchi",
	rarity: "Rare PRIME",
	category: "Pokemon",
	set: Set,

	dexId: [94],

	hp: 130,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Haunter",
		'fr-fr': "Spectrum"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Catastrophe",
				'fr-fr': "Catastrophe",
				'de-de': "Katastrophe"
			},
			effect: {
				'en-us': "As long as Gengar is your Active Pokémon, if any of your opponent's Pokémon would be Knocked Out, put that Pokémon in the Lost Zone instead of discarding. (Discard all cards attached to that Pokémon.)",
				'fr-fr': "Tant qu’Ectoplasma est votre Pokémon Actif, si l’un des Pokémon de votre adversaire est mis K.O., placez ce Pokémon dans la Zone Perdue au lieu de le défausser. (Défaussez toutes les cartes attachées à ce Pokémon.)",
				'de-de': "Solange Gengar dein Aktives Pokémon ist, lege alle Pokémon deines Gegners, die kampfunfähig gemacht würden, nicht auf den Ablagestapel, sondern ins Nirgendwo. (Lege alle an dieses Pokémon angelegten Karten auf den jeweiligen Ablagestapel)."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hurl into Darkness",
				'fr-fr': "Jet dans les Ténèbres",
				'de-de': "Finsterniswurf"
			},
			effect: {
				'en-us': "Look at your opponent's hand and choose a number of Pokémon you find there up to the number of Psychic Energy attached to Gengar. Put the Pokémon you chose in the Lost Zone.",
				'fr-fr': "Regardez la main de votre adversaire et choisissez-y autant de Pokémon qu’il existe de cartes Énergie Psychic attachées à Ectoplasma. Placez les Pokémon que vous avez choisis dans la Zone Perdue.",
				'de-de': "Schau dir die Handkarten deines Gegners an und wähle eine Anzahl Pokémon-Karten, die du dort findest, die höchstens der Anzahl der an Gengar angeleten -Energien entspricht. Lege die gewählten Pokémon-Karten ins Nirgendwo."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Cursed Drop",
				'fr-fr': "Chute maudite",
				'de-de': "Verfluchter Fall"
			},
			effect: {
				'en-us': "Put 4 damage counters on your opponent's Pokémon in any way you like.",
				'fr-fr': "Placez 4 marqueurs de dégât sur les Pokémon de votre adversaire, comme bon vous semble.",
				'de-de': "Lege 4 Schadensmarken in beliebiger Verteilung auf die Pokémon deines Gegners."
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

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85679,
				cardmarket: 279624
			}
		},
	],

}

export default card
