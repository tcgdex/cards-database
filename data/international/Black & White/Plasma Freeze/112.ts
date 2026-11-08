import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Latias-EX",
		'fr-fr': "Latias-EX",
		'es-es': "Latias-EX",
		'it-it': "Latias-EX",
		'pt-br': "Latias-EX",
		'de-de': "Latias-EX"
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
				'en-us': "Bright Down",
				'fr-fr': "Bouclier Lumineux",
				'es-es': "Plumón Reluciente",
				'it-it': "Splendipiume",
				'pt-br': "Desabrilhantar",
				'de-de': "Strahlender Schild"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to this Pokémon by your opponent’s Pokémon with Abilities.",
				'fr-fr': "Évitez tous les effets d'attaques (y compris les dégâts) infligés à ce Pokémon par les Pokémon de votre adversaire dotés de capacités spéciales.",
				'es-es': "Evita todos los efectos de los ataques, incluido el daño, infligidos a este Pokémon por los Pokémon con habilidades de tu rival.",
				'it-it': "Previeni tutti gli effetti degli attacchi, inclusi i danni, inflitti a questo Pokémon dai Pokémon con abilità del tuo avversario.",
				'pt-br': "Impede todos os efeitos de ataques, inclusive danos, causados neste Pokémon pelo Pokémon do seu oponente com Habilidades.",
				'de-de': "Verhindere alle Effekte von Angriffen, einschließlich Schaden, die diesem Pokémon durch gegnerische Pokémon mit Fähigkeiten zugefügt werden."
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
				'en-us': "Barrier Break",
				'fr-fr': "Brise Barrière",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Défenseur.",
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
