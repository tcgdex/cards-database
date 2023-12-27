import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Galvagla",
		en: "Arctozolt",
		es: "Arctozolt",
		it: "Arctozolt",
		pt: "Arctozolt",
		de: "Lecryodon"
	},

	illustrator: "nagimiso",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Fossile Rare",
		en: "Rare Fossil"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Siphon Cinglant",
			en: "Biting Whirlpool",
			es: "Torbellino Penetrante",
			it: "Mulinello Raggelante",
			pt: "Redemoinho Glacial",
			de: "Beißender Strudel"
		},

		effect: {
			fr: "Chaque fois que votre adversaire attache une carte Énergie de sa main à l'un de ses Pokémon, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
			en: "Whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 2 damage counters on that Pokémon.",
			es: "Cada vez que tu rival una 1 carta de Energía de su mano a 1 de sus Pokémon, pon 2 contadores de daño en ese Pokémon.",
			it: "Ogni volta che il tuo avversario assegna a uno dei suoi Pokémon una carta Energia dalla sua mano, metti due segnalini danno su quel Pokémon.",
			pt: "Sempre que seu oponente ligar 1 carta de Energia da própria mão a 1 dos próprios Pokémon, coloque 2 contadores de dano naquele Pokémon.",
			de: "Lege jedes Mal, wenn dein Gegner 1 Energiekarte aus seiner Hand an 1 seiner Pokémon anlegt, 2 Schadensmarken auf jenes Pokémon."
		}
	}],

	attacks: [{
		name: {
			fr: "Boule Élek",
			en: "Electro Ball",
			es: "Bola Voltio",
			it: "Energisfera",
			pt: "Bola Elétrica",
			de: "Elektroball"
		},

		damage: 70,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "The shaking of its freezing upper half is what generates its electricity. It has a hard time walking around."
	}
}

export default card
