import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Aegislash",
		fr: "Exagide",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		681,
	],
	hp: 140,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Doublade",
		fr: "Dimoclès",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Stance Change",
				fr: "Déclic Tactique",
			},
			effect: {
				en: "Once during your turn (before your attack), you may switch this Pokémon with an Aegislash in your hand. (Any cards attached to this Pokémon, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon.)",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez échanger ce Pokémon avec un Exagide dans votre main. (Les cartes attachées à ce Pokémon, les marqueurs de dégâts, les États Spéciaux, le nombre de tours en jeu, et tous les autres effets restent sur le nouveau Pokémon.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "King's Shield",
				fr: "Bouclier Royal",
			},
			effect: {
				en: "Prevent all damage done to this Pokémon by attacks during your opponent's next turn. This Pokémon can't use King's Shield during your next turn.",
				fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire. Ce Pokémon ne peut pas utiliser Bouclier Royal pendant votre prochain tour.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
