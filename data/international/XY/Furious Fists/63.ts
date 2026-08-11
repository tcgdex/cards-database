import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Hawlucha",
		'fr-fr': "Brutalibré",
		'es-es': "Hawlucha",
		'it-it': "Hawlucha",
		'pt-br': "Hawlucha",
		'de-de': "Resladero"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		701,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Shining Spirit",
				'fr-fr': "Esprit Rayonnant",
				'es-es': "Espíritu Radiante",
				'it-it': "Spirito Lucente",
				'pt-br': "Espírito Brilhante",
				'de-de': "Strahlende Geisteskraft"
			},
			effect: {
				'en-us': "Damage from this Pokémon's attacks isn't affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts des attaques de ce Pokémon ne sont pas affectés par la Faiblesse ou la Résistance.",
				'es-es': "El daño de los ataques de este Pokémon no se ve afectado por Debilidad o Resistencia.",
				'it-it': "Il danno degli attacchi di questo Pokémon non è influenzato dalla debolezza o dalla resistenza.",
				'pt-br': "Os danos causados pelos ataques deste Pokémon não são afetados por Fraqueza ou Resistência.",
				'de-de': "Schaden der Angriffe dieses Pokémon wird durch Schwäche und Resistenz nicht verändert."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Flying Press",
				'fr-fr': "Flying Press",
				'es-es': "Plancha Voladora",
				'it-it': "Schiacciatuffo",
				'pt-br': "Aperto Voador",
				'de-de': "Flying Press"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon isn't a Pokémon-EX, this attack does nothing.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire n'est pas un Pokémon-EX, cette attaque ne fait rien.",
				'es-es': "Si el Pokémon Activo de tu rival no es un Pokémon-EX, este ataque no hace nada.",
				'it-it': "Se il Pokémon attivo del tuo avversario non è un Pokémon-EX, questo attacco non ha effetto.",
				'pt-br': "Se o Pokémon Ativo do seu oponente não for um Pokémon-EX, esse ataque não fará nada.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners kein Pokémon-EX ist, hat dieser Angriff keine Auswirkungen."
			},
			damage: 60,

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
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Although its body is small, its proficient fighting skills enable it to keep up with big bruisers like Machamp and Hariyama.",
	},

	thirdParty: {
		cardmarket: 281727,
		tcgplayer: 92240
	}
}

export default card
