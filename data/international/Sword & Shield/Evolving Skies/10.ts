import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Lilligant",
		'fr-fr': "Fragilady",
		'es-es': "Lilligant",
		'it-it': "Lilligant",
		'pt-br': "Lilligant",
		'de-de': "Dressella"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",
	illustrator: "Kagemaru Himeno",

	attacks: [{
		name: {
			'en-us': "Dizzying Flower",
			'fr-fr': "Fleur Vertigineuse",
			'es-es': "Flor Mareante",
			'it-it': "Stordifiore",
			'pt-br': "Dizzying Flower",
			'de-de': "Schwindelerregende Blume"
		},

		effect: {
			'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep. If tails, your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Endormi. Si c'est pile, le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Dormido. Si sale cruz, el Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene addormentato. Se esce croce, il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "Flip a coin. If heads, your opponent's Active Pokémon is now Asleep. If tails, your opponent's Active Pokémon is now Confused.",
			'de-de': "Wirf 1 Münze. Bei Kopf schläft das Aktive Pokémon deines Gegners jetzt. Bei Zahl ist das Aktive Pokémon deines Gegners jetzt verwirrt."
		},

		damage: 70,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,

	evolveFrom: {
		'en-us': "Petilil",
		'fr-fr': "Chlorobule",
		'es-es': "Petilil",
		'it-it': "Petilil",
		'pt-br': "Petilil",
		'de-de': "Lilminip"
	},

	description: {
		'en-us': "It's well liked by other Pokémon because of its beauty. The flower on its head needs constant care, or it will soon wither and rot."
	},

	dexId: [549],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574034,
				tcgplayer: 246824
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574034,
				tcgplayer: 246824
			}
		},
	],
}

export default card
