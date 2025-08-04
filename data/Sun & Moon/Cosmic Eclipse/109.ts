import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Vibrava",
		fr: "Vibraninf",
		es: "Vibrava",
		it: "Vibrava",
		pt: "Vibrava",
		de: "Vibrava"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		329,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Trapinch",
		fr: "Kraknoix",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Obnoxious Whirring",
				fr: "Odieux Bourdonnement",
				es: "Zumbido Fastidioso",
				it: "Ronzio Assillante",
				pt: "Zumbido Insuportável",
				de: "Lästiges Schwirren"
			},
			effect: {
				en: "Whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
				fr: "Chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets de cette carte sur ce Pokémon.",
				es: "Cada vez que tu rival juegue 1 carta de Partidario de su mano, evita todos los efectos de esa carta infligidos a este Pokémon.",
				it: "Ogni volta che il tuo avversario gioca una carta Aiuto che ha in mano, previeni tutti gli effetti di quella carta su questo Pokémon.",
				pt: "Sempre que seu oponente jogar 1 carta de Apoiador da própria mão, prevenirá todos os efeitos daquela carta causados a este Pokémon.",
				de: "Verhindere jedes Mal, wenn dein Gegner eine Unterstützerkarte aus seiner Hand spielt, alle Effekte jener Karte, die diesem Pokémon zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Flap",
				fr: "Battement",
				es: "Aleteo",
				it: "Alabattito",
				pt: "Asa",
				de: "Flattern"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 408194,
		tcgplayer: 201138
	}
}

export default card
