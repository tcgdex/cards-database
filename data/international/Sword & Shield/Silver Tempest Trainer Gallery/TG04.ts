import { Card } from "models/database/card"
import Set from "../Silver Tempest Trainer Gallery"

const card: Card = {
	dexId: [124],
	set: Set,

	name: {
		'en-us': "Jynx",
		'fr-fr': "Lippoutou",
		'es-es': "Jynx",
		'it-it': "Jynx",
		'pt-br': "Jynx",
		'de-de': "Rossana"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Selfish Lips",
			'fr-fr': "Lèvres Égoïstes",
			'es-es': "Labios Egoístas",
			'it-it': "Labbra Egoiste",
			'pt-br': "Lábios Egoístas",
			'de-de': "Ego-Lippen"
		},

		effect: {
			'en-us': "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon V, your opponent can't take any Prize cards for it.",
			'fr-fr': "Si ce Pokémon est mis K.O. par les dégâts d'une attaque d'un Pokémon-V de votre adversaire, ce dernier ne peut pas récupérer de carte Récompense pour ce Pokémon.",
			'es-es': "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon V de tu rival, tu rival no puede coger ninguna carta de Premio por ello.",
			'it-it': "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon-V del tuo avversario, il tuo avversario non può prendere carte Premio per effetto di quel KO.",
			'pt-br': "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon V do seu oponente, seu oponente não poderá pegar cartas de Prêmio por isto.",
			'de-de': "Wenn dieses Pokémon durch Schaden einer Attacke von Pokémon-V deines Gegners kampfunfähig wird, kann dein Gegner dafür keine Preiskarten nehmen."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Psychic Assault",
			'fr-fr': "Assaut Psychique",
			'es-es': "Asalto Psíquico",
			'it-it': "Psicoassalto",
			'pt-br': "Ataque Psíquico",
			'de-de': "Psycho-Ansturm"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each damage counter on your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en el Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano no Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 10 Schadenspunkte mehr zu."
		},

		damage: "10+"
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
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "In certain parts of Galar, Jynx was once feared and worshiped as the Queen of Ice.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682268,
				tcgplayer: 452018
			}
		},
	],
}

export default card
