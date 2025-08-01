import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Metagross",
		fr: "Metalosse",
		de: "Metagross"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		376,
	],

	hp: 130,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Metang",
		fr: "Metang",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Gravitation",
				fr: "Gravitation",
				de: "Schwerkraft"
			},
			effect: {
				en: "Each Pokémon in play (both yours and your opponent's) gets -20 HP. No more than 20 HP can be reduced by all Gravitation Poké-Bodies.",
				fr: "Retirez 20 PV à chaque Pokémon en jeu (les vôtres et ceux de votre adversaire). Les Poké-Bodies Gravitation ne peuvent pas retirer plus de 20 PV.",
				de: "Jedes Pokémon im Spiel (deine und die deines Gegners) erhält -20 KP. Durch alle Schwerkraft Poke-Body können so nicht mehr als 20 KP abgezogen werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Geo Impact",
				fr: "Géo-impact",
				de: "Geo-Aufprall"
			},
			effect: {
				en: "If you have a Stadium card in play, this attack does 20 damage to each of your opponent's Benched Pokémon that is the same type as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si vous avez une carte Stade en jeu, cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire étant du même type que le Pokémon Défenseur. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wenn du 1 Stadion-Karte im Spiel hast, fügt dieser Angriff jedem Pokémon auf der Bank deines Gegners, das denselben Typ wie das Verteidigende Pokémon hat, 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278698
	}
}

export default card
