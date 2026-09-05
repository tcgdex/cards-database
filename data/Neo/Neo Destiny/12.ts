import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Arcanine",
		fr: "Arcanin lumineux",
		de: "Helles Arkani"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		59,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
		de: "Fukano"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Drive Off",
				fr: "Déroute",
				de: "Wegtreiben"
			},
			effect: {
				en: "As long as Light Arcanine is your Active Pokémon, once during your turn (before your attack), if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. This power can't be used while Light Arcanine is Asleep, Confused, or Paralyzed.",
				fr: "Tant qu'Arcanin lumineux est votre Pokémon Actif, une fois pendant votre tour (avant votre attaque), si votre adversaire a des Pokémon sur son Banc, il en choisit un et l'échange contre le Pokémon Défenseur. Ce pouvoir ne fonctionne pas si Arcanin lumineux est Endormi, Confus ou Paralysé.",
				de: "Solange Helles Arkani dein aktives Pokémon ist, und falls dein Gegner mindestens ein Pokémon auf der Bank hat, wählt dein Gegner einmal in deinem Zug (vor deinem Angriff) eines von ihnen und tauscht es mit dem verteidigenden Pokémon. Diese Fähigkeit kann nicht verwendet werden, falls Helles Arkani schläft, verwirrt oder gelähmt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],

			name: {
				en: "Gentle Flames",
				fr: "Douces flammes",
				de: "Sanfte Flammen"
			},

			effect: {
				en: "If the Defending Pokémon is a Baby Pokémon, this attack does 10 damage instead of 50. If the Defending Pokémon is a Basic Pokémon, this attack does 30 damage instead of 50.",
				fr: "Si le Pokémon Défenseur est un Bébé Pokémon, cette attaque inflige 10 dégâts au lieu de 50. Si le Pokémon Défenseur est un Pokémon de base, cette attaque inflige 30 dégâts au lieu de 50.",
				de: "Wenn das verteidigende Pokémon ein Baby-Pokémon ist, fügt dieser Angriff 10 Schadenspunkte statt 50 zu. Wenn das verteidigende Pokémon ein Basis-Pokémon ist, fügt dieser Angriff 30 Schadenspunkte statt 50 zu."
			},

			damage: 50
		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		en: "This legendary Chinese Pokémon is easily recognized by its large flowing mane.",
		fr: "Ce légendaire Pokémon chinois est facilement reconnaissable de par sa grande crinière.",
		de: "Dieses legendäre chinesische Pokémon kann leicht an seiner riesigen wuscheligen Mähne erkannt werden."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274664,
				tcgplayer: 86734
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274664,
				tcgplayer: 86734
			}
		}
	]
}

export default card
