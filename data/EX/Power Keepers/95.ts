import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Metagross ex",
		fr: "Metalosse ex",
		de: "Metagross ex"
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
		fr: "Metang"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Magnetic Redraw",
				fr: "Repioche magnétique",
				de: "Magnetische Neuverteilung"
			},
			effect: {
				en: "Once during your turn (before your attack), if Metagross ex is your Active Pokémon, you may use this power. Each player shuffles his or her hand into his or her deck. Then, each player draws 4 cards. This power can't be used if Metagross ex is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), si Metalosse ex est votre Pokémon Actif, vous pouvez utiliser ce pouvoir. Chaque joueur mélange sa main à son deck. Ensuite, chaque joueur pioche 4 cartes. Ce pouvoir ne peut pas être utilisé si Metalosse ex est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff), wenn Metagross ex dein Aktives Pokémon ist, kannst du diese Poké-Power benutzen. Jeder Spieler mischt seine Hand zurück in sein Deck. Danach zieht jeder Spieler 4 Karten. Diese Poké-Power kann nicht benutzt werden, wenn Metagross ex von einem Speziellen Zustand betroffen ist."
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
				fr: "Explosion balayante",
				de: "Scanner-Schuss"
			},
			effect: {
				en: "Does 70 damage to each of your opponent's Benched Pokémon that has the same name as the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Inflige 70 dégâts à chacun des Pokémon de Banc de votre adversaire possédant le même nom que le Pokémon Défenseur. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners, das den gleichen Namen wie das Verteidigende Pokémon hat, 70 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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

	
	retreat: 4,

	thirdParty: {
		cardmarket: 277401,
		tcgplayer: 87347
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

