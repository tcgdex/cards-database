import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [437],
	set: Set,

	name: {
		fr: "Archéodong",
		en: "Bronzong",
		es: "Bronzong",
		it: "Bronzong",
		pt: "Bronzong",
		de: "Bronzong"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			fr: "Pression Oracle",
			en: "Oracle Press",
			es: "Presión Oráculo",
			it: "Pressa Profetica",
			pt: "Compressão do Oráculo",
			de: "Orakelpresse"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les effets infligés à ce Pokémon provenant des attaques utilisées par les Pokémon de votre adversaire. (Les dégâts ne sont pas un effet.)",
			en: "During your opponent's next turn, prevent all effects of attacks used by your opponent's Pokémon done to this Pokémon. (Damage is not an effect.)",
			es: "Durante el próximo turno de tu rival, se evitan todos los efectos de los ataques usados por los Pokémon de tu rival e infligidos a este Pokémon. (El daño no es un efecto).",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti gli effetti inflitti a questo Pokémon dagli attacchi usati dai Pokémon del tuo avversario. I danni non sono un effetto.",
			pt: "Durante o próximo turno do seu oponente, previna todos os efeitos de ataques usados pelos Pokémon do seu oponente causados a este Pokémon. (Dano não é um efeito.)",
			de: "Verhindere während des nächsten Zuges deines Gegners alle Effekte der von den Pokémon deines Gegners eingesetzten Attacken, die diesem Pokémon zugefügt werden. (Schaden ist kein Effekt.)"
		},

		damage: 20
	}, {
		cost: ["Metal", "Metal"],

		name: {
			fr: "Extrasenseur",
			en: "Extrasensory",
			es: "Paranormal",
			it: "Extrasenso",
			pt: "Extrassensorial",
			de: "Sondersensor"
		},

		effect: {
			fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
			en: "If you have the same number of cards in your hand as your opponent, this attack does 90 more damage.",
			es: "Si tienes la misma cantidad de cartas en tu mano que tu rival, este ataque hace 90 puntos de daño más.",
			it: "Se hai lo stesso numero di carte in mano del tuo avversario, questo attacco infligge 90 danni in più.",
			pt: "Se você tiver o mesmo número de cartas na sua mão do que seu oponente, este ataque causará 90 pontos de dano a mais.",
			de: "Wenn du genauso viele Karten auf der Hand hast wie dein Gegner, fügt diese Attacke 90 Schadenspunkte mehr zu."
		},

		damage: "70+"
	}],

	retreat: 3,
	regulationMark: "G",

	variants: {
		holo: false
	},

	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
		es: "Bronzor",
		it: "Bronzor",
		pt: "Bronzor",
		de: "Bronzel"
	}
}

export default card