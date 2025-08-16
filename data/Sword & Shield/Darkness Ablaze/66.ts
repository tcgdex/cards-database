import { Card } from '../../../interfaces'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [881],

	name: {
		en: "Arctozolt",
		fr: "Galvagla",
		es: "Arctozolt",
		it: "Arctozolt",
		pt: "Arctozolt",
		de: "Lecryodon"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,
	hp: 130,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Rare Fossil",
		fr: "Fossile Rare",
		es: "Fósil Raro",
		it: "Fossile Raro",
		pt: "Fóssil Raro",
		de: "Seltenes Fossil"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Biting Whirlpool",
				fr: "Siphon Cinglant",
				es: "Torbellino Penetrante",
				it: "Mulinello Raggelante",
				pt: "Redemoinho Glacial",
				de: "Beißender Strudel"
			},
			effect: {
				en: "Whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 2 damage counters on that Pokémon.",
				fr: "Chaque fois que votre adversaire attache une carte Énergie de sa main à l'un de ses Pokémon, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
				es: "Cada vez que tu rival una 1 carta de Energía de su mano a 1 de sus Pokémon, pon 2 contadores de daño en ese Pokémon.",
				it: "Ogni volta che il tuo avversario assegna a uno dei suoi Pokémon una carta Energia dalla sua mano, metti due segnalini danno su quel Pokémon.",
				pt: "Sempre que seu oponente ligar 1 carta de Energia da própria mão a 1 dos próprios Pokémon, coloque 2 contadores de dano naquele Pokémon.",
				de: "Lege jedes Mal, wenn dein Gegner 1 Energiekarte aus seiner Hand an 1 seiner Pokémon anlegt, 2 Schadensmarken auf jenes Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electro Ball",
				fr: "Boule Élek",
				es: "Bola Voltio",
				it: "Energisfera",
				pt: "Bola Elétrica",
				de: "Elektroball"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "The shaking of its freezing upper half is what generates its electricity. It has a hard time walking around."
	},

	thirdParty: {
		cardmarket: 483209,
		tcgplayer: 219434
	}
}

export default card
