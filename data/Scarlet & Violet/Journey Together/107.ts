import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Magearna",
		fr: "Magearna",
		es: "Magearna",
		de: "Magearna",
		it: "Magearna",
		pt: "Magearna",
		'es-mx': "Magearna"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Auto Heal",
			fr: "Auto-Soin",
			es: "Autocuración",
			de: "Automatische Heilung",
			it: "Autocura",
			pt: "Cura Autômata",
			'es-mx': "Autocuración"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, whenever you attach an Energy card from your hand to 1 of your Pokémon, heal 90 damage from that Pokémon.",
			fr: "Tant que ce Pokémon est sur le Poste Actif, chaque fois que vous attachez une carte Énergie de votre main à l'un de vos Pokémon, soignez 90 dégâts de ce Pokémon-là.",
			es: "Mientras este Pokémon esté en el Puesto Activo, cada vez que unas una carta de Energía de tu mano a uno de tus Pokémon, cura 90 puntos de daño a ese Pokémon.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, heile jedes Mal, wenn du 1 Energiekarte aus deiner Hand an 1 deiner Pokémon anlegst, 90 Schadenspunkte bei jenem Pokémon.",
			it: "Fintanto che questo Pokémon è in posizione attiva, ogni volta che assegni a uno dei tuoi Pokémon una carta Energia dalla tua mano, cura quel Pokémon da 90 danni.",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, sempre que você ligar uma carta de Energia da sua mão a 1 dos seus Pokémon, cure 90 pontos de dano daquele Pokémon.",
			'es-mx': "Mientras este Pokémon esté en el Puesto Activo, cada vez que unas 1 carta de Energía de tu mano a 1 de tus Pokémon, cura 90 puntos de daño a ese Pokémon."
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spike Draw",
			fr: "Pique-Pioche",
			es: "Robo Pico",
			de: "Stachelzug",
			it: "Battipesca",
			pt: "Comprada Espinhosa",
			'es-mx': "Robo Punzante"
		},

		effect: {
			en: "Draw 2 cards.",
			fr: "Piochez 2 cartes.",
			es: "Roba 2 cartas.",
			de: "Ziehe 2 Karten.",
			it: "Pesca due carte.",
			pt: "Compre 2 cartas.",
			'es-mx': "Roba 2 cartas."
		},

		damage: 20
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": true,
		"normal": false
		"reverse": true,
		"wPromo": false,
		}
}

export default card
