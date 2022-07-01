import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	set: Set,

	name: {
		en: "Ariados",
		fr: "Migalos",
		es: "Ariados",
		it: "Ariados",
		pt: "Ariados",
		de: "Ariados"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		en: "Spinarak",
		fr: "Mimigal",
		es: "Spinarak",
		it: "Spinarak",
		pt: "Spinarak",
		de: "Webarak"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Poison String-Up",
			fr: "Poison Ligotant",
			es: "Tela Venenosa",
			it: "Groviglio Velenoso",
			pt: "Amarração Venenosa",
			de: "Giftige Verwicklung"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed and Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé et Empoisonné.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Envenenado y Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato e avvelenato.",
			pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente ficará Envenenado e Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert und vergiftet."
		},

		damage: 20
	}, {
		cost: ["Grass", "Colorless"],

		name: {
			en: "Absorb",
			fr: "Vole-Vie",
			es: "Absorber",
			it: "Assorbimento",
			pt: "Absorção",
			de: "Absorber"
		},

		effect: {
			en: "Heal 50 damage from this Pokémon.",
			fr: "Soignez 50 dégâts de ce Pokémon.",
			es: "Cura 50 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 50 danni.",
			pt: "Cure 50 pontos de dano deste Pokémon.",
			de: "Heile 50 Schadenspunkte bei diesem Pokémon."
		},

		damage: 50
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card