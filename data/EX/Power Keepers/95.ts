import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Metagross ex",
		fr: "Metalosse ex"
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		376,
	],
	hp: 150,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Metang",
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magnetic Redraw",
				fr: "Repioche magnétique"
			},
			effect: {
				en: "Once during your turn (before your attack), if Metagross ex is your Active Pokémon, you may use this power. Each player shuffles his or her hand into his or her deck. Then, each player draws 4 cards. This power can't be used if Metagross ex is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Metalosse ex est votre Pokémon Actif, vous pouvez utiliser ce pouvoir. Chaque joueur mélange sa main à son deck. Ensuite, chaque joueur pioche 4 cartes. Ce pouvoir ne peut pas être utilisé si Metalosse ex est affecté par un État Spécial."
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
				en: "Scanblast",
				fr: "Explosion balayante"
			},
			effect: {
				en: "Does 70 damage to each of your opponent's Benched Pokémon that has the same name as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 70 dégâts à chacun des Pokémon de Banc de votre adversaire possédant le même nom que le Pokémon Défenseur. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 70,

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
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
