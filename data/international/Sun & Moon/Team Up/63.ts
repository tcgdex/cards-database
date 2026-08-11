import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Muk",
		'fr-fr': "Grotadmorv",
		'es-es': "Muk",
		'it-it': "Muk",
		'pt-br': "Muk",
		'de-de': "Sleimok"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		89,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Grimer",
		'fr-fr': "Tadmorv",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Poison Sacs",
				'fr-fr': "Sacs de Poison",
				'es-es': "Sacos de Veneno",
				'it-it': "Sacche Velenose",
				'pt-br': "Bolsas de Veneno",
				'de-de': "Gifttaschen"
			},
			effect: {
				'en-us': "The Special Condition Poisoned is not removed when your opponent’s Pokémon evolve or devolve.",
				'fr-fr': "L’État Spécial Empoisonné n’est pas retiré lorsque le Pokémon de votre adversaire évolue ou dés-évolue.",
				'es-es': "La Condición Especial de Envenenado no se elimina cuando los Pokémon de tu rival evolucionan o involucionan.",
				'it-it': "La condizione speciale di avvelenato non viene rimossa quando il Pokémon del tuo avversario si evolve o se ne annulla l’evoluzione.",
				'pt-br': "A Condição Especial de Envenenado não será removida quando os Pokémon do seu oponente evoluírem ou suas evoluções forem revertidas.",
				'de-de': "Der Spezielle Zustand Vergiftung verliert seine Wirkung nicht, wenn Pokémon deines Gegners sich entwickeln oder rückentwicklen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Toxic Secretion",
				'fr-fr': "Sécrétion Toxique",
				'es-es': "Secreción Tóxica",
				'it-it': "Velenolinfa",
				'pt-br': "Secreção Tóxica",
				'de-de': "Giftiges Sekret"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 2 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 2 contadores de daño en vez de 1 en ese Pokémon entre turnos.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Tra un turno e l’altro, metti due segnalini danno invece di uno su quel Pokémon.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 2 contadores de dano ao invés de 1 naquele Pokémon entre as vezes de jogar.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Their food sources have decreased, and their numbers have declined sharply. Sludge ponds are being built to prevent their extinction.",
	},

	thirdParty: {
		cardmarket: 368993,
		tcgplayer: 183841
	}
}

export default card
