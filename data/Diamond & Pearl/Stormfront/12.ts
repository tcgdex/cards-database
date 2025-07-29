import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
		de: "Rexblisar"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		460,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Snover",
		fr: "Blizzi",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Snow Veil",
				fr: "Voile neige",
				de: "Schneeschleier"
			},
			effect: {
				en: "As long as Abomasnow is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Tant que Blizzaroi est votre Pokémon Actif, tous dégâts infligés à vos Pokémon par une attaque de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Solange Rexblisar dein Aktives Pokémon ist, wird Schaden, der deinen Pokémon durch gegnerische Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
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
				en: "Snow Play",
				fr: "Jeux de neige",
				de: "Schneespiele"
			},
			effect: {
				en: "Does 20 damage to each of your opponent's Benched Pokémon, excluding Grass Pokémon and Water Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire, Pokémon Grass et Pokémon Water exclus. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners, außer - und -Pokémon, 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Below Zero",
				fr: "En dessous de zéro",
				de: "Unter Null"
			},
			effect: {
				en: "If Abomasnow evolved from Snover during this turn, the Defending Pokémon is now Paralyzed.",
				fr: "Si Blizzaroi a évolué de Blizzi lors de ce tour, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wenn Rexblisar sich in diesem Zug aus Shnebedeck entwickelt hat, ist das Verteidigende Pokémon jetzt gelähmt."
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

	retreat: 3,

	thirdParty: {
		cardmarket: 278310
	}
}

export default card
