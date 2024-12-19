import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Duskull",
		fr: "Skélénox",
		de: "Zwirrlicht"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",

	set: Set,
	dexId: [
		355,
	],
	hp: 60,
	types: [
		"Psychic",
	],
	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Counting Song",
				fr: "Comptine",
				de: "Abzählreim"
			},
			effect: {
				en: "Put up to 3 damage counters on Duskull.  Then, put that many damage counters on the Defending Pokémon.",
				fr: "Placez 3 marqueurs de dégât sur Skélénox. Ensuite, placez autant de marqueurs de dégât sur le Pokémon Défenseur.",
				de: "Lege bis zu 3 Schadensmarken auf Zwirrlicht. Danach lege die gleiche Anzahl Schadensmarken auf das Verteidigende Pokémon."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				de: "Ramme"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Night Bind",
				fr: "Lien nocturne",
				de: "Nachtbindung"
			},
			effect: {
				en: "Flip a coin.  If heads, your opponent can't attach any Energy cards from his or her hand to the Active Pokémon during his or her next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas attacher de cartes Énergie de sa main aux Pokémon Actifs lors de son prochain tour.",
				de: "Wirf 1 Münze. Bei \"Kopf\" kann dein Gegner in seinem nächsten Zug keine Energiekarten von seiner Hand an seine Aktiven Pokémon anlegen."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
