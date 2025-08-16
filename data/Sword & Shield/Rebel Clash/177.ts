import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Ninetales V",
		fr: "Feunard V",
		es: "Ninetales V",
		it: "Ninetales V",
		pt: "Ninetales V",
		de: "Vulnona V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [38],
	set: Set,

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Nine-Tailed Shapeshifter",
				fr: "Polymorphe Multicaudal",
				es: "Transformación Nueve Colas",
				it: "Mutaforma a Nove Code",
				pt: "Metamorfo de Nove Caudas",
				de: "Neunschweifiger Gestaltwandler"
			},
			effect: {
				en: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
				fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
				es: "Elige 1 de los ataques del Pokémon Activo de tu rival y úsalo para este ataque.",
				it: "Scegli un attacco del Pokémon attivo del tuo avversario e usalo al posto di questo attacco.",
				pt: "Escolha 1 dos ataques do Pokémon Ativo do seu oponente e use-o como este ataque.",
				de: "Wähle 1 Attacke des Aktiven Pokémon deines Gegners und setze sie als diese Attacke ein."
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes",
				es: "Lanzallamas",
				it: "Lanciafiamme",
				pt: "Lança-chamas",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon.",
				it: "Scarta un'Energia da questo Pokémon.",
				pt: "Descarte 1 Energia deste Pokémon.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 200,
	types: ["Fire"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "Basic",
	suffix: "V"
}

export default card
