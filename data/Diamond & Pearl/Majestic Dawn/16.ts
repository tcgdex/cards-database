import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Bronzong",
		fr: "Archéodong",
		de: "Bronzong"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		437,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Cursed Alloy",
				fr: "Allié maudit",
				de: "Fluchlegierung"
			},
			effect: {
				en: "As long as Bronzong is your Active Pokémon, put 1 damage counter on each of your opponent's Pokémon that has any Poké-Powers between turns.",
				fr: "Tant qu'Archéodong est votre Pokémon Actif, placez entre deux tours 1 marqueur de dégât sur chacun des Pokémon de votre adversaire possédant des Poké-Powers.",
				de: "Solange Bronzong dein Aktives Pokémon ist, lege zwischen den Zügen 1 Schadensmarke auf jedes Pokémon deines Gegners, das mindestens 1 Poké-Power hat."
			},
		},
	],

	attacks: [
		{

			name: {
				en: "Pain Amplifier",
				fr: "Amplificateur de douleur",
				de: "Schmerzverstärker"
			},
			effect: {
				en: "Put 1 damage counter on each of your opponent's Pokémon that already has damage counters on it.",
				fr: "Placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire possédant déjà des marqueurs de dégât.",
				de: "Lege 1 Schadensmarke auf jedes Pokémon deines Gegners, auf dem bereits mindestens 1 Schadensmarke liegt."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Coating",
				fr: "Mettre une couche",
				de: "Beschichtung"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Bronzong by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Archéodong par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der Bronzong durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fire",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278065
	}
}

export default card
