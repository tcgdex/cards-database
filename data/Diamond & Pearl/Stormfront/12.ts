import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Abomasnow",
		fr: "Abomasnow",
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
			},
			effect: {
				en: "As long as Abomasnow is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Tant que Blizzaroi est votre Pokémon Actif, tous dégâts infligés à vos Pokémon par une attaque de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
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
			},
			effect: {
				en: "Does 20 damage to each of your opponent's Benched Pokémon, excluding Grass Pokémon and Water Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire, Pokémon Grass et Pokémon Water exclus. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc。）",
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
			},
			effect: {
				en: "If Abomasnow evolved from Snover during this turn, the Defending Pokémon is now Paralyzed.",
				fr: "Si Blizzaroi a évolué de Blizzi lors de ce tour, le Pokémon Défenseur est maintenant Paralysé.",
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



}

export default card
