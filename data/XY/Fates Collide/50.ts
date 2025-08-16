import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Carbink",
		fr: "Strassie",
		es: "Carbink",
		it: "Carbink",
		pt: "Carbink",
		de: "Rocara"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		703,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Safeguard",
				fr: "Rune Protect",
				es: "Velo Sagrado",
				it: "Salvaguardia",
				pt: "Salvaguarda",
				de: "Bodyguard"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent's Pokémon-EX.",
				fr: "Évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon par les Pokémon-EX de votre adversaire.",
				es: "Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por los Pokémon-EX de tu rival.",
				it: "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon dai Pokémon-EX del tuo avversario.",
				pt: "Previne todos os efeitos de ataques, inclusive danos, causados neste Pokémon pelo Pokémon-EX do seu oponente.",
				de: "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon durch gegnerische Pokémon-EX zugefügt werden."
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
				en: "Power Gem",
				fr: "Rayon Gemme",
				es: "Joya de Luz",
				it: "Gemmoforza",
				pt: "Gema Poderosa",
				de: "Juwelenkraft"
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
		cardmarket: 289871,
		tcgplayer: 117810
	}
}

export default card
