import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Ditto",
		'fr-fr': "Metamorph",
		'de-de': "Ditto"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		132,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Ditto DNA",
				'fr-fr': "ADN Metamorph",
				'de-de': "Ditto-DNA"
			},
			effect: {
				'en-us': "As long as Ditto is your Active Pokémon, its maximum HP is the same as your opponent's Active Pokémon. Ditto can use the attacks of that Pokémon as its own. (You still need the necessary Energy to use each attack.) If that Pokémon is no longer your opponent's Active Pokémon, choose 1 of your opponent's Active Pokémon for Ditto to copy.",
				'fr-fr': "Tant que Metamorph est votre Pokémon Actif, son maximum de PV est le même que celui du Pokémon Actif de votre adversaire. Metamorph peut utiliser les attaques de ce Pokémon comme si elles étaient les siennes. (Vous devez toujours utiliser l'Énergie nécessaire pour utiliser chaque attaque.) Si ce Pokémon n'est plus le Pokémon Actif de votre adversaire, choisissez 1 des Pokémon Actifs de votre adversaire. Metamorph copie ce Pokémon.",
				'de-de': "Solange Ditto dein Aktives Pokémon ist, entsprechen seine Grund-KP den Grund-KP des Aktiven Pokémon deines Gegners. Ditto kann die Angriffe des betreffenden Pokémon als seine eigenen einsetzen. (Die für den jeweiligen Angriff notwendige Energie ist trotzdem erforderlich.) Sobald das betreffende Pokémon nicht mehr das Aktive Pokémon deines Gegners ist, wähle 1 Aktives Pokémon deines Gegners, das Ditto jetzt kopiert."
			},
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has the ability to reconstitute its entire cellular structure to transform into whatever it sees.",
		'fr-fr': "Il a la capacité de modifier sa structure cellulaire pour prendre l'apparence de ce qu'il voit."
	},

	thirdParty: {
		cardmarket: 278176,
		tcgplayer: 84843
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["tsubasa-nakamura"]
		}
	]
}

export default card
