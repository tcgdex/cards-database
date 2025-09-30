import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Honchkrow",
		fr: "Corboss",
		de: "Kramshef"
	},

	illustrator: "Kazuyuki Kano",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		430,
	],

	hp: 90,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Murkrow",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Dark Genes",
				fr: "Gènes obscurs",
				de: "Dunkle Gene"
			},
			effect: {
				en: "As long as Honchkrow has the Energy necessary to use its attack, each of your Murkrow can use Honchkrow's attack as its own without the necessary Energy to use that attack.",
				fr: "Tant que Corboss possède l'Énergie nécessaire pour utiliser cette attaque, chacun de vos Cornèbres peut utiliser l'attaque de Corboss comme si c'était la sienne sans l'Énergie nécessaire pour utiliser cette attaque.",
				de: "Solange an Kramshef die benötigte Energie angelegt ist, um seinen Angriff einzusetzen, kann jedes deiner Kramurx den Angriff von Kramshef als seinen eigenen einsetzen, auch wenn nicht die dafür benötigte Energie an das Kramurx angelegt ist."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Dark Wing Flaps",
				fr: "Battements d'ailes obscurs",
				de: "Dunkles Flügelschlagen"
			},
			effect: {
				en: "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck.",
				fr: "Choisissez sans regarder 1 carte de la main de votre adversaire. Regardez-la et demandez à votre adversaire de la mélanger à son deck.",
				de: "Wähle 1 Karte von der Hand deines Gegners (ohne sie vorher anzusehen). Schau dir die Karte an, danach mischt dein Gegner sie in sein Deck."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		fr: ": Ce Pokémon nocturne évolue en grandes volées escortées par des Cornèbre."
	},

	thirdParty: {
		cardmarket: 277639,
		tcgplayer: 86159
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "reverse",
		}
	]
}

export default card
