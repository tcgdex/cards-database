import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Honedge",
		fr: "Monorpale",
		es: "Honedge",
		it: "Honedge",
		pt: "Honedge",
		de: "Gramokles"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		679,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Final Hour",
				fr: "Dernière Heure",
				es: "Hora Final",
				it: "Ultime Volontà",
				pt: "Última Chance",
				de: "Letzte Stunde"
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is Knocked Out by damage from an opponent’s attack, put 3 damage counters on 1 of your opponent’s Pokémon.",
				fr: "Si ce Pokémon est votre Pokémon Actif et est mis K.O. par les dégâts d’une attaque de votre adversaire, placez 3 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
				es: "Si este Pokémon es tu Pokémon Activo y queda Fuera de Combate por el daño de un ataque de tu rival, pon 3 contadores de daño en 1 de los Pokémon de tu rival.",
				it: "Se questo Pokémon è il tuo Pokémon attivo e viene messo KO dai danni inflitti da un attacco del tuo avversario, metti tre segnalini danno su uno dei suoi Pokémon.",
				pt: "Se este Pokémon for o seu Pokémon Ativo e ele for Nocauteado pelo dano de um ataque do seu oponente, coloque 3 contadores de dano em 1 dos Pokémon do seu oponente.",
				de: "Wenn dieses Pokémon dein Aktives Pokémon ist und durch Schaden einer Attacke deines Gegners kampfunfähig wird, lege 3 Schadensmarken auf 1 Pokémon deines Gegners."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 355565,
		tcgplayer: 165697
	}
}

export default card
