import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Mysterious Shard",
		fr: "Écharde mystérieuse",
		de: "Mysteriöser Splitter"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		en: "Attach Mysterious Shard to 1 of your Pokémon (excluding Pokémon-ex) that doesn't already have a Pokémon Tool attached to it. If the Pokémon Mysterious Shard is attached to is a Pokémon-ex, discard this card. Prevent all effects of attacks, including damage, done to the Pokémon that Mysterious Shard is attached to by your opponent's Pokémon-ex. Discard this card at the end of your opponent's next turn.",
		fr: "Attachez Écharde mystérieuse à 1 de vos Pokémon (Pokémon-ex exclus) qui ne possède pas déjà d'Outil Pokémon. Si le Pokémon auquel Écharde mystérieuse est attachée est un Pokémon-ex, défaussez cette carte.\n\nPrévenez tous les effets d'une attaque, dégâts inclus, infligés au Pokémon auquel Écharde mystérieuse est attachée par des Pokémon-ex de votre adversaire. Défaussez cette carte à la fin du prochain tour de votre adversaire.",
		de: "Verhindere alle Effekte von Angriffen, inklusive Schaden, die dem Pokémon, an das Mysteriöser Splitter angelegt ist, von gegnerischen Pokémon-ex zugefügt werden. Lege Mysteriöser Splitter am Ende des nächsten Zuges deines Gegners auf deinen Ablagestapel."
	},

	thirdParty: {
		cardmarket: 277162,
		tcgplayer: 87669
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
