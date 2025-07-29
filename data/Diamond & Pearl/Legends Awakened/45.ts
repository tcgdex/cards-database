import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Vileplume",
		fr: "Rafflesia",
		de: "Giflor"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		45,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Gloom",
		fr: "Duflor",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Energy Reaction",
				fr: "Réaction Énergie",
				de: "Energie-Alllergie"
			},
			effect: {
				en: "Once during your turn (before your attack), when you attach a Grass or Psychic Energy card from your hand to Vileplume (excluding effects of attacks or Poké-Powers), you may use this power. If you attach a Grass Energy card, the Defending Pokémon is now Asleep. If you attach a Psychic Energy card, the Defending Pokémon is now Poisoned. This power can't be used if Vileplume is affected by a Special Condition.",
				fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous attachez une carte Énergie Grass ou Psychic de votre main à Rafflesia (les effets d'attaques ou des Poké-Powers exclus), vous pouvez utiliser ce pouvoir. Si vous attachez une carte Énergie Grass, le Pokémon Défenseur est maintenant Endormi. Si vous attachez une carte Énergie Psychic, le Pokémon Défenseur est maintenant Empoisonné. Ce pouvoir ne peut pas être utilisé si Rafflesia est affecté par un État Spécial.",
				de: "Einmal während deines Zuges (vor deinem Angriff), wenn du 1 - oder -Energiekarte von deiner Hand an Giflor anlegst (ausgenommen durch Effekte von Angriffen oder Poké-Power), kannst du diese Poké-Power benutzen. Wenn du 1 Pflanze-Energiekarte angelegt hast, schläft das Verteidigende Pokémon jetzt. Wenn du 1 Psycho-Energiekarte angelegt hast, ist das Verteidigende Pokémon jetzt vergiftet. Diese Poké-Power kann nicht benutzt werden, wenn Giflor von einem Speziellen Zustand betroffen ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Disturbing Pollen",
				fr: "Pollen dérangeant",
				de: "Störende Pollen"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent can't play any Trainer, Supporter, or Stadium cards from his or her hand during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Dresseur, Supporter ou Stade de sa main lors du prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Bei \"Kopf\" kann dein Gegner in seinem nächsten Zug keine Trainer-, Unterstützer- und Stadion-Karten von seiner Hand spielen."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],

	retreat: 2,

	description: {
		fr: "Ses pétales sont les plus grands du monde. Il marche en répandant un pollen extrêmement allergène."
	},

	thirdParty: {
		cardmarket: 278194
	}
}

export default card
