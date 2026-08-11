import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Shedinja",
		'fr-fr': "Munja",
		'de-de': "Ninjatom",
		'it-it': "Shedinja",
		'es-es': "Shedinja",
		'pt-br': "Shedinja",
		'es-mx': "Shedinja"
	},

	illustrator: "Tetsu Kayama",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Nincada",
		'fr-fr': "Ningale",
		'de-de': "Nincada",
		'it-it': "Nincada",
		'es-es': "Nincada",
		'pt-br': "Nincada",
		'es-mx': "Nincada"
	},
	stage: "Stage1",
	dexId: [292],

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Fragile Husk",
			'fr-fr': "Enveloppe Fragile",
			'de-de': "Brüchige Hülle",
			'it-it': "Involucro Fragile",
			'es-es': "Caparazón Frágil",
			'pt-br': "Casca Fraca",
			'es-mx': "Caparazón Frágil"
		},

		effect: {
			'en-us': "If this Pokémon is Knocked Out by damage from an attack from your opponent's Pokémon ex, your opponent can't take any Prize cards for it.",
			'fr-fr': "Si ce Pokémon est mis K.O. par les dégâts d'une attaque de l'un des Pokémon-ex de votre adversaire, votre adversaire ne peut pas récupérer de carte Récompense pour ce Pokémon.",
			'de-de': "Wenn dieses Pokémon durch Schaden einer Attacke von Pokémon-ex deines Gegners kampfunfähig wird, kann dein Gegner dafür keine Preiskarten nehmen.",
			'it-it': "Se questo Pokémon viene messo KO dai danni inflitti da un attacco di un Pokémon-ex del tuo avversario, il tuo avversario non può prendere carte Premio per effetto di quel KO.",
			'es-es': "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon ex de tu rival, tu rival no puede coger ninguna carta de Premio por ello.",
			'pt-br': "Se este Pokémon for Nocauteado pelo dano de um ataque dos Pokémon ex do seu oponente, seu oponente não poderá pegar cartas de Prêmio por isso.",
			'es-mx': "Si este Pokémon queda Fuera de Combate por el daño de un ataque de los Pokémon ex de tu rival, tu rival no puede tomar ninguna carta de Premio por ello."
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Damage Beat",
			'fr-fr': "Rouste Ravageuse",
			'de-de': "Heftige Prügel",
			'it-it': "Battidanni",
			'es-es': "Toque Dañino",
			'pt-br': "Pancada Destruidora",
			'es-mx': "Golpeteo Dañino"
		},

		effect: {
			'en-us': "This attack does 20 damage for each damage counter on your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'de-de': "Diese Attacke fügt für jede Schadensmarke auf dem Aktiven Pokémon deines Gegners 20 Schadenspunkte zu.",
			'it-it': "Questo attacco infligge 20 danni per ogni segnalino danno presente sul Pokémon attivo del tuo avversario.",
			'es-es': "Este ataque hace 20 puntos de daño por cada contador de daño en el Pokémon Activo de tu rival.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada contador de dano no Pokémon Ativo do seu oponente.",
			'es-mx': "Este ataque hace 20 puntos de daño por cada contador de daño en el Pokémon Activo de tu rival."
		},

		damage: "20×"
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
	regulationMark: "I",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 851215,
				tcgplayer: 654483
			}
		},
	],
}

export default card
