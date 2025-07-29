import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Tyranitar",
		fr: "Tyranocif",
		de: "Despotar"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		248,
	],

	hp: 140,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Pupitar",
		fr: "Ymphect",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Darkness Drive",
				fr: "Conducteur obscurité",
				de: "Finsterer Antrieb"
			},
			effect: {
				en: "After your opponent's Pokémon uses a Poké-Power, you may search your discard pile for a basic Darkness Energy card and attach it to Tyranitar.",
				fr: "Une fois que le Pokémon de votre adversaire a utilisé un Poké-Power, vous pouvez chercher dans votre pile de défausse une Énergie de base Darkness et l'attacher à Tyranocif.",
				de: "Nachdem dein Gegner 1 Poké-Power benutzt hat, kannst du deinen Ablagestapel nach 1 -Basis-Energiekarte durchsuchen und an Despotar anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Grind",
				fr: "Écrase",
				de: "Zermahlen"
			},
			effect: {
				en: "Does 20 damage times the amount of Energy attached to Tyranitar.",
				fr: "Inflige 20 dégâts multipliés par le nombre d'Énergies attachées à Tyranocif.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl der an Despotar angelegten Energien zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				en: "Spinning Tail",
				fr: "Queue tournante",
				de: "Kreisender Schweif"
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt allen Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 278328
	}
}

export default card
