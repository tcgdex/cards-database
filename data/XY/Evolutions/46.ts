import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Nidoking BREAK",
		fr: "Nidoking TURBO",
		es: "Nidoking TURBO",
		it: "Nidoking TURBO",
		pt: "Nidoking TURBO",
		de: "Nidoking-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		34,
	],

	hp: 180,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Nidoking",
		fr: "Nidoking",
		es: "Nidoking",
		it: "Nidoking",
		pt: "Nidoking",
		de: "Nidoking"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Toxic Drill",
				fr: "Perce Toxique",
				es: "Taladro Tóxico",
				it: "Trapano Tossico",
				pt: "Broca Tóxica",
				de: "Giftiger Bohrer"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Put 2 damage counters instead of 1 on that Pokémon between turns.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 2 marqueurs de dégâts au lieu d'un sur le Pokémon ciblé entre chaque tour.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Pon 2 contadores de daño en vez de 1 en ese Pokémon entre turnos.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato. Tra un turno e l'altro, metti due segnalini danno invece di uno su quel Pokémon.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Coloque 2 contadores de danos em vez de 1 naquele Pokémon entre as vezes de jogar.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege zwischen den Zügen 2 Schadensmarken anstelle von 1 Schadensmarke auf jenes Pokémon."
			},
			damage: 120,

		}
	],

	retreat: 0
}

export default card
