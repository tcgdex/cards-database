import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Abomasnow",
		fr: "Blizzaroi"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		460,
	],

	hp: 100,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Snover",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Glacier Snow",
				fr: "Neige de glacier"
			},
			effect: {
				en: "If Abomasnow is your Active Pokémon and is damaged by an opponent's attack (even if Abomasnow is Knocked Out), the Attacking Pokémon is now Asleep.",
				fr: "Si Blizzaroi est votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Blizzaroi est mis K.O), le Pokémon Attaquant est maintenant Endormi."
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
				en: "Heavy Blizzard",
				fr: "Gros blizzard"
			},
			effect: {
				en: "Flip a coin. If heads, put 1 damage counter on each of your opponent's Benched Pokémon.",
				fr: "Lancez une pièce. Si c'est face, placez 1 marqueur de dégât sur chaque Pokémon de Banc de votre adversaire."
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

	description: {
		fr: "C'est l'abominable homme des neiges. Il ensevelit les montagnes sous ses blizzards."
	}
}

export default card
