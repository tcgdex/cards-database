import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [615],
	set: Set,

	name: {
		fr: "Hexagel",
		en: "Cryogonal",
		es: "Cryogonal",
		it: "Cryogonal",
		pt: "Cryogonal",
		de: "Frigometri"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Premier Gel",
			en: "First Freeze",
			es: "Primera Congelación",
			it: "Prima Gelata",
			pt: "Congelamento Primário",
			de: "Erster Frost"
		},

		effect: {
			fr: "Si vous jouez en second et que c'est votre premier tour, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			en: "If you go second and it's your first turn, your opponent's Active Pokémon is now Paralyzed.",
			es: "Si sales en segundo lugar y es tu primer turno, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Se inizi per secondo ed è il tuo primo turno, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Se você for o segundo a jogar e este for o seu primeiro turno, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			de: "Wenn du als Zweiter am Zug bist und es dein erster Zug ist, ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "kirisAki"
}

export default card