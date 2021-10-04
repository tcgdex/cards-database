import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
		es: "Beedrill",
		it: "Beedrill",
		pt: "Beedrill",
		de: "Bibor"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
		es: "Kakuna",
		it: "Kakuna",
		pt: "Kakuna",
		de: "Kokuna"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Elusive Master",
				fr: "Maître Évasif",
				es: "Maestría de Evasión",
				it: "Maestro Sfuggente",
				pt: "Mestre Evasivo",
				de: "Meisterzug"
			},
			effect: {
				en: "Once during your turn, if this Pokémon is the last card in your hand, you may play it onto your Bench. If you do, draw 3 cards.",
				fr: "Une fois pendant votre tour, si ce Pokémon est votre dernière carte en main, vous pouvez le placer sur votre Banc. Dans ce cas, piochez 3 cartes.",
				es: "Una vez durante tu turno, si este Pokémon es la última carta en tu mano, puedes jugarlo a tu Banca. Si lo haces, roba 3 cartas.",
				it: "Una sola volta durante il tuo turno, se questo Pokémon è l’ultima carta che hai in mano, puoi giocarlo e metterlo in panchina. Se lo fai, pesca tre carte.",
				pt: "Uma vez durante o seu turno, se este Pokémon for a última carta na sua mão, você poderá colocá-lo no seu Banco. Se fizer isto, compre 3 cartas.",
				de: "Einmal während deines Zuges, wenn dieses Pokémon die letzte Karte auf deiner Hand ist, kannst du es auf deine Bank spielen. Wenn du das machst, ziehe 3 Karten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Sharp Sting",
				fr: "Piqûre Pointue",
				es: "Aguijón Afilado",
				it: "Tagliospina",
				pt: "Ferroada Afiada",
				de: "Scharfer Stich"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	regulationMark: "D",
	retreat: 0,

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage2",

	description: {
		en: "May appear in a swarm. Flies at violent speeds, all the while stabbing with the toxic stinger on its rear."
	}
}

export default card
