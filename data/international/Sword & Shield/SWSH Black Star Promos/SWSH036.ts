import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		'en-us': "Arctozolt",
		'fr-fr': "Galvagla",
		'es-es': "Arctozolt",
		'it-it': "Arctozolt",
		'pt-br': "Arctozolt",
		'de-de': "Lecryodon"
	},

	illustrator: "Hasuno",
	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Rare Fossil",
		'fr-fr': "Fossile Rare",
		'de-de': "Seltenes Fossil",
		'es-es': "Fósil Raro",
		'pt-br': "Fóssil Raro",
		'it-it': "Fossile Raro"
	},

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Biting Whirlpool",
			'fr-fr': "Siphon Cinglant",
			'es-es': "Torbellino Penetrante",
			'it-it': "Mulinello Raggelante",
			'pt-br': "Redemoinho Glacial",
			'de-de': "Beißender Strudel"
		},

		effect: {
			'en-us': "Whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 2 damage counters on that Pokémon.",
			'fr-fr': "Chaque fois que votre adversaire attache une carte Énergie de sa main à l'un de ses Pokémon, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
			'es-es': "Cada vez que tu rival una 1 carta de Energía de su mano a 1 de sus Pokémon, pon 2 contadores de daño en ese Pokémon.",
			'it-it': "Ogni volta che il tuo avversario assegna a uno dei suoi Pokémon una carta Energia dalla sua mano, metti due segnalini danno su quel Pokémon.",
			'pt-br': "Sempre que seu oponente ligar 1 carta de Energia da própria mão a 1 dos próprios Pokémon, coloque 2 contadores de dano naquele Pokémon.",
			'de-de': "Lege jedes Mal, wenn dein Gegner 1 Energiekarte aus seiner Hand an 1 seiner Pokémon anlegt, 2 Schadensmarken auf jenes Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Electro Ball",
			'fr-fr': "Boule Élek",
			'es-es': "Bola Voltio",
			'it-it': "Energisfera",
			'pt-br': "Bola Elétrica",
			'de-de': "Elektroball"
		},

		damage: 70,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	description: {
		'en-us': "The shaking of its freezing upper half is what generates its electricity. It has a hard time walking around."
	},

	stage: "Stage1",
	dexId: [881],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 487074
	}
}

export default card
