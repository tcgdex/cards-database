import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Unown",
		fr: "Zarbi",
		de: "Icognito",
		es: "Unown",
		it: "Unown",
		'es-mx': "Unown"
	},

	illustrator: "mingo",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Mysterious Signal",
			fr: "Signal Mystérieux",
			de: "Geheimnisvolles Signal",
			es: "Señal Misteriosa",
			it: "Segnale Misterioso",
			'es-mx': "Señal Misteriosa"
		},

		effect: {
			en: "If your opponent's Pokémon is Knocked Out by damage from this attack, take 1 more Prize card.",
			fr: "Si le Pokémon de votre adversaire est mis K.O. par les dégâts de cette attaque, récupérez une carte Récompense supplémentaire.",
			de: "Wenn das Pokémon deines Gegners durch Schaden dieser Attacke kampfunfähig wird, nimm 1 Preiskarte mehr.",
			es: "Si un Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, coge 1 carta de Premio más.",
			it: "Se un Pokémon del tuo avversario viene messo KO dai danni di questo attacco, prendi una carta Premio in più.",
			'es-mx': "Si el Pokémon de tu rival queda Fuera de Combate por el daño de este ataque, toma 1 carta de Premio más."
		},

		damage: 40,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card