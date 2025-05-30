import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Mabosstiff",
		fr: "Dogrino",
		de: "Mastifioso",
		it: "Mabosstiff",
		es: "Mabosstiff",
		pt: "Mabosstiff"
	},

	illustrator: "OKACHEKE",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Intimidating Howl",
			fr: "Hurlement Intimidant",
			de: "Angsteinflößender Jauler",
			it: "Gridodilotta Spaventoso",
			es: "Aullido Intimidatorio",
			pt: "Uivo Intimidante"
		},

		effect: {
			en: "Once during your turn, you may switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			fr: "Une fois pendant votre tour, vous pouvez envoyer le Pokémon Actif de votre adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			de: "Einmal während deines Zuges kannst du das Aktive Pokémon deines Gegners auf seine Bank auswechseln. (Dein Gegner wählt das neue Aktive Pokémon.)",
			it: "Una sola volta durante il tuo turno, puoi spostare il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			es: "Una vez durante tu turno, puedes mover el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			pt: "Uma vez durante o seu turno, você poderá mandar o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Wild Tackle",
			fr: "Tacle Brutal",
			de: "Wilder Tackle",
			it: "Azionferoce",
			es: "Placaje Salvaje",
			pt: "Investida Feroz"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 30 dégâts.",
			de: "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 30 danni a se stesso.",
			es: "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			pt: "Este Pokémon também causa 30 pontos de dano a si mesmo."
		},

		damage: 160
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card