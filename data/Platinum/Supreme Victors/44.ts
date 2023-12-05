import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Shedinja",
		fr: "Munja",
		de: "Ninjatom"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		292,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Nincada",
		fr: "Ningale",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Marvel Shell",
				fr: "Coquille merveilleuse",
				de: "Mirakelpanzer"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Shedinja by your opponent's Pokémon that has any Poké-Powers or Poké-Bodies.",
				fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Munja par les Pokémon de votre adversaire possédant des Poké-Powers ou des Poké-Bodies.",
				de: "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die Ninjatom von gegnerischen Pokémon, die mindestens 1 Poké-Power oder Poké-Body haben, zugefügt würden."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Spike Wound",
				fr: "Blessure pointue",
				de: "Stachelwunde"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon that has any damage counters on it. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire possédant des marqueurs de dégât. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wähle 1 Pokémon deines Gegners, auf dem bereits mindestens 1 Schadensmarke liegt. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
