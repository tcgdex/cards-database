import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Muk",
		fr: "Grotadmorv",
		es: "Muk",
		it: "Muk",
		pt: "Muk",
		de: "Sleimok"
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
		en: "Grimer",
		fr: "Tadmorv",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Poison Sacs",
				fr: "Sacs de Poison",
				es: "Sacos de Veneno",
				it: "Sacche Velenose",
				pt: "Bolsas de Veneno",
				de: "Gifttaschen"
			},
			effect: {
				en: "The Special Condition Poisoned is not removed when your opponent’s Pokémon evolve or devolve.",
				fr: "L’État Spécial Empoisonné n’est pas retiré lorsque le Pokémon de votre adversaire évolue ou dés-évolue.",
				es: "La Condición Especial de Envenenado no se elimina cuando los Pokémon de tu rival evolucionan o involucionan.",
				it: "La condizione speciale di avvelenato non viene rimossa quando il Pokémon del tuo avversario si evolve o se ne annulla l’evoluzione.",
				pt: "A Condição Especial de Envenenado não será removida quando os Pokémon do seu oponente evoluírem ou suas evoluções forem revertidas.",
				de: "Der Spezielle Zustand Vergiftung verliert seine Wirkung nicht, wenn Pokémon deines Gegners sich entwickeln oder rückentwicklen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Toxic Secretion",
				fr: "Sécrétion Toxique",
				es: "Secreción Tóxica",
				it: "Velenolinfa",
				pt: "Secreção Tóxica",
				de: "Giftiges Sekret"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 2 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 2 contadores de daño en vez de 1 en ese Pokémon entre turnos.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato. Tra un turno e l’altro, metti due segnalini danno invece di uno su quel Pokémon.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 2 contadores de dano ao invés de 1 naquele Pokémon entre as vezes de jogar.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
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

	thirdParty: {
		cardmarket: 368993
	}
}

export default card
