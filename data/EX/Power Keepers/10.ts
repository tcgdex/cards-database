import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Kabutops",
		fr: "Kabutops",
		de: "Kabutops"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		141,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Kabuto",
		fr: "Kabuto"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Primal Stare",
				fr: "Regard primitif",
				de: "Ursprüngliches Starren"
			},
			effect: {
				en: "As long as Kabutops is your Active Pokémon, your opponent can't play any Basic Pokémon or Evolution cards from his or her hand to evolve his or her Active Pokémon.",
				fr: "Tant que Kabutops est votre Pokémon Actif, votre adversaire ne peut pas jouer de cartes Pokémon de base ou de cartes Évolution de sa main pour faire évoluer son Pokémon Actif.",
				de: "Solange Kabutops dein Aktives Pokémon ist, kann dein Gegner keine Basis-Pokémon- oder Evolutionskarten von seiner Hand spielen, um sein Aktives Pokémon zu entwickeln."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Luring Antenna",
				fr: "Antenne trompeuse",
				de: "Lockende Fühler"
			},
			effect: {
				en: "Before doing damage, you may choose 1 of your opponent's Benched Pokémon and switch it with 1 of the Defending Pokémon. If you do, this attack does 20 damage to the new Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.",
				fr: "Avant d'infliger des dégâts, vous pouvez choisir 1 des Pokémon de Banc de votre adversaire et l'échanger avec 1 des Pokémon Défenseurs. Cette attaque inflige alors 20 dégâts au nouveau Pokémon Défenseur. Votre adversaire choisit le Pokémon Défenseur à échanger.",
				de: "Bevor der Schaden zugefügt wird, kannst du 1 der Pokémon auf der Bank deines Gegners gegen 1 der Verteidigenden Pokémon austauschen. Wenn du das machst, fügt dieser Angriff dem neuen Verteidigenden Pokémon 20 Schadenspunkte zu. Dein Gegner wählt das Verteidigende Pokémon, das ausgetauscht werden soll."
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Blinding Scythe",
				fr: "Pulvérisation aveuglante",
				de: "Blendende Sense"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 277316,
		tcgplayer: 86398
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
