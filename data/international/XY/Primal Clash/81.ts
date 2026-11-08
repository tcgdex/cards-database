import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Medicham",
		'fr-fr': "Charmina",
		'es-es': "Medicham",
		'it-it': "Medicham",
		'pt-br': "Medicham",
		'de-de': "Meditalis"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		308,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Meditite",
		'fr-fr': "Méditikka",
		'es-es': "Meditite",
		'it-it': "Meditite",
		'pt-br': "Meditite",
		'de-de': "Meditie"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				'fr-fr': "Offensive Ω",
				'en-us': "Ω Barrage",
				'es-es': "{title}:",
				'it-it': "{title}:",
				'pt-br': "{title}:",
				'de-de': "{title}:"
			},
			effect: {
				'fr-fr': "Ce Pokémon peut attaquer deux fois par tour. (Si la première attaque met K.O. le Pokémon Actif de votre adversaire, vous pouvez encore attaquer après que votre adversaire a choisi un nouveau Pokémon Actif.)",
				'en-us': "This Pokémon may attack twice a turn. (If the first attack Knocks Out your opponent's Active Pokémon, you may attack again after your opponent chooses a new Active Pokémon.)",
				'es-es': "{title}: Este Pokémon puede atacar 2 veces por turno. (Si el primer ataque deja Fuera de Combate al Pokémon Activo de tu rival, puedes atacar otra vez después de que tu rival elija un nuevo Pokémon Activo).",
				'it-it': "{title}: Questo Pokémon può attaccare due volte durante lo stesso turno. Se il primo attacco mette KO il Pokémon attivo del tuo avversario, puoi attaccare di nuovo dopo che il tuo avversario avrà scelto il suo nuovo Pokémon attivo.",
				'pt-br': "{title}: Este Pokémon pode atacar duas vezes por turno. (Se o primeiro ataque Nocautear o Pokémon Ativo de seu oponente, você deve atacar de novo assim que seu oponente escolher um novo Pokémon Ativo).",
				'de-de': "{title}: Dieses Pokémon kann während eines Zuges zweimal angreifen. (Falls der erste Angriff das Aktive Pokémon deines Gegners kampfunfähig macht, kannst du erneut angreifen, nachdem dein Gegner ein neues Aktives Pokémon ausgewählt hat.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Calm Mind",
				'fr-fr': "Plénitude",
				'es-es': "Paz Mental",
				'it-it': "Calmamente",
				'pt-br': "Mente Calma",
				'de-de': "Gedankengut"
			},
			effect: {
				'en-us': "Heal 30 damage from this Pokémon.",
				'fr-fr': "Soignez 30 dégâts à ce Pokémon.",
				'es-es': "Cura 30 puntos de daño a este Pokémon.",
				'it-it': "Cura questo Pokémon da 30 danni.",
				'pt-br': "Cure 30 de danos deste Pokémon.",
				'de-de': "Heile 30 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Yoga Kick",
				'fr-fr': "Yoga Kick",
				'es-es': "Patada Yoga",
				'it-it': "Calcio Yoga",
				'pt-br': "Chute Ioga",
				'de-de': "Yogakick"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
				'it-it': "Il danno di questo attacco non è influenzato dalla debolezza o dalla resistenza.",
				'pt-br': "Os danos desse ataque não são afetados por Fraqueza ou Resistência.",
				'de-de': "Der Schaden dieses Angriffs wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: 30,

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
		'en-us': "Through yoga training, it gained the psychic power to predict its foe's next move.",
	},

	thirdParty: {
		cardmarket: 273611,
		tcgplayer: 95979
	}
}

export default card
