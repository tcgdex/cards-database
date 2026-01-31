import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Jolteon Star",
		fr: "Voltali",
		de: "Blitza *"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		135,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Yellow Ray",
				fr: "Rayon jaune",
				de: "Gelber Strahl"
			},
			effect: {
				en: "Once during your turn, when you put Jolteon Star from your hand onto your Bench, you may put 1 damage counter on each Active Pokémon (both yours and your opponent's).",
				fr: "Une seule fois lors de votre tour, lorsque vous placez Voltali  de votre main sur votre Banc, vous pouvez placer 1 marqueur de dégât sur chaque Pokémon Actif (les vôtres et ceux de votre adversaire).",
				de: "Einmal während deines Zuges, wenn du Blitza ☆ von deiner Hand auf deine Bank legst, kannst du 1 Schadensmarke auf jedes Aktive Pokémon (deine und die deines Gegners) legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Agility",
				fr: "Hâte",
				de: "Agilität"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Jolteon Star during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Voltali  lors du prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Verhindere bei \"Kopf\" während des nächsten Zuges deines Gegners alle Effekte eines Angriffs (einschließlich Schaden), die Blitza ☆ zügefügt werden."
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
			type: "Metal",
			value: "-30"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 86351
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["jason-klaczynski"]
		},
		{
			type: "normal",
			stamp: ["tom-roos"]
		}
	]
}

export default card
