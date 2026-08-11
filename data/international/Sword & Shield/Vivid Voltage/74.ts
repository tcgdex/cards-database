import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [528],

	name: {
		'en-us': "Swoobat",
		'fr-fr': "Rhinolove",
		'es-es': "Swoobat",
		'it-it': "Swoobat",
		'pt-br': "Swoobat",
		'de-de': "Fletiamo"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Woobat",
		'fr-fr': "Chovsourir",
		'es-es': "Woobat",
		'it-it': "Woobat",
		'pt-br': "Woobat",
		'de-de': "Fleknoil"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Unaware",
				'fr-fr': "Inconscient",
				'es-es': "Ignorante",
				'it-it': "Imprudenza",
				'pt-br': "Ignorante",
				'de-de': "Unkenntnis"
			},
			effect: {
				'en-us': "Prevent all effects of attacks from your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)",
				'fr-fr': "Évitez tous les effets d'attaques infligés à ce Pokémon par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)",
				'es-es': "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos a este Pokémon.",
				'it-it': "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti a questo Pokémon.",
				'pt-br': "Previne todos os efeitos de ataques do seu oponente, exceto dano, causados a este Pokémon.",
				'de-de': "Verhindere alle Effekte von Attacken deines Gegners, außer Schaden, die diesem Pokémon zugefügt werden."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Heart Stamp",
				'fr-fr': "Crève-Cœur",
				'es-es': "Arrumaco",
				'it-it': "Cuorestampo",
				'pt-br': "Estampa de Coração",
				'de-de': "Herzstempel"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "Emitting powerful sound waves tires it out. Afterward, it won't be able to fly for a little while."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511790,
				tcgplayer: 226482
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511790,
				tcgplayer: 226482
			}
		},
	],
}

export default card
