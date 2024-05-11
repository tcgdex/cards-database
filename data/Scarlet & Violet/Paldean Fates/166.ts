import { Card } from "../../../interfaces"
import Set from "../Paldean Fates"

const card: Card = {
	set: Set,

	name: {
		en: "Tinkatuff",
		fr: "Forgella",
		es: "Tinkatuff",
		it: "Tinkatuff",
		pt: "Tinkatuff",
		de: "Tafforgita"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Play Rough",
			fr: "Câlinerie",
			es: "Carantoña",
			it: "Carineria",
			pt: "Jogo Duro",
			de: "Knuddler"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
			es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
			it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
			pt: "Jogue uma moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
			de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Pulverizing Press",
			fr: "Pression Pulvérisante",
			es: "Presión Pulverizadora",
			it: "Pressa Polverizzante",
			pt: "Aperto Pulverizador",
			de: "Pulverisierende Presse"
		},

		effect: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
			it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
			pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente.",
			de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card