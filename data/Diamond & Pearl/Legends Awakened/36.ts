import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Regice",
		fr: "Regice",
		de: "Regice"
	},

	illustrator: "Kazuaki Aihara",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		378,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Regi Move",
				fr: "Regi-déplacement",
				de: "Regi-Bewegung"
			},
			effect: {
				en: "Once during your turn (before your attack), you may use this power. Discard 2 cards from your hand and choose 1 of your opponent's Active Pokémon that isn't an Evolved Pokémon. Then, your opponent switches that Pokémon with 1 of his or her Benched Pokémon. This power can't be used if Regice is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez utiliser ce pouvoir. Défaussez 2 cartes de votre main et choisissez 1 des Pokémon Actifs non Évolués de votre adversaire. Ensuite, votre adversaire échange ce Pokémon avec 1 de ses Pokémon de Banc. Ce pouvoir ne peut pas être utilisé si Regice est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du diese Poké-Power benutzen. Lege 2 Karten von deiner Hand auf deinen Ablagestapel und wähle 1 Aktives Pokémon deines Gegners, das kein entwickeltes Pokémon ist. Danach tauscht dein Gegner das gewählte Pokémon gegen 1 Pokémon auf seiner Bank aus. Diese Poké-Power kann nicht benutzt werden, wenn Regice von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Reflect",
				fr: "Reflet glacé",
				de: "Eisreflektor"
			},
			effect: {
				en: "If Regice was damaged by an attack during your opponent's last turn, the Defending Pokémon is now Paralyzed.",
				fr: "Si une attaque a infligé des dégâts à Regice lors du dernier tour de votre adversaire, le Pokémon Défenseur est maintenant Paralysé.",
				de: "Wenn Regice im letzten Zug deines Gegners durch einen Angriff Schaden zugefügt wurde, ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		fr: "Son corps est fait de glace datant de l'ère glaciaire. Il contrôle un air gelé de -200 °C."
	},

	thirdParty: {
		cardmarket: 278185,
		tcgplayer: 88657
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
