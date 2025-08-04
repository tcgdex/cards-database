import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Hawlucha",
		fr: "Brutalibré",
		es: "Hawlucha",
		it: "Hawlucha",
		pt: "Hawlucha",
		de: "Resladero"
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
				en: "Shining Spirit",
				fr: "Esprit Rayonnant",
				es: "Espíritu Radiante",
				it: "Spirito Lucente",
				pt: "Espírito Brilhante",
				de: "Strahlende Geisteskraft"
			},
			effect: {
				en: "Damage from this Pokémon's attacks isn't affected by Weakness or Resistance.",
				fr: "Les dégâts des attaques de ce Pokémon ne sont pas affectés par la Faiblesse ou la Résistance.",
				es: "El daño de los ataques de este Pokémon no se ve afectado por Debilidad o Resistencia.",
				it: "Il danno degli attacchi di questo Pokémon non è influenzato dalla debolezza o dalla resistenza.",
				pt: "Os danos causados pelos ataques deste Pokémon não são afetados por Fraqueza ou Resistência.",
				de: "Schaden der Angriffe dieses Pokémon wird durch Schwäche und Resistenz nicht verändert."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Flying Press",
				fr: "Flying Press",
				es: "Plancha Voladora",
				it: "Schiacciatuffo",
				pt: "Aperto Voador",
				de: "Flying Press"
			},
			effect: {
				en: "If your opponent's Active Pokémon isn't a Pokémon-EX, this attack does nothing.",
				fr: "Si le Pokémon Actif de votre adversaire n'est pas un Pokémon-EX, cette attaque ne fait rien.",
				es: "Si el Pokémon Activo de tu rival no es un Pokémon-EX, este ataque no hace nada.",
				it: "Se il Pokémon attivo del tuo avversario non è un Pokémon-EX, questo attacco non ha effetto.",
				pt: "Se o Pokémon Ativo do seu oponente não for um Pokémon-EX, esse ataque não fará nada.",
				de: "Wenn das Aktive Pokémon deines Gegners kein Pokémon-EX ist, hat dieser Angriff keine Auswirkungen."
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

	thirdParty: {
		cardmarket: 281727,
		tcgplayer: 92240
	}
}

export default card
