import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Swoobat",
		fr: "Rhinolove",
		es: "Swoobat",
		it: "Swoobat",
		pt: "Swoobat",
		de: "Fletiamo"
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
		en: "Woobat",
		fr: "Chovsourir"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Unaware",
				fr: "Inconscient",
				es: "Ignorante",
				it: "Imprudenza",
				pt: "Ignorante",
				de: "Unkenntnis"
			},
			effect: {
				en: "Prevent all effects of attacks from your opponent’s Pokémon done to this Pokémon. (Damage is not an effect.)",
				fr: "Évitez tous les effets d’attaques infligés à ce Pokémon par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)",
				es: "Evita todos los efectos de los ataques de tu rival, excepto el daño, infligidos a este Pokémon.",
				it: "Previeni tutti gli effetti degli attacchi del tuo avversario, esclusi i danni, inflitti a questo Pokémon.",
				pt: "Previne todos os efeitos de ataques do seu oponente, exceto dano, causados a este Pokémon.",
				de: "Verhindere alle Effekte von Attacken deines Gegners, außer Schaden, die diesem Pokémon zugefügt werden."
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
				en: "Heart Stamp",
				fr: "Crève-Cœur",
				es: "Arrumaco",
				it: "Cuorestampo",
				pt: "Estampa de Coração",
				de: "Herzstempel"
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

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
