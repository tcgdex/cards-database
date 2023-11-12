import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Forgelina-ex",
		en: "Tinkaton ex",
		es: "Tinkaton ex",
		it: "Tinkaton-ex",
		pt: "Tinkaton ex",
		de: "Granforgita-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 300,
	types: ["Psychic"],
	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Marteau Massif",
			en: "Big Hammer",
			es: "Gran Martillo",
			it: "Gran Martello",
			pt: "Martelão",
			de: "Großer Hammer"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts pour chaque carte dans votre main.",
			en: "This attack does 30 damage for each card in your hand.",
			es: "Este ataque hace 30 puntos de daño por cada carta en tu mano.",
			it: "Questo attacco infligge 30 danni per ogni carta che hai in mano.",
			pt: "Este ataque causa 30 pontos de dano para cada carta na sua mão.",
			de: "Diese Attacke fügt für jede Karte auf deiner Hand 30 Schadenspunkte zu."
		},

		damage: "30×"
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

		damage: 140
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card