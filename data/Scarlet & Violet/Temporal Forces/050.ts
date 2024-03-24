import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Walking Wake ex",
		fr: "Serpente-Eau-ex",
		es: "Ondulagua ex",
		it: "Acquecrespe-ex",
		pt: "Onda Ando ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 220,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Azure Seas",
			fr: "Mers Azur",
			es: "Mares Cerúleos",
			it: "Mari Azzurri",
			pt: "Mares Celestes"
		},

		effect: {
			en: "Damage from attacks used by this Pokémon isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts des attaques utilisées par ce Pokémon ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de los ataques usados por este Pokémon no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni degli attacchi usati da questo Pokémon non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano dos ataques usados por este Pokémon não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Catharsis Roar",
			fr: "Rugissement Cathartique",
			es: "Rugido Catártico",
			it: "Ruggito Catartico",
			pt: "Rugido Catarse"
		},

		effect: {
			en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 120 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival se ve afectado por una Condición Especial, este ataque hace 120 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario è influenzato da una condizione speciale, questo attacco infligge 120 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente estiver afetado por uma Condição Especial, este ataque causará 120 pontos de dano a mais."
		},

		damage: "120+"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card