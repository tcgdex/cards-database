import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Darkrai",
		fr: "Darkrai",
		de: "Darkrai"
	},

	illustrator: "Shizurow",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [
		491,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		fr: "Niveau Sup",
	},

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dark Shadow",
				fr: "Ombre obscure",
				de: "Finsterer Schatten"
			},
			effect: {
				en: "Each basic Darkness Energy card attached to your Darkness Pokémon now has the effect \"If the Pokémon Darkness Energy is attached to attacks, the attack does 10 more damage to the Active Pokémon (before applying Weakness and Resistance).\" You can't use more than 1 Dark Shadow Poké-Body each turn.",
				fr: "Chaque carte Énergie Darkness attachée à vos Pokémon Darkness possède maintenant l'effet 'si le Pokémon auquel Énergie Obscurité est attachée attaque, cette attaque inflige 10 dégâts supplémentaires au Pokémon Actif (avant application de la Faiblesse et de la Résistance).' Vous ne pouvez pas utiliser plus d'1 Poké-Body Ombre obscure par tour.",
				de: "Jede -Basis-Energiekarte, die an deine -Pokémon angelegt ist, hat jetzt den Effekt: \"Wenn das Pokémon, an das Finsternis-Energie angelegt ist, angreift, fügt der Angriff den Aktiven Pokémon 10 weitere Schadenspunkte zu (bevor Schwäche und Resistenz verrechnet werden).\" Du kannst nicht mehr als 1 Finsterer Schatten Poké-Body pro Zug einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Endless Darkness",
				fr: "Obscurité infinie",
				de: "Unendliche Finsternis"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep. Flip 2 coins instead of 1 between turns. If either of them is tails, the Defending Pokémon is still Asleep. If both of them are tails, the Defending Pokémon is Knocked Out.",
				fr: "Le Pokémon Défenseur est maintenant Endormi. Lancez 2 pièces au lieu d'1 entre deux tours. Si l'une d'elles est pile, le Pokémon Défenseur reste Endormi. Si ce sont deux piles, le Pokémon Défenseur est mis K.O.",
				de: "Das Verteidigende Pokémon schläft jetzt. Wirf zwischen den Zügen 2 Münzen anstelle von 1 Münze. Wenn eine Münze \"Zahl\" gezeigt hat, schläft das Verteidigende Pokémon weiter. Wenn beide \"Zahl\" gezeigt haben, ist das Verteidigende Pokémon jetzt kampfunfähig."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 277905,
		tcgplayer: 84711
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
