import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Glaceon-GX",
		fr: "Givrali-GX",
		de: "Glaziola-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		471,
	],
	hp: 200,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		de: "Evoli"
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Freezing Gaze",
				fr: "Regard Glacial",
				de: "Gefrierblick"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, your opponent's Pokémon-GX and Pokémon-EX in play, in their hand, and in their discard pile have no Abilities, except for Freezing Gaze.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, les Pokémon-GX et les Pokémon-EX de votre adversaire en jeu, dans sa main et dans sa pile de défausse n’ont pas de talent, à l’exception de Regard Glacial.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, haben die Pokémon-GX und Pokémon-EX deines Gegners im Spiel, auf seiner Hand und in seinem Ablagestapel keine Fähigkeiten, außer Gefrierblick."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Frost Bullet",
				fr: "Kunaï Givré",
				de: "Frostprojektil"
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 90,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Polar Spear-GX",
				fr: "Lance Polaire-GX",
				de: "Polarspeer-GX"
			},
			effect: {
				en: "This attack does 50 damage for each damage counter on your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 50 dégâts pour chaque marqueur de dégâts placé sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Diese Attacke fügt 50 Schadenspunkte mal der Anzahl der Schadensmarken auf dem Aktiven Pokémon deines Gegners zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
