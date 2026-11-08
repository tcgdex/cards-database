import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [881],
	set: Set,

	name: {
		'fr-fr': "Galvagla",
		'en-us': "Arctozolt",
		'es-es': "Arctozolt",
		'it-it': "Arctozolt",
		'pt-br': "Arctozolt",
		'de-de': "Lecryodon"
	},

	illustrator: "nagimiso",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	evolveFrom: {
		'fr-fr': "Fossile Rare",
		'en-us': "Rare Fossil"
	},

	abilities: [{
		type: "Ability",

		name: {
			'fr-fr': "Siphon Cinglant",
			'en-us': "Biting Whirlpool",
			'es-es': "Torbellino Penetrante",
			'it-it': "Mulinello Raggelante",
			'pt-br': "Redemoinho Glacial",
			'de-de': "Beißender Strudel"
		},

		effect: {
			'fr-fr': "Chaque fois que votre adversaire attache une carte Énergie de sa main à l'un de ses Pokémon, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
			'en-us': "Whenever your opponent attaches an Energy card from their hand to 1 of their Pokémon, put 2 damage counters on that Pokémon.",
			'es-es': "Cada vez que tu rival una 1 carta de Energía de su mano a 1 de sus Pokémon, pon 2 contadores de daño en ese Pokémon.",
			'it-it': "Ogni volta che il tuo avversario assegna a uno dei suoi Pokémon una carta Energia dalla sua mano, metti due segnalini danno su quel Pokémon.",
			'pt-br': "Sempre que seu oponente ligar 1 carta de Energia da própria mão a 1 dos próprios Pokémon, coloque 2 contadores de dano naquele Pokémon.",
			'de-de': "Lege jedes Mal, wenn dein Gegner 1 Energiekarte aus seiner Hand an 1 seiner Pokémon anlegt, 2 Schadensmarken auf jenes Pokémon."
		}
	}],

	attacks: [{
		name: {
			'fr-fr': "Boule Élek",
			'en-us': "Electro Ball",
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
	regulationMark: "D",
	stage: "Stage1",

	description: {
		'en-us': "The shaking of its freezing upper half is what generates its electricity. It has a hard time walking around."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539613,
				tcgplayer: 232405
			}
		},
	],
}

export default card
