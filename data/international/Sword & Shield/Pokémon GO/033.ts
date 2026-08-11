import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [178],
	set: Set,

	name: {
		'en-us': "Xatu",
		'fr-fr': "Xatu",
		'es-es': "Xatu",
		'it-it': "Xatu",
		'pt-br': "Xatu",
		'de-de': "Xatu"
	},

	illustrator: "Hataya",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Natu",
		'fr-fr': "Natu",
		'es-es': "Natu",
		'it-it': "Natu",
		'pt-br': "Natu",
		'de-de': "Natu"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Pinpoint Wave",
			'fr-fr': "Onde Ciblée",
			'es-es': "Onda Precisa",
			'it-it': "Onda di Precisione",
			'pt-br': "Onda Localizadora",
			'de-de': "Präzisionswelle"
		},

		effect: {
			'en-us': "This attack does 90 damage to 1 of your opponent's Pokémon V. This damage isn't affected by Weakness or Resistance.",
			'fr-fr': "Cette attaque inflige 90 dégâts à l'un des Pokémon-V de votre adversaire. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
			'es-es': "Este ataque hace 90 puntos de daño a 1 de los Pokémon V de tu rival. Este daño no se ve afectado por Debilidad o Resistencia.",
			'it-it': "Questo attacco infligge 90 danni a uno dei Pokémon-V del tuo avversario. Questi danni non sono influenzati dalla debolezza o dalla resistenza.",
			'pt-br': "Este ataque causa 90 pontos de dano a 1 dos Pokémon V do seu oponente. Este dano não é afetado por Fraqueza ou Resistência.",
			'de-de': "Diese Attacke fügt 1 Pokémon-V deines Gegners 90 Schadenspunkte zu. Dieser Schaden wird durch Schwäche und Resistenz nicht verändert."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Mind Bend",
			'fr-fr': "Contrôleur d'Esprit",
			'es-es': "Fusión Mental",
			'it-it': "Fusione Mentale",
			'pt-br': "Dobra Mentes",
			'de-de': "Gedankenverbiegung"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 0,
	regulationMark: "F",


	description: {
		'en-us': "They say that it stays still and quiet because it is seeing both the past and future at the same time.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 665663,
				tcgplayer: 276969
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 665663,
				tcgplayer: 276969
			}
		},
	],
}

export default card
