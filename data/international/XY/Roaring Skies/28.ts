import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Natu",
		'fr-fr': "Natu",
		'es-es': "Natu",
		'it-it': "Natu",
		'pt-br': "Natu",
		'de-de': "Natu"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		177,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				'fr-fr': "Plus Δ",
				'en-us': "Δ Plus",
				'es-es': "{title}:",
				'it-it': "{title}:",
				'pt-br': "{title}:",
				'de-de': "{title}:"
			},
			effect: {
				'fr-fr': "Si le Pokémon de votre adversaire est mis K.O. par les dégâts d'une attaque de ce Pokémon, récupérez une carte Récompense supplémentaire.",
				'en-us': "If your opponent's Pokémon is Knocked Out by damage from an attack of this Pokémon, take 1 more Prize card.",
				'es-es': "{title}: Si el Pokémon de tu rival queda Fuera de Combate por el daño de un ataque de este Pokémon, coge 1 carta de Premio más.",
				'it-it': "{title}: Se un Pokémon del tuo avversario viene messo KO dai danni di un attacco di questo Pokémon, prendi una carta Premio in più.",
				'pt-br': "{title}: Se o Pokémon de seu oponente for Nocauteado por danos causados por um ataque deste Pokémon, pegue mais 1 card de Prêmio.",
				'de-de': "{title}: Wenn das Pokémon deines Gegners durch Schaden eines Angriffs dieses Pokémon kampfunfähig wird, nimm 1 zusätzliche Preiskarte."
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
				'en-us': "Psywave",
				'fr-fr': "Vague Psy",
				'es-es': "Psicoonda",
				'it-it': "Psiconda",
				'pt-br': "Onda Psíquica",
				'de-de': "Psywelle"
			},
			effect: {
				'en-us': "This attack does 10 damage times the amount of Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts multipliés par le nombre d'Énergies attachées au Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 10 puntos de daño por cada Energía unida al Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 10 danni per ogni Energia assegnata al Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 10 de danos adicionais vezes a quantidade de Energia ligada ao Pokémon Ativo do seu oponente.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl der an das Aktive Pokémon deines Gegners angelegten Energien zu."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It usually forages for food on the ground but may, on rare occasions, hop onto branches to peck at shoots.",
	},

	thirdParty: {
		cardmarket: 282695,
		tcgplayer: 98064
	}
}

export default card
