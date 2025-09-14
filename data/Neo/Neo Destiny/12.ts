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
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				en: "Drive Off",
				fr: "Déroute",
				de: "Drive Off"
			},
			effect: {
				en: "As long as Light Arcanine is your Active Pokémon, once during your turn (before your attack), if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. This power can't be used while Light Arcanine is Asleep, Confused, or Paralyzed.",
				fr: "Tant qu'Arcanin lumineux est votre Pokémon Actif, une fois pendant votre tour (avant votre attaque), si votre adversaire a des Pokémon sur son Banc, il en choisit un et l'échange contre le Pokémon Défenseur. Ce pouvoir ne fonctionne pas si Arcanin lumineux est Endormi, Confus ou Paralysé.",
				de: "As long as Light Arcanine is your Active Pokémon, once during your turn (before your attack), if your opponent has any Benched Pokémon, he or she chooses 1 of them and switches it with the Defending Pokémon. This power can't be used while Light Arcanine is Asleep, Confused, or Paralayzed."
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
				de: "Gentle Flames"
			},

			effect: {
				en: "If the Defending Pokémon is a Baby Pokémon, this attack does 10 damage instead of 50. If the Defending Pokémon is a Basic Pokémon, this attack does 30 damage instead of 50.",
				fr: "Si le Pokémon Défenseur est un Bébé Pokémon, cette attaque inflige 10 dégâts au lieu de 50. Si le Pokémon Défenseur est un Pokémon de base, cette attaque inflige 30 dégâts au lieu de 50.",
				de: "If the Defending Pokémon is a Baby Pokémon, this attack does 10 damage instead of 50. If the Defending Pokémon is a Basic Pokémon, this attack does 30 damage instead of 50."
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

	description: {
		fr: "Ce légendaire Pokémon chinois est facilement reconnaissable de par sa grande crinière."
	},

	thirdParty: {
		cardmarket: 274664,
		tcgplayer: 86734
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		}
	]
}

export default card
