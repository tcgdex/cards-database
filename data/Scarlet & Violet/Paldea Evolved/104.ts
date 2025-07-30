import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Forgella",
		en: "Tinkatuff",
		es: "Tinkatuff",
		it: "Tinkatuff",
		pt: "Tinkatuff",
		de: "Tafforgita"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Câlinerie",
			en: "Play Rough",
			es: "Carantoña",
			it: "Carineria",
			pt: "Jogo Duro",
			de: "Knuddler"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			fr: "Pression Pulvérisante",
			en: "Pulverizing Press",
			es: "Presión Pulverizadora",
			it: "Pressa Polverizzante",
			pt: "Aperto Pulverizador",
			de: "Pulverisierende Presse"
		},

		effect: {
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "sowsow",

	thirdParty: {
		cardmarket: 715578
	}
}

export default card