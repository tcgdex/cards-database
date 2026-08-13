import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Dark Feraligatr",
		fr: "Aligatueur obscur",
		de: "Dunkles Impergator"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		160,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Croconaw",
		fr: "Crocrodil obscur",
		de: "Tyracroc"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Scare",
				fr: "Frayeur",
				de: "Angst einjagen"
			},
			effect: {
				en: "As long as Dark Feraligatr is your Active Pokémon, all of your opponent's Baby Pokémon Powers stop working and your opponent's Baby Pokémon can't attack. This power stops working while Dark Feraligatr is Asleep, Confused, or Paralyzed.",
				fr: "Tant qu'Aligatueur obscur reste votre Pokémon Actif, tous les Pouvoirs des Bébés Pokémon de votre adversaire cessent de fonctionner et les Bébés Pokémon de votre adversaire ne peuvent pas attaquer. Ce pouvoir cesse de fonctionner si Aligatueur obscur est Endormi, Confus ou Paralysé.",
				de: "Solange Dunkles Impergator dein aktives Pokémon ist, funktioniert keine Power eines Baby Pokémon deines Gegners und die Baby-Pokémon deines Gegners können nicht angreifen. Diese Fähigkeit verliert ihre Wirkung, solange Dunkles Impergator schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Crushing Blow",
				fr: "Koud'dent",
				de: "Brechschlag"
			},
			effect: {
				en: "If the Defending Pokémon has any Energy cards attached to it, flip a coin. If heads, choose 1 of those cards and discard it.",
				fr: "Si des cartes Énergie sont attachées au Pokémon Défenseur, lancez une pièce. Si c'est face, choisissez-en une et obligez votre adversaire à s'en défausser.",
				de: "Wirf eine Münze, falls an das verteidigende Pokémon mindestens eine Energiekarte angelegt ist. Wähle bei „Kopf“ eine dieser Karten und lege sie auf den Ablagestapel deines Gegners."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		en: "Its powerful muscles allow it to move at a speed that belies its bulk.",
		fr: "Ses muscles surpuissants lui permettent de se déplacer très vite et ce, malgré sa forte corpulence.",
		de: "Dank seiner kraftvollen Muskeln kann es sich viel schneller fortbewegen, als man bei so einem dicken Bauch annimmt."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274657,
				tcgplayer: 84594
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274657,
				tcgplayer: 84594
			}
		}
	]
}

export default card
