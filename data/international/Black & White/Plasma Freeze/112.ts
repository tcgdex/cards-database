import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Latias-EX",
		fr: "Latias-EX",
		es: "Latias-EX",
		it: "Latias-EX",
		pt: "Latias-EX",
		de: "Latias-EX"
	},
	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		380,
	],
	hp: 160,
	types: [
		"Dragon",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bright Down",
				fr: "Bouclier Lumineux",
				es: "Plumón Reluciente",
				it: "Splendipiume",
				pt: "Desabrilhantar",
				de: "Strahlender Schild"
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent’s Pokémon with Abilities.",
				fr: "Évitez tous les effets d'attaques (y compris les dégâts) infligés à ce Pokémon par les Pokémon de votre adversaire dotés de capacités spéciales.",
				es: "Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por los Pokémon con habilidades de tu rival.",
				it: "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon dai Pokémon con abilità del tuo avversario.",
				pt: "Impede todos os efeitos de ataques, inclusive danos, causados neste Pokémon pelo Pokémon do seu oponente com Habilidades.",
				de: "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon durch gegnerische Pokémon mit Fähigkeiten zugefügt werden."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fire",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Barrier Break",
				fr: "Brise Barrière",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Défenseur.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
